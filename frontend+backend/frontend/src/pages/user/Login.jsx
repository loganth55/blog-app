import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-center text-slate-900 mb-3">
          Sign in to your account
        </h1>

        <p className="text-center text-slate-500 mb-8">
          Or{" "}
          <Link
            to="/register"
            className="text-blue-600 font-medium hover:underline"
          >
            create a new account
          </Link>
        </p>

        <form className="space-y-5">
          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" />
              Remember me
            </label>

            <button type="button" className="text-blue-600 hover:underline">
              Forgot password?
            </button>
          </div>

          {/* Sign In */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-1 h-px bg-gray-300"></div>

          <span className="px-4 text-slate-500">Or continue with</span>

          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-3 gap-3">
          <button className="border rounded-xl py-3 hover:bg-gray-50">
            Google
          </button>

          <button className="border rounded-xl py-3 hover:bg-gray-50">
            GitHub
          </button>

          <button className="border rounded-xl py-3 hover:bg-gray-50">
            LinkedIn
          </button>
        </div>

        {/* Bottom */}
        <p className="text-center text-slate-500 mt-8">
          Not a member?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-semibold hover:underline"
          >
            Create your account now
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
