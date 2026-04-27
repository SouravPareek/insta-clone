const followModel = require("../models/follow.model");
const userModel = require("../models/user.model")

async function followUserController(req, res) {
    //identifyUser middleware decoded ke data ko req.user ki property create karke usme set kar deta ha
    const followerUsername = req.user.username;
    const followeeUsername = req.params.username;

    if (followerUsername === followeeUsername) {
        return res.status(400).json({
            message: "You cannot follow yourself",
        });
    }

    const isFolloweeExists = await userModel.exists({username: followeeUsername})

    if(!isFolloweeExists){
        return res.status(404).json({
            message: "User not found"
        })
    }

    const existingFollow = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername,
    });

    if (existingFollow) {
        if(existingFollow.status === 'pending'){
            return res.status(409).json({
                message: "Follow request already sent",
            });
        }
        else if(existingFollow.status === 'accepted'){
            return res.status(409).json({
             message: "Already following",
            });
        }
        else if(existingFollow.status === 'rejected'){
            existingFollow.status = "pending";
            existingFollow.save();

            return res.status(409).json({
                message: "Follow request sent again.",
            });
        }
    }

    const followRecord = await followModel.create({
        follower: followerUsername,
        followee: followeeUsername,
        status : "pending"
    });

    res.status(201).json({
        message: `Follow request sent to ${followeeUsername}`,
        follow: followRecord,
    });
}

async function acceptFollowController(req, res){
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    const follow = await followModel.findOneAndUpdate(
        {
            follower : followerUsername,
            followee: followeeUsername,
            status: "pending"
        },
        {
            status: "accepted"
        },
        {
            new: true
        }
    )

    if(!follow){
        return res.status(404).json({
            message: "Follow request not found"
        })
    }

    res.status(200).json({
        message: `You accepted ${followerUsername}'s request`,
        follow
    })
}

async function rejectFollowController(req, res){
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    const follow = await followModel.findOneAndUpdate(
        {
            follower : followerUsername,
            followee: followeeUsername,
            status: "pending"
        },
        {
            status: "rejected"
        },
        {
            new: true
        }
    )

    if(!follow){
        return res.status(404).json({
            message: "Follow request not found"
        })
    }

    res.status(200).json({
        message: `You rejected ${followerUsername}'s request`,
        follow
    })
}


async function unfollowUserController(req, res) {
    const followerUsername = req.user.username;
    const followeeUsername = req.params.username;

    const follow = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername,
        status: "accepted"
    })

    if(!follow){
        return res.status(200).json({
            message: `You are not following ${followeeUsername}`
        })
    }

    await followModel.findByIdAndDelete(follow._id)

    res.status(200).json({
        message: `You have unfollowed ${followeeUsername}`
    })
}

async function getPendingRequestsController(req, res){
    const loggedInUser = req.user.username;

    const requests = await followModel.find({
        followee: loggedInUser,
        status: "pending"
    })

    if(!requests){
        return res.status(500).json({
            message: "No pending requests"
        })
    }

    res.status(200).json({
        count: requests.length,
        data:requests
    })
}

module.exports = {
    followUserController,
    acceptFollowController,
    rejectFollowController,
    unfollowUserController,
    getPendingRequestsController
};
