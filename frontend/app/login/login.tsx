import React, { useState } from "react";
import "./login.css"; // ✅ Corrected path format
import loginIllustration from "../asserts/logo.png";
import logo from "../asserts/logo.png";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Attempt:", { username, password });
  };

  return (
    <div className="login-container flex min-h-screen items-center justify-center water-animate">
      <div className="login-card border-2 border-white flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-2xl w-[90%] max-w-5xl">
        {/* Left panel */}
        <div className="left-panel flex-1 flex items-center justify-center bg-[var(--theme-color-02)] p-6">
          <img
            src={loginIllustration}
            alt="Illustration"
            className="max-w-md object-contain"
          />
        </div>

        {/* Right panel (your matte glass form) */}
        <div className="right-panel border-l border-white flex-1 p-10 flex flex-col justify-center 
                        bg-[var(--theme-color-02)] backdrop-blur-md 
                         shadow-xl text-[var(--theme-color)]">
          <img
            src={logo}
            alt="Logo"
            className="w-20 max-w-md object-contain mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold mb-6 text-center text-[var(--theme-color)]">
            Welcome Back
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm mb-1  font-bold">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full px-4 py-2 rounded-lg bg-[var(--theme-color)] text-white placeholder-gray-200 
                           focus:outline-none focus:ring-2 focus:ring-[#4db6ac]"
              />
            </div>
            <div>
              <label className="block text-sm mb-1  font-bold">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 rounded-lg bg-[var(--theme-color)] text-white placeholder-gray-200 
                           focus:outline-none focus:ring-2 focus:ring-[#4db6ac]"
              />
            </div>

            <div className="flex justify-end">
              <a href="#" className="text-sm text-[var(--theme-color)] font-semibold hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-[#4db6ac] font-semibold hover:bg-[#5fc3b7] transition"
            >
              Login to Book Cove
            </button>
          </form>

          <p className="text-center text-sm text-white mt-6">
            Don’t have an account?{" "}
            <a
              href="#"
              className="text-md text-[var(--theme-color)] font-bold hover:underline"
            >
              Register Now
            </a>
          </p>

          <p className="text-xs text-[var(--theme-color)] font-bold text-center mt-8">
            Terms and Services
          </p>
        </div>
      </div>
    </div>
  );
}
