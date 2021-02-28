import express from "express";
import authRoutes from "./Routes/auth.js";
import {connectDB} from "./Config/db.js";
const app = express();
connectDB   ();
app.use("/api", authRoutes);
const PORT = 3000;
app.listen(PORT, () => {
  console.log("server is Running on" + PORT);
});
