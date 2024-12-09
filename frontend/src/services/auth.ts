//frontend/src/Pages/Auth/actions.ts

import axios from "axios";
import { ILoginFormData, IRegisterFormData } from "../interfaces_types/auth/Auth";

export const handleLogin = async (data: ILoginFormData) => {
  try {
    const response = await fetch("http://localhost:8080/api/v1/user/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Check if the login was successful
    if (!response.ok) {
      const errorData = await response.json();
      return errorData;
    }

    // Parse the successful response
    const responseData = await response.json();
    console.log("Login successful:");
    // Optionally save user data, e.g., to localStorage or manage user session
    // localStorage.setItem("user", JSON.stringify(responseData.user));
    return responseData;
  } catch (error) {
    console.error("An unexpected error occurred during login:", error);
    // Handle error (show a message to the user, etc.)
  }
};

export const handleSignup = async (registerData: IRegisterFormData) => {
  try {
    await axios.post(
      "http://localhost:8080/api/v1/user/register",
      registerData,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    console.log("Signup successful");
    // Optionally redirect or log in the user immediately after signup
    // await handleLogin(registerData);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Signup error:",
        error.response?.data?.message || "Signup failed"
      );
    } else {
      console.error("An unexpected error occurred :", error);
    }
    // Handle error (show a message to the user, etc.)
  }
};

export const checkExistingUser = async (user_name: string, email: string) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/v1/user/checkUnique",
      { user_name, email },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    return response?.data; // No conflicts
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    } else {
      console.error(`Checker function issue: ${error}`);
      throw new Error("Unexpected error during uniqueness check");
    }
  }
};
