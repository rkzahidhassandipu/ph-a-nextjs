"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

export default function Login() {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

 const onSubmit = async (data) => {
  try {
    const res = await signIn("credentials", {
      redirect: false, // don’t auto redirect
      email: data.email,
      password: data.password,
    });

    if (res?.error) {
      // ❌ Invalid credentials
      setMessage("Invalid email or password");
    } else if (res?.ok) {
      // ✅ Successful login
      alert("Login successful!");
      window.location.href = "/"; // or use router.push("/")
    } else {
      // ❓ Unexpected case
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    alert("Something went wrong. Please try again.");
  }
};


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
          className="w-full p-2 border rounded mb-2"
        />
        {errors.email && (
          <p className="text-red-600 text-sm mb-2">{errors.email.message}</p>
        )}

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
          className="w-full p-2 border rounded mb-2"
        />
        {errors.password && (
          <p className="text-red-600 text-sm mb-2">{errors.password.message}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-60"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>

        {/* Message */}
        {message && (
          <p className="mt-3 text-center text-sm text-red-600">{message}</p>
        )}
      </form>
    </div>
  );
}
