import { Router } from "express";
import {
    createCard,
    searchMember
} from "../controller/user.controller.js"

const router = Router()

router.route("/createCard").get(createCard)
router.route("/:member").post(searchMember)

export default router;
