//backend/app.js

import express from "express";
import cors from "cors";
import morgan from "morgan";
import logger from "./utils/logger.js";
import cookieParser from "cookie-parser";

export const app = express();
const corsOptions = {
  origin: [`http://localhost${process.env.FRONTPORT}`],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  // exposedHeaders: ['Custom-Header'], // Exposed headers
  credentials: true, // Whether to allow credentials (cookies, authorization headers)
  // maxAge: 3600, // Maximum age of the preflight request cache
};
  
app.use(corsOptions);
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
