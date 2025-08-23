"use server";

import bcrypt from "bcrypt";
import dbConnect, { collectionNameObj } from "@/app/lib/dbConnect";

export const loginUser = async (payload) => {
  const { email, password } = payload;
  const usersCollection = dbConnect(collectionNameObj.usersCollection);

  const user = await usersCollection.findOne({ email });

  if (!user) {
    return { success: false, message: "User not found" };
  }

  const isPasswordOK = await bcrypt.compare(password, user.password);
  if (!isPasswordOK) {
    return { success: false, message: "Invalid password" };
  }

  // 🔑 Convert to plain object (remove ObjectId, hashed password)
  return {
    success: true,
    message: "Login successful",
    user: {
      id: user._id.toString(), // ObjectId → string
      email: user.email,
    },
  };
};
