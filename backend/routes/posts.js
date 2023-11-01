const express = require("express");

const router = express.Router();

const postscontroller = require("../controller/posts")

router.post("/",postscontroller.getpost)

//router.get("/:postId/comments")
//router.get("/:postId")


//router.post("/")
//router.post("/postId/comments")



///router.put("/:postId")
//router.put("/:postId/comments/:commentId")

//router.delete("/:postId")
//router.delete("/:postId/comments/:commentId")


module.exports = router;

