import express from "express";
import authRoutes from "./Routes/auth.js";
const app = express();
app.use("/api", authRoutes);
const PORT = 3000;
app.listen(PORT, () => {
  console.log("server is Running on" + PORT);
});
