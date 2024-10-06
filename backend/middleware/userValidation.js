//middleware/user.js

import { body, validationResult } from "express-validator";

const registrationValidationRules = [
  body("first_name")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("First name is required"),
  body("last_name")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Last name is required"),
  body("user_name")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Username is required")
    .matches(/^[^@]+$/, "i") // Ensures username does not contain '@'
    .withMessage("Username cannot contain the '@' character"),
  body("email").trim().escape().isEmail().withMessage("Invalid email format"),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{10,}$/,
      "i"
    )
    .withMessage(
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
    ),
];

const loginValidationRules = [
  body("user_name")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Username or email is required")
    .custom((value) => {
      if (!value.includes("@")) {
        return true; // Treat it as a username
      }
      if (!/\S+@\S+\.\S+/.test(value)) {
        throw new Error("Invalid email format");
      }
      return true; // Treat it as a valid email
    }),
  body("password").trim().notEmpty().withMessage("Password is required"),
];

// Middleware to handle validation results
const handleValidationResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Map the errors to only include the desired fields
    const formattedErrors = errors.array().map((error) => ({
      field: error.path,
      msg: error.msg,
    }));

    return res.status(400).json({ errors: formattedErrors });
  }
  next();
};

export {
  registrationValidationRules,
  loginValidationRules,
  handleValidationResult,
};
