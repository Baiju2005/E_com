import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { loginUser } from "../api/auth";

const Login = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

  
    const onSubmit = async (data) => {
        try {
            const response = await fetch("https://pybuddy.onrender.com/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                // Store token
                localStorage.setItem("token", result.token);

                alert("✅ Login successful!");
                window.location.href = "/"; 
            } else {
                alert(result.message || "Invalid email or password");
            }
        } catch (error) {
            console.error("❌ Error:", error);
            alert("Something went wrong. Please try again later.");
        }
    };







    return (
        <div className='flex justify-center align-center h-full my-40'>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="fieldset bg-base-300 border-base-300 rounded-box w-xs border p-10"
            >
                <legend className="fieldset-legend text-3xl">Login</legend>

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

                <input type="submit" value="Login" className='btn btn-neutral mt-4' />

                <p className='text-l mt-2'>
                    Don't have an account?
                    <Link to='/register' className='text-blue-500 ml-2 font-bold underline'>
                        Register
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default Login
