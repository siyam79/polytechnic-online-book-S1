const express = require("express");
const {
  addUser,
  loginUser,
  getAllUsers,
  getUserByEmail,
  updateUserProfile,
} = require("../controllers/UserContorller");
const userRouter = express.Router();

userRouter.post("/register", addUser);
userRouter.post("/login", loginUser);
userRouter.get("/users", getAllUsers);
userRouter.get("/users/:email", getUserByEmail);
userRouter.put("/update/u/:id", updateUserProfile);

module.exports = userRouter;
