import React from 'react';

const Signin = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Welcome to Abhyudaya Club Management site</h1>
        <h2 className="text-xl font-semibold mb-4 text-center">Sign in</h2>
        <button className="flex items-center justify-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-sm mb-4 w-full">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.9 12.19,19.9C8.36,19.9 5,16.6 5,12C5,7.4 8.36,4.1 12.19,4.1C14.66,4.1 16.8,5.38 18.11,7.26L20.72,4.65C18.64,2.24 15.61,0.6 12.19,0.6C5.51,0.6 0,6.11 0,12C0,17.89 5.51,23.4 12.19,23.4C18.85,23.4 24.31,18.05 24.31,12.23C24.31,11.34 24.19,10.5 23.97,9.69C23.67,8.64 23.03,7.67 22.11,6.88C21.67,6.5 21.03,6.16 20.32,5.9L21.35,11.1Z"
            />
          </svg>
          Sign in with Google
        </button>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username or email address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Enter your Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex justify-between items-center mb-4">
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Forgot Password
          </a>
        </div>
        <div className="flex justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md">
            Sign up
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;