import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { connectDb } from "./config/dbConnect.js";
import userRoutes from "./routes/userRoutes.js";

import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: ["https://agrivision-task-pmy2.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

const db = await connectDb();

app.use("/api/users", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
