import express, { Router } from "express"
import {singup } from "../controllers/user.controller.js";


let router = express(Router());

router.post("/signup",singup);


export default router;