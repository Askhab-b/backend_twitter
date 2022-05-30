const { Router } = require("express");
const { commentController } = require("../controllers/comment.controller");

const router = Router();

router.post("/comment", commentController.postComment);
router.delete("/comment/:id", commentController.deleteComment);
router.get("/comment", commentController.AllComments);
router.get("/comment/:id", commentController.FindComment);
router.patch("/comment/:id", commentController.patchComment);

module.exports = router;
