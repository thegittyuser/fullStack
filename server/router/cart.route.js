import cart from "../controller/cart.controller.js";
import express from "express";
export const router = express.Router();

router.post("/cart", cart);
