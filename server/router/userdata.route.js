import express from "express";
const router = express.Router();

import {
  dologin,
  doregister,
  Logout,
  Profile,
} from "../controller/userdata.controller.js";

router.post("/doregister", doregister);
router.post("/dologin", dologin);
router.get("/profile/:sessionId", Profile);
router.get("/logout/:sessionId", Logout);

export default router;
