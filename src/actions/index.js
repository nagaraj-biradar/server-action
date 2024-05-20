"use server";

import connectToDB from "@/database";
import User from "@/models/user";

// Add New User Action
export async function addNewUserAction({ formData }) {
  connectToDB;

  try {
    const newlyCreatedUser = await User.create(formData);
    if (newlyCreatedUser) {
      return {
        success: true,
        message: "User added successfully",
      };
    } else {
      return {
        success: false,
        message: "Something went wrong!Please try later.",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong!Please try later.",
    };
  }
}

// Get User Action

// Delete User Action

// Update User Action
