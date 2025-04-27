import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-6 text-center bg-pink-100 rounded-md">
      <h1 className="text-4xl font-bold text-brown-900 mb-4">Welcome to Sweettooth!</h1>
      <p className="text-lg text-brown-700 mb-6">Explore delicious baking recipes and share your own sweet creations.</p>
      <Link to="/recipes" className="inline-block mt-6 bg-pink-500 hover:bg-pink-700 text-brown-800 font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline">
        Browse Recipes
      </Link>
    </div>
  );
};

export default Home;