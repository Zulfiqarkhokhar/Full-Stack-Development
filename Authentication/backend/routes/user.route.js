import express, { Router } from "express"
import { login, singup } from "../controllers/user.controller.js";


let router = express(Router());

router.post("/signup",singup);
router.get("/login",login);


export default router;