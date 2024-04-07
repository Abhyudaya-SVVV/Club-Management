import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../model/user.model.js";
const registerUser = asyncHandler(async (req, res) => {
    const { fullName, email, username, password, phoneNumber, type } = req.body;

    try {
        if (
            [fullName, email, username, password, phoneNumber, type].some((field) => field?.trim() === "")
        ) {
            throw new ApiError(400, "All fields are required")
        }
    
        const existedUser = await User.findOne({
            $or: [{ username }, { email }]
        })
    
        if (existedUser) {
            throw new ApiError(409, "User with email or username already exists")
        }
    
        const user = await User.create({
            fullName,
            email,
            password,
            phoneNumber,
            username: username.toLowerCase(),
            type: type
        })
    
        const createdUser = await User.findById(user._id).select(
            "-password"
        )
    
        if (!createdUser) {
            throw new ApiError(500, "Something went wrong while registering the user")
        }
    
        return res.status(201).json(
            new ApiResponse(200, createdUser, "User registered Successfully")
        )
    } catch (error) {
        throw new ApiError(500, error?.message ||  "Internal sevrer erorr not able to Register ")
    }
})

const login = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    try {
        if (!(username || email)) {
            throw new ApiError(404, "Email or username is required ,LOGIN")
        }
    
        if (!password) {
            throw new ApiError(404, "Password is required ,LOGIN")
        }
    
        const user = await User.findOne({
            $or: [{ username }, { email }]
        })
    
        if (!user) {
            throw new ApiError(404, "User does not exist")
        }
    
        const isPasswordValid = await user.isPasswordCorrect(password)
    
        if (!isPasswordValid) {
            throw new ApiError(401, "Invalid user credentials")
        }
    
        const loggedInUser = await User.findById(user._id).select("-password")
    
        return res
        .status(200)
        .json(
            new ApiResponse(
                200, 
                loggedInUser
                ,
                "User logged In Successfully"
            )
        )
    } catch (error) {
        throw new ApiError(500, error?.message ||  "Internal sevrer erorr not able to logIN ")
    }

})

const logOut = asyncHandler(async(req,res)=>{
    try {
        return res
        .status(200)
        .json(
            new ApiResponse(200,null,"Logged Out Successfully")
        )
    } catch (error) {
        throw new ApiError(500, error?.message ||  "Internal sevrer erorr not able to logged out")
    }
})



export { 
    registerUser,
    login,
    logOut
}