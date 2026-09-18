// apis
import express, { Router } from "express"
import { createUser, deleteUser, findOneUser, home, readAllUsers, updateUser } from "../controllers/user.controller.js";

// router will be used for app
const router = express(Router());

router.get("/",home)

//creating user in db
router.post("/create",createUser)

// get all users

router.get("/readAll", readAllUsers)

// find by username

router.get("/read/:username",findOneUser)

// update user

router.put("/update/:id",updateUser)

// delete user

router.delete("/delete/:id",deleteUser)

export default router;