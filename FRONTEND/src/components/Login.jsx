import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

function Login() {
  const [authUser, setAuthUser] = useAuth(); // User state from context
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // Form handling from react-hook-form

  const onSubmit = (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    // Make the API request
    axios
      .post("http://localhost:5002/api/user/login", userInfo)
      .then((response) => {
        if (response.data) {
          alert("Login successful");
          localStorage.setItem("ChatApp", JSON.stringify(response.data)); // Store user data in localStorage
          setAuthUser(response.data); // Update authUser state
        }
      })
      .catch((error) => {
        if (error.response) {
          alert("Error: " + error.response.data.message); // Show error message from server
        } else {
          alert("Network Error. Please try again."); // Handle network errors
        }
      });
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-black px-6 py-2 rounded-md space-y-3 w-96"
      >
        <h1 className="text-2xl text-center text-blue-600 font-bold">
          Messenger
        </h1>
        <h2 className="text-2xl text-center">
          Login with your{" "}
          <span className="text-blue-600 font-semibold">Account</span>
        </h2>

        {/* Email Input */}
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="email"
            className="grow"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: "Please enter a valid email address",
              },
            })}
          />
        </label>
        {errors.email && (
          <span className="text-red-500 text-sm font-semibold">
            {errors.email.message}
          </span>
        )}

        {/* Password Input */}
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
        </label>
        {errors.password && (
          <span className="text-red-500 text-sm font-semibold">
            {errors.password.message}
          </span>
        )}

        {/* Submit Button */}
        <div className="flex justify-center">
          <input
            type="submit"
            value="Login"
            className="text-white bg-blue-600 cursor-pointer w-full rounded-lg py-2"
          />
        </div>

        {/* Link to Register page */}
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
