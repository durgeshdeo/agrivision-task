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
    origin: [
      "https://agrivision-task-ilhtckpxd-durgeshs-projects-4fe5781a.vercel.app",
      "http://localhost:3000",
      "https://agrivision-task-bakcend-be4ws0gsk-durgeshs-projects-4fe5781a.vercel.app/",
    ],
    methods: ["GET"],
  })
);

app.use(express.json());

const db = await connectDb();

app.use("/api/users", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
