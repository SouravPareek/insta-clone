const express = require("express")

const postRouter = express.Router()
const postController = require('../controllers/post.controller')
const multer = require('multer')
const upload = multer({storage: multer.memoryStorage()})
const identifyUser = require('../middlewares/auth.middleware')

/**
 * @route POST /api/posts [protected]
 * @description create a post with the content and image(optional) provided
 */
postRouter.post("/", upload.single("profileImage"), identifyUser, postController.createPostController)

/**
 * @route GET /api/posts/ [protected]
 * @description get all the posts created by the user that the request come from
 */

postRouter.get("/", identifyUser, postController.getPostController)


/**
 * @route GET /api/posts/details/:postid
 * @description return detail about specific post with the id. also check whether the post belongs to the user from whom request come from
 */
postRouter.get("/details/:postid",  identifyUser, postController.getPostDetailsController)


/**
 * @route POST /api/posts/like/:postid
 * @description likes the post with specified post id
 */

postRouter.post("/like/:postid", identifyUser, postController.likePostController)
postRouter.post("/unlike/:postid", identifyUser, postController.unLikePostController)

/**
 * @route GET /api/posts/feed
 * @description get all the post created in the db
 * @access private
 */
postRouter.get('/feed', identifyUser, postController.getFeedController)

module.exports = postRouter