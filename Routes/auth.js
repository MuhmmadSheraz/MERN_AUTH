import express from "express";
const router = express.Router();
import { Sign_IN, Sign_UP } from "../Controller/auth.js";
router.post("/auth/login", Sign_IN);
router.post("/auth/sign_up", Sign_UP);
export default router;
