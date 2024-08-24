import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Task } from "../model/task.model.js";
import { User } from "../model/user.model.js";
import { isValidObjectId } from "mongoose";

//todo logout, profile,password change,

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

const passwordChange = asyncHandler(async (req, res) => {
    try {
        const { oldPassword, newPassword } = req.body();
        if (oldPassword === newPassword) {
            throw new ApiError(401, "New and old password do not match")
        }
        const isValid = await user.isPasswordCorrect(oldPassword)

        if (isValid) {
            throw new ApiError(401, "Old password do not match")
        }

        user.password = newPassword

        return res
            .status(200)
            .json(
                new ApiResponse(200, null, "Password has been changed ")
            )

    } catch (error) {
        throw new ApiError(500, error?.message || "Unable to change the password due to internal error")
    }
})


const profileView = asyncHandler(async (req, res) => {
    const { userId } = req.body;

    // Validate userId
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
        throw new ApiError(404, "User ID not found or invalid.");
    }

    // Aggregate user profile data
    const userProfileData = await User.aggregate([
        {
            $match: { _id: mongoose.Types.ObjectId(userId) }
        },
        {
            $project: {
                fullName: 1,
                username: 1,
                email: 1,
                phoneNumber: 1,
                type: 1,
                isCurrentlyAss: 1
                // Add more fields if needed
            }
        }
    ]);

    // Check if user profile data is found
    if (!userProfileData.length) {
        throw new ApiError(404, "User profile not found.");
    }

    // Send response
    res.status(200).json({
        success: true,
        data: userProfileData[0]
    });
});


export {
    passwordChange,
    profileView,
    logOut,
}