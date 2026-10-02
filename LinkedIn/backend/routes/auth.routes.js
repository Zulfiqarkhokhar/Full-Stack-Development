import express from "express";
import { login, sigup } from "../controllers/auth.controllers.js";

let authRouter = express.Router();

authRouter.post("/signup",sigup);
authRouter.post("/login",login);

export default authRouter;