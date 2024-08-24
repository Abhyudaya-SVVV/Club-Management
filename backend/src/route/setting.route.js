import { Router } from "express";

import { authenticate } from "../utils/auth.middleware.js";
import { profileView,setting } from "../controller/setting.controller.js";
const router = Router();


router.use(authenticate)
router.route("/").get(setting);
router.route("/profile").get(profileView);
