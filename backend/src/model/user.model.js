import mongoose, { Schema } from "mongoose"
import bcrypt from "bcrypt"

// Define schema for User
const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        require: true
    },
    username: {
        type: String, 
        required: true,
        unique: true 
    },
    email: {
        type: String, 
        required: true,
        unique: true 
    },
    phoneNumber: {
        type: String, 
        required: true,
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    type: { 
        type: String, 
        enum: ['admin', 'member'],
        required: true 
    }
});

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

// Define models
const User = mongoose.model('User', userSchema);

export { User }
