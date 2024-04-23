import { Router } from "express";
import {
    registerUser,
    login,
    logOut
} from "../controller/user.controller.js"

const router = Router()

router.route("/registerUser").post(registerUser)
router.route("/login").post(login)
router.route("/logOut").post(logOut)

export default router;
