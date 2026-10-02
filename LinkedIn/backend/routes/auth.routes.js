import express from "express";
import { sigup } from "../controllers/auth.controllers.js";

let authRouter = express.Router();

authRouter.post("/signup",sigup);

export default authRouter;