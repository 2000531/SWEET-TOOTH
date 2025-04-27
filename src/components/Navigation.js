import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <header className="bg-brown-700 shadow-md py-4 px-6">
      <nav className="flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-pink-300 hover:text-pink-100">Sweettooth</Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/recipes" className="text-pink-100 hover:text-pink-300">Recipes</Link>
          </li>
          <li>
            <Link to="/add-recipe" className="bg-pink-500 hover:bg-pink-700 text-brown-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Recipe</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;