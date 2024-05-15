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
        validate: {
            validator: function(v) {
                // Check if the phone number contains at least 10 digits
                return /^\d{10,}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number. It should contain at least 10 digits.`
        },
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
    },
    isCurrentlyAss:{
        type: Boolean,
        default: false
    }
});

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

// Define models
const User = mongoose.model('User', userSchema);

export { User }
