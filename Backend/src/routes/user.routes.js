const express = require('express')
const userController = require('../controllers/user.controller')
const identifyUser = require('../middlewares/auth.middleware')

const userRouter = express.Router();


/**
 * @route GET /api/users/follow/requests
 * @description get pending follow requests
 * @access Private
 */
userRouter.get('/follow/requests', identifyUser, userController.getPendingRequestsController)


/**
 * @route POST /api/users/follow/:username
 * @description Follow a user
 * @access Private
 */
userRouter.post('/follow/:username', identifyUser, userController.followUserController)


/**
 * @route DELETE /api/users/follow/:username
 * @description unfollow a user(only if accepted)
 * @access Private
 */
userRouter.delete('/follow/:username', identifyUser, userController.unfollowUserController)

/**
 * @route PATCH /api/users/follow/accept/:username
 * @description accept follow request
 * @access Private
 */
userRouter.patch('/follow/accept/:username', identifyUser, userController.acceptFollowController)

/**
 * @route PATCH /api/users/follow/reject/:username
 * @description reject follow request
 * @access Private
 */
userRouter.patch('/follow/reject/:username', identifyUser, userController.rejectFollowController)

module.exports = userRouter;