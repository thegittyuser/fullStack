import express from "express";
const router = express.Router();
import { doregister } from "../controller/userdata.controller";

router.post("/doregister", doregister);

export default router;
