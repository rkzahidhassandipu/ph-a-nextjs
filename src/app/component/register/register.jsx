
import { useForm } from "react-hook-form";
import { useState } from "react";

const Register = ({}) => {

    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  console.log(register, handleSubmit)

  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
  console.log("Form Data Submitted:", data);
  setMessage(`Name: ${data.name}, Email: ${data.email}`);
  reset(); // clear form after success
};
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-2xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: "Name is required" })}
          className="w-full mb-2 p-2 border rounded"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mb-2">{errors.name.message}</p>
        )}

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email",
            },
          })}
          className="w-full mb-2 p-2 border rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>
        )}

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "At least 6 characters" },
          })}
          className="w-full mb-2 p-2 border rounded"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mb-2">{errors.password.message}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Register
        </button>

        {/* Message */}
        {message && (
          <p className="text-center mt-4 text-sm text-gray-600">{message}</p>
        )}
      </form>
    </>
  );
};

export default Register;
