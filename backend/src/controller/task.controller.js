import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Task } from "../model/task.model.js";
import { User } from "../model/user.model.js";
import { isValidObjectId } from "mongoose";


const memberName = [];
const listOfAvablie = asyncHandler(async(req,res)=>{
    //send all user list with number of task ass.
    const allUsers = await User.find();
    allUsers.forEach(user => {
        // Check if the user type is "member"
        if (user.type === "member" && !user.isCurrentlyAss) {
            memberName.push(user.fullName);
            // console.log(memberName);
        }
    })

    res.status(200).json(
        new ApiResponse(200,memberName,"this contain all list of member avablie right now")
    )
})

// listOfAvablie();


const registerTask =  asyncHandler(async(req,res)=>{
    const  createdByTask  = req.params._id;
    const itsType  = req.user.type;

    if(itsType != 'admin'){
        throw new ApiError(407,"You are not about to create a card");
    }

    const userrr  = req.user;

    console.log("hello : ", userrr); //this is debegger console.log()
    const {title,deadline,description} = req.body
    const {memberID} = req.body; //this should be _id

    
    try {
        const card = await Task.create({
            title,
            description,
            deadline,
            assignedTo: memberID,   //this will be arrey
            createdBy: req.body._id,
            isCurrentlyAss: true
        })
    
        if(!card){
            throw new ApiError(500, "Card not created successfully")
        }
    
        res.status(200).json(
            new ApiResponse(200,null,"Card created  Successfully")
        )
    } catch (error) {
        throw new ApiError(500, error?.message || "Something went wrong while creating card")
    }
})

const updateTask = asyncHandler(async(req,res)=>{
    //this is to update  status , progress , 

    const { status , progress, taskId} = req.body
    if(!progress){
        throw new ApiError(404," progress is required to update the task Cards")
    }
    if(!status){
        status = "In Progress"
    }

    const updatedTask = await Task.findByIdAndUpdate(taskId,
        {
            $set:{
                progress,
                status
            }
          }
        ,{new: true}
    )
})

const readTask = await asyncHandler(async(req,res)=>{
    const {taskId} = req.body
    if(!taskId && isValidObjectId(taskId)){
        throw new ApiError(401, " either TasksID is empty or it not valid ")
    }

    const taskDetail = await Task.aggregate(
        $match:{
            
        }
    )

})


export {
    registerTask,
    listOfAvablie,
    updateTask,
    readTask
}