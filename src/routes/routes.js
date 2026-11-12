//http requests

import express from "express"
import controller from "../controller/controller.js"

const router = express.Router();

router.get("/",controller.getTasks);

router.post("/", controller.createTask);  

export default router;