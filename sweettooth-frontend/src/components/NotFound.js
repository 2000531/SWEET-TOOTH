import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-50">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl text-brown-700 mb-2">Page Not Found</p>
      <Link to="/" className="text-pink-500 hover:underline">Go back to Home</Link>
    </div>
  );
};

export default NotFound;