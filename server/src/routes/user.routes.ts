import express from "express";
import * as UserController from "../controller/user.controller";

export const userRouter = express.Router();

userRouter.post("/login", UserController.login);
userRouter.post("/register", UserController.register);
userRouter.get("/getUsers", UserController.getUsers);
userRouter.delete("/deleteUsers/:id", UserController.deleteUser);
userRouter.post("/newPassword/:id", UserController.newPassword);
