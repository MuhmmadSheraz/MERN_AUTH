import express from "express";
import authRoutes from "./Routes/auth.js";
import { connectDB } from "./Config/db.js";
const app = express();
connectDB();
app.use(express.json());
app.use("/api", authRoutes);
const PORT = 3000;
const server = app.listen(PORT, () => {
  console.log("server is Running on" + PORT);
});
// process.on("unhandledRejection", (err, promise) => {
//   console.log(`Logged Error: ${err.message}`);
//   server.close(() => process.exit(1));
// });
