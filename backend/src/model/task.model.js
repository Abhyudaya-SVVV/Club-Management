import mongoose, { Schema } from "mongoose"


// Define schema for Task
const taskSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: true 
    },
    description: {
        type: String, 
        required: true
    },
    status: { 
        type: String, 
        enum: ['Pending', 'In Progress', 'Completed'], 
        default: 'Pending' 
    },
    assignedTo: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true },
    createdBy: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    deadline: { 
        type: Date,
        required: true
    },
    progress: { 
        type: Number, min: 0, max: 100 ,
        default: 0
    }
});


const Task = mongoose.model('Task', taskSchema);

export { Task }