import express from "express";

import { deleteUser, getAllUsers, getOneUser, newUser, updateUser } from "../controllers/userControllers.js";

const router = express.Router()

router.get("/all", getAllUsers)

router.post("/new", newUser)

router.route("userid/:id")
.get(getOneUser)
.put(updateUser)
.delete(deleteUser)

export default router
