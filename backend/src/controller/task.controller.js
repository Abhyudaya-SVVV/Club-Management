import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Task } from "../model/task.model.js";
import { User } from "../model/user.model.js";

const registerTask =  asyncHandler(async(req,res)=>{
    const { userId } = req.params;
    const {title,deadline,description,assignedTo} = req.body
    // console.log(title,deadline,description,assignedTo,userId);
    // console.log(userId);

    const allUsers = await User.find();
    //console.log(allUsers);

   // const names =  allUsers.map(user => user.fullName);
   allUsers.forEach(user => {
    // Check if the user type is "member"
    if (user.type === "member" && !user.isCurrentlyAss) {
        const memberName = [];
        memberName.push(user.fullName);
        console.log(memberName);
    }
    })



    try {
        const card = await Task.create({
            title,
            description,
            deadline,
            assignedTo: "66121284795573b11fab9818",
            createdBy:  "66121284795573b11fab9818",
            isCurrentlyAss: true
        })
    
        if(!card){
            throw new ApiError(500, "Card not created successfully")
        }
    
        res.status(200).json(
            new ApiResponse(200,null,"Card created  Successfully")
        )
    } catch (error) {
        throw new ApiError(500,error?.message || "Something went wrong while creating card")
    }
})

export {
    registerTask
}