import dotenv from "dotenv";
import cors from "cors"
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(cors())

// Use Routes
import userRouter from "./routes/user.routes.js";
import uploadRouter from "./routes/upload.routes.js";

app.use("/auth", userRouter);
app.use("/api", uploadRouter);

export default app;
