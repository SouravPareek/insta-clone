const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: [true, "username already exists."],
        required: [true, "User name is required"]
    },
    email:{
        type: String,
        unique: [true, "Email already exists."],
        required: [true, "Email is required"]
    },
    password:{
        type: String,
        required: [true, "Password is required"],
        select:false// now whenever users data is read from DB password will not be read
    },
    bio: String,
    profileImage:{
        type: String,
        default:"https://ik.imagekit.io/gifeihpvy/account-icon-user-icon-vector-graphics_292645-552.avif?updatedAt=1774956927123"
    }
})

const userModel = mongoose.model("users", userSchema)

module.exports = userModel