const express = require("express");
const { register, login, logout } = require("../../controllers/user");
const authMiddleware = require("../../middleware/authentication");
const router = express.Router();

// User routes
console.log(register, "d");
// Registration route
router.post("/register", register);
router.post("/login", login);
router.post("/logout", authMiddleware,logout);

module.exports = router;
