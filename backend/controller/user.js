//controller/user.js

import User from "../model/user.js";
import { generateCookie } from "../utils/cookieGenerator.js";
import logger from "../utils/logger.js";

export async function handleUserLogin(req, res) {
  const { user_name, password } = req.body;

  logger.info(`Login attempt for user: ${user_name}`);

  try {
    // Find user by username or email
    const user = await User.findOne({
      $or: [{ user_name }, { email: user_name }],
    });

    if (!user) {
      logger.warn(`Login failed for user ${user_name}: User not found.`);
      return res.status(404).json({ userNotFound: true });
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      logger.warn(`Login failed for user ${user_name}: Invalid password.`);
      return res.status(401).json({ incorrectPassword: true });
    }

    logger.info(`User logged in successfully: ${user_name}`);

    // Generate a cookie with the token
    await generateCookie(res, user); // This sets the cookie

    return res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    logger.error(`Error logging in user ${user_name}:`, error.message);
    return res
      .status(500)
      .json({ message: "Error logging in", error: error.message });
  }
}

export async function handleUserSignup(req, res) {
  const { first_name, last_name, user_name, email, password } = req.body;

  logger.info(`Signup attempt for user: ${user_name}`);

  try {
    const newUser = await User.create({
      first_name,
      last_name,
      user_name,
      email,
      password,
    });

    logger.info(`User created successfully: ${user_name}`);
    await generateCookie(res, newUser);
    return res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    logger.error(`Error creating user ${user_name}:`, error.message);
    return res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
}

export async function checkExistingUserCredentials(req, res) {
  const { email, user_name } = req.body;

  try {
    // Fetch all users that have either the same email or the same username
    const existingUsers = await User.find({
      $or: [{ email }, { user_name }],
    });

    // If there are any conflicting users, determine the credentialConflicts
    const credentialConflicts = { email: false, user_name: false };

    if (existingUsers.length > 0) {
      // Iterate over the found users to check for specific credentialConflicts
      existingUsers.forEach((user) => {
        if (user.email === email) {
          credentialConflicts.email = true;
        }
        if (user.user_name === user_name) {
          credentialConflicts.user_name = true;
        }
      });

      logger.error("Error creating user.");
      return res.status(409).json({
        emailTaken: credentialConflicts.email,
        user_nameTaken: credentialConflicts.user_name,
      });
    }
    return res.status(200).json({
      emailTaken: credentialConflicts.email,
      user_nameTaken: credentialConflicts.user_name,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function listAllUsers(req, res) {
  try {
    const users = await User.find({});
    return res.status(200).json({ users });
  } catch (error) {
    console.error("Error retrieving users:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
