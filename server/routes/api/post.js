const {
  createPost,
  getAllPosts,
  getPostById,
  deletePost,
  updatePost,
} = require("../../controllers");
const authMiddleware = require("../../middleware/authentication");
const express = require("express");

const router = express.Router();
console.log(authMiddleware);
router.post("/create", authMiddleware, createPost);
router.get("/all", getAllPosts);
router.get("/:id", getPostById);
router.delete("/:id", authMiddleware, deletePost);
router.patch("/:id", authMiddleware, updatePost);
module.exports = router;
