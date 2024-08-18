const { register, login, logout } = require("./user");

const {
  createPost,
  getAllPosts,
  getPostById,
  deletePost,
  updatePost,
} = require("./post");
module.exports = {
  register,
  login,
  logout,
  createPost,
  getAllPosts,
  getPostById,
  deletePost,
  updatePost,
};
