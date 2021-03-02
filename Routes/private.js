import express from "express";
const router = express.Router();
import getPrivateRoute from "../Controller/private.js";
import {protect} from "../Middlewares/private.js";
// Protect Is The MiddleWare where getPrivateRoute is the Route Controller
export default router.get("/",protect, getPrivateRoute);
