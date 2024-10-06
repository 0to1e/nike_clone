//backend/app.js

import express from "express";
import cors from "cors";
import morgan from "morgan";
import logger from "./utils/logger.js";
import cookieParser from "cookie-parser";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(
  morgan("combined", {
    stream: { write: (message) => logger.info(message.trim()) },
  })
);

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error("Error handling middleware:", err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});



import userRoute from "./routes/user.js";

// API versioning
app.use("/api/v1/user", userRoute);
