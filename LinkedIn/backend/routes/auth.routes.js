import express from "express";
import { login, logout, sigup } from "../controllers/auth.controllers.js";

let authRouter = express.Router();

authRouter.post("/signup",sigup);
authRouter.post("/login",login);
authRouter.get("/logout",logout);

export default authRouter;