import dotenv from "dotenv";
import express from "express";
import products from "./api/productsApi.js";
import cors from "cors";
import path, { join } from "path";
import { fileURLToPath } from "url";
dotenv.config();
const app = express();
const port = process.env.PORT;

// dirname for ESM (ECMA Script Module)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.static(path.join(__dirname, "./public/products_images")));

app.get("/api", (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
