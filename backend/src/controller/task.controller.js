import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Task } from "../model/task.model.js";
import { User } from "../model/user.model.js";
import { isValidObjectId } from "mongoose";

// Fetch list of available members
const listOfAvablie = asyncHandler(async (req, res) => {
    const memberNames = [];
    const allUsers = await User.find();
    allUsers.forEach(user => {
        if (user.type === "member" && user.isCurrentlyAss <= 2) {
            memberNames.push(user.fullName);
        }
    });

    res.status(200).json(new ApiResponse(200, memberNames, "This contains all list of available members right now"));
});

// Register a new task
const registerTask = asyncHandler(async (req, res) => {
    const { _id: createdBy, type: itsType } = req.body;
    console.log(req.users);

    if (itsType !== 'admin') {
        throw new ApiError(401, "You are not allowed to create a task");
    }

    const { title, deadline, description, memberID } = req.body;

    try {
        const task = await Task.create({
            title,
            description,
            deadline,
            assignedTo: memberID,
            createdBy,
        });

        if (!task) {
            throw new ApiError(500, "Task not created successfully");
        }

        res.status(200).json(new ApiResponse(200, task, "Task created successfully"));
    } catch (error) {
        throw new ApiError(500, error.message || "Something went wrong while creating task");
    }
});

// Update a task
const updateTask = asyncHandler(async (req, res) => {
    const { taskId, status, progress } = req.body;

    if (!progress) {
        throw new ApiError(400, "Progress is required to update the task");
    }

    const updatedTask = await Task.findByIdAndUpdate(taskId, {
        $set: {
            status: status || "In Progress",
            progress
        }
    }, { new: true });

    if (!updatedTask) {
        throw new ApiError(404, "Task not found");
    }

    res.status(200).json(new ApiResponse(200, updatedTask, "Task updated successfully"));
});

// Read a task
const readTask = asyncHandler(async (req, res) => {
    const { taskId } = req.body;

    if (!taskId || !isValidObjectId(taskId)) {
        throw new ApiError(400, "Task ID is either empty or not valid");
    }

    const task = await Task.findById(taskId).populate('assignedTo createdBy');

    if (!task) {
        throw new ApiError(404, "Task not found");
    }

    res.status(200).json(new ApiResponse(200, task, "Task details fetched successfully"));
});

export {
    registerTask,
    listOfAvablie,
    updateTask,
    readTask
};
