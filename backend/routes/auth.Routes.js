import express  from "express"
import { forgotPassword, login, logout, resetPassword, signup, verifyEmail } from "../controllers/auth.controller.js";

const authrouter =express.Router();



authrouter.post("/signup",signup)
authrouter.post("/login",login)
authrouter.post("/logout",logout)

authrouter.post("/verify-email", verifyEmail);
authrouter.post("/forgot-password",forgotPassword);

authrouter.post("/reset-password/:token", resetPassword);








export default authrouter

