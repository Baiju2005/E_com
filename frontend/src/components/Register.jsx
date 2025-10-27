import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  // ✅ Function to send data to backend
  const onSubmit = async (data) => {
    console.log("Registration Data Received:", data);

    try {
      const response = await fetch("http://localhost:4000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Server Response:", result);

      if (response.ok) {
        alert(result.message || "Registration Successful!");
        reset(); // ✅ Clears form fields
      } else {
        alert(result.message || "Registration Failed!");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className='flex justify-center align-center h-full my-40'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="fieldset bg-base-300 border-base-300 rounded-box w-xs border p-10"
      >
        <legend className="fieldset-legend text-3xl">Register</legend>

        {/* Email */}
        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}

        {/* Password */}
        <label className="label mt-3">Password</label>
        <input
          type="password"
          className="input"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}

        {/* Submit Button */}
        <input type="submit" value="Register" className='btn btn-neutral mt-4' />

        {/* Redirect to Login */}
        <p className='text-l mt-2'>
          Already have an account?
          <Link to='/login' className='text-blue-500 ml-2 font-bold underline'>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
