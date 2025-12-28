import React from "react";
import GoogleIcon from "../assets/Icon-Google.png";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 border border-gray-200 rounded-lg shadow-md">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-gray-800">
            Create an account
          </h1>
          <p className="text-gray-500 mt-2">Enter your details below</p>
        </div>

        <div className="space-y-4 mb-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="text"
            placeholder="Email or phone number"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="space-y-4">
          <button className="w-full py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
            Create Account
          </button>

          <button className="w-full py-3 border border-gray-300 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100 transition">
            <img src={GoogleIcon} alt="Google" className="w-5 h-5" />
            <span>Sign up with Google</span>
          </button>
        </div>

        <div className="mt-6 text-center text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-red-500 underline">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
