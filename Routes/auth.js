import express from "express";
const router = express.Router();
import { Sign_IN } from "../Controller/auth.js";
router.post("/auth", Sign_IN);
export default router;
