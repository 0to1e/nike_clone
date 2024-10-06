import jsonwebtoken from "jsonwebtoken";
import User from "../model/user.js";

const jwt = jsonwebtoken;

export async function restrictToLoggedInUserOnly(req, res, next) {
  const { token } = req.cookies;

  // Check for token
  if (!token) {
    return res.status(401).json({ message: "Not logged in" });
  }

  try {
    // Verify the token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    
    // Fetch user by ID
    req.user = await User.findById(decodedToken._id);
    
    // Check if user exists
    if (!req.user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Proceed to the next middleware
    next();
  } catch (error) {
    // Handle token verification errors
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}
