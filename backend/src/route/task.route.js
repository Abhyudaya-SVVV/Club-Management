import { Router } from "express";
import {
    registerTask,
    listOfAvablie
    //updateTask,
    //readTask
} from "../controller/task.controller.js"

const router = Router();

router.route("//registerTask").post(registerTask);
router.route("/listofAvabliemember").post(listOfAvablie);
router.route("/updateTask").post(updateTask);
router.route("/readTask").get(readTask);

export default router;