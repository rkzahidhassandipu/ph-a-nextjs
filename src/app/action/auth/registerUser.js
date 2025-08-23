"use server";

import bcrypt from "bcrypt";
import dbConnect, { collectionNameObj } from "@/app/lib/dbConnect";

export const registerUser = async (payload) => {
  const usersCollection = dbConnect(collectionNameObj.usersCollection);

  const { email, password, confirmPassword } = payload;

  // Basic validation
  if (!email || !password || !confirmPassword) {
    return { success: false, message: "All fields are required" };
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    return { success: false, message: "Passwords do not match" };
  }

  // Check if user already exists
  const user = await usersCollection.findOne({ email });
  if (user) {
    return { success: false, message: "User already exists" };
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save user (without confirmPassword)
  const newUser = {
    ...payload,
    password: hashedPassword,
  };
  delete newUser.confirmPassword; // don’t store confirmPassword

  const result = await usersCollection.insertOne(newUser);

  return {
    success: true,
    message: "User registered successfully",
    insertedId: result.insertedId.toString(),
  };
};
