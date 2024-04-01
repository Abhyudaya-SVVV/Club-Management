import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

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

export {createCard,searchMember}