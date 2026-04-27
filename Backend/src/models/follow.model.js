const mongoose =require('mongoose')

const followSchema = new mongoose.Schema({
    follower:{
        type: String,
        required: [true, "Follower is required"]
    },
    followee:{
        type: String,
        required: [true, "Followee is required"]
    },
    status:{
        type: String,
        default: "pending",
        //enum=>what values status property can have here, if any other value is tried than database doesnt allow it.
        enum: {
            values: ["pending", "accepted", "rejected"],
            message: "status can only be pending, accepted or rejected."
        }
    }
}, {
    timestamps: true
})

followSchema.index({follower: 1, followee: 1}, {unique : true})

const followModel = mongoose.model("follows", followSchema)

module.exports = followModel