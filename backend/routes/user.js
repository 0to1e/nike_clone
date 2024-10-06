// routes/user.js

import express from "express";

import {
  handleUserSignup,
  handleUserLogin,
  checkExistingUserCredentials,
  listAllUsers,
} from "../controller/user.js";
import {
  loginValidationRules,
  registrationValidationRules,
  handleValidationResult,
} from "../middleware/userValidation.js";
import { restrictToLoggedInUserOnly } from "../middleware/auth.js";
const router = express.Router();

// Register
router.post(
  "/register",
  registrationValidationRules, // Validation middleware
  handleValidationResult, // Handle validation errors
  handleUserSignup
);

router.post("/login", 
  loginValidationRules, // Validation middleware
  handleValidationResult, // Handle validation errors
  handleUserLogin);
router.post("/checkUnique", checkExistingUserCredentials);
router.get("/allUsers", restrictToLoggedInUserOnly, listAllUsers);

export default router;
