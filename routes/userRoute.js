import express from "express";

import { getAllUsers, getOneUser, newUser } from "../controllers/userControllers.js";

const router = express.Router()

router.get("/all", getAllUsers)

router.post("/new", newUser)

router.get("/userid/:id", getOneUser)

export default router
