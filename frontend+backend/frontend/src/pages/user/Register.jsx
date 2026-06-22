import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {registerUser} from '../../services/authApi'
function Register() {


const [name, setName] = React.useState("");
const [email, setEmail] = React.useState("");
const [password, setPassword] = React.useState("");
const [confirmPassword, setConfirmPassword] = React.useState("");

const handleSubmit = async()=>{
   try {
     const data = {
       name: name,
       email: email,
       password: password,
       confirmPassword: confirmPassword,
     };
     if (password === confirmPassword) {
     
       const datas = await registerUser(data);
       console.log(datas);
     }
   } catch (err) {
     console.log("Error fetching posts:", err);
   }
}
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-center text-slate-900 mb-3">
          Create your account
        </h1>

        <p className="text-center text-slate-500 mb-8">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Sign In
          </Link>
        </p>

        <form 
        
        className="space-y-5"
        onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </div>

          {/* Create Account */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
         
          >
            Create Account
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

        <p className="text-center text-slate-500 mt-8">
          By creating an account, you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </div>
  );
}

export default Register;
