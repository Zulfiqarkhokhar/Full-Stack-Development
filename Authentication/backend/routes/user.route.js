import { Router } from "express";
import {
    login,
    logout,
    singup,
    getCurrentUser
} from "../controllers/user.controller.js";
import isAuth from "../middleware/isAuth.js";
import upload from "../middleware/upload.js";

const router = Router();

router.post("/signup",upload.single("profileImage"),singup);
router.post("/login",login);
router.post("/logout",logout);
router.get("/me",isAuth,getCurrentUser);

export default router;