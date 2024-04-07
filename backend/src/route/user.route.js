import { Router } from "express";
import {
    registerUser,
    searchMember
} from "../controller/user.controller.js"

const router = Router()

router.route("/registerUser").get(registerUser)
router.route("/:member").post(searchMember)

export default router;
