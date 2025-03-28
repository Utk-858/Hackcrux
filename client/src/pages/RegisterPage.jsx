import React from 'react';
import { Link } from 'react-router-dom';
import GoogleButton from '@/GoogleButton';

const RegisterPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-2xl font-semibold">Sign Up</h1>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              className="mt-1 w-full rounded-md border p-2 focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-md border p-2 focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              className="mt-1 w-full rounded-md border p-2 focus:ring focus:ring-blue-300"
            />
          </div>

          <button className="w-full rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600">
            Sign Up
          </button>
        </form>

        <div className="my-4 text-center text-gray-500">OR</div>

        <GoogleButton text="Sign Up with Google" />

        <p className="mt-4 text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
