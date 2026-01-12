import express from "express";
const router = express.Router();
// login system
import {
  dologin,
  doregister,
  Logout,
  Profile,
} from "../controller/userdata.controller.js";
// cart controller
import { cart } from "../controller/cart.controller.js";

router.post("/doregister", doregister);
router.post("/dologin", dologin);
router.get("/profile/:sessionId", Profile);
router.get("/logout/:sessionId", Logout);

// cart route
router.post("/cart", cart);

export default router;
