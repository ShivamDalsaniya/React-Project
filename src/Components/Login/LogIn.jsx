import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

function LogIn() {
  // State variables for email, password, and error handling
  const [email, setEmail] = useState(""); //: Manages the email input field state.
  const [password, setPassword] = useState(""); //: Manages the password input field
  const [error, setError] = useState(""); //: Manages error messages for login validation.

  // Navigation hook from React Router DOM for programmatic navigation
  const navigate = useNavigate();

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault();
    // Retrieve users from localStorage or initialize an empty array
    const users = JSON.parse(localStorage.getItem("users")) || [];
    // Find user with matching email and password
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      // Successful login: Redirect to the account page (simulate setting session/token)
      navigate("/account");
    } else {
      // Invalid credentials: Set error message
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <section>
        <div className="flex justify-center w-full px-5 sm:px-0 mt-5">
          <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
            {/* Background image */}
            <div
              className="hidden md:block lg:w-1/2 bg-cover bg-blue-700 h-auto"
              style={{
                backgroundImage: `url(https://www.tailwindtap.com//assets/components/form/userlogin/login_tailwindtap.jpg)`,
              }}
            ></div>
            {/* Login form container */}
            <div className="w-full p-8 lg:w-1/2">
              <p className="text-xl text-gray-600 text-center">Welcome back!</p>
              {/* Display error message if authentication fails */}
              {error && (
                <p className="text-red-500 text-xs text-center">{error}</p>
              )}
              {/* Login form */}
              <form onSubmit={handleLogin}>
                {/* Email input */}
                <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email Address
                  </label>
                  <input
                    className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                {/* Password input */}
                <div className="mt-4 flex flex-col justify-between">
                  <div className="flex justify-between">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Password
                    </label>
                  </div>
                  <input
                    className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {/* Forgot password link */}
                  <NavLink
                    to=""
                    className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
                  >
                    Forget Password?
                  </NavLink>
                </div>
                {/* Login button */}
                <div className="mt-8">
                  <button
                    type="submit"
                    className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600"
                  >
                    Login
                  </button>
                </div>
              </form>
              {/* Sign up link */}
              <div className="mt-4 flex items-center w-full text-center">
                <div className="text-xs text-gray-500 capitalize text-center w-full">
                  Don&apos;t have any account yet?
                  <span className="text-blue-700">
                    <NavLink to="/Register">Sign Up</NavLink>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LogIn;
