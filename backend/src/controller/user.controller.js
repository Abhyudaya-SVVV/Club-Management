import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../model/user.model.js";
const registerUser = asyncHandler(async(req,res)=>{
    const {fullName,email,username,password,phoneNumber,type} = req.body;

    if (
        [fullName, email, username, password,phoneNumber,type].some((field) => field?.trim() === "")
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
})

const createCard = asyncHandler(async (req,res)=>{

    res.send("hello World")
    res.status(200).json(
        new ApiResponse(200,{},"this is test")
    )
})

const searchMember = asyncHandler (async (req,res)=>{
    const member  = req.params;
    if(!member){
        throw new ApiError(404,"this is also test")
    }

    console.log("this is memeber ID : ",member);
    res.status(200).json(
        new ApiResponse(200,member,"this is test")
    )

})

export {registerUser,searchMember}