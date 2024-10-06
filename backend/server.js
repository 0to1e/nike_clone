import mongoose from "mongoose";
import {app} from './app.js'
import logger from './utils/logger.js'

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      logger.info(`Listening on PORT ${process.env.PORT}`);
    });
  })
  .catch((err) => logger.error("MongoDB connection error:", err));


  