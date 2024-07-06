import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState(""); // State for storing email input value
  const [password, setPassword] = useState(""); // State for storing password input value
  const [error, setError] = useState(""); // State for handling login errors
  const navigate = useNavigate(); // Hook from React Router DOM for navigation

  const defaultEmail = "pirategamer@gmail.com"; // Default email for login
  const defaultPassword = "Pirate123"; // Default password for login

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default form submission behavior
    if (email === defaultEmail && password === defaultPassword) {
      console.log("Login successful");
      // Redirect to admin dashboard on successful login
      navigate("/Admin/dashboard");
    } else {
      setError("Invalid email or password"); // Sets error message for invalid login attempt
    }
  };

  return (
    <div className="mt-[180px]">
      <div className="flex bg-white rounded-lg shadow-2xl shadow-black overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        {/* Background image (hidden on smaller screens) */}
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{
            backgroundImage:
              'url("https://thumbs.dreamstime.com/b/serious-indian-business-man-working-studying-laptop-computer-young-professional-focused-ethnic-male-student-wearing-glasses-214010622.jpg")',
          }}
        ></div>
        {/* Login form section */}
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">
            Admin
          </h2>
          <p className="text-xl text-gray-600 text-center">Welcome back!</p>

          {/* Error message for invalid login attempt */}
          {error && (
            <p className="text-red-500 text-sm text-center mt-4">{error}</p>
          )}

          {/* Login form */}
          <form onSubmit={handleSubmit}>
            {/* Email input field */}
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {/* Password input field */}
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <Link to="" className="text-xs text-gray-500">
                  Forget Password?
                </Link>
              </div>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {/* Login button */}
            <div className="mt-8">
              <button
                type="submit"
                className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
