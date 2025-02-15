import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    password: {
        type: String,
        required: true
    },
    age:{
        type: Number,
        // required: true
    },
    role:{
        type: String,
        default: "user"
    },
    cart:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "carts",
    }
})


const userModel = mongoose.model("users", userSchema)

export default userModel