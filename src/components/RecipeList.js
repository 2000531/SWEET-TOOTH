import React from 'react';
import { Link } from 'react-router-dom';

const RecipeList = ({ recipes }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {recipes.map(recipe => (
        <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition duration-200">
          {recipe.image && <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />}
          <div className="p-4 bg-pink-50">
            <h3 className="text-xl font-semibold text-brown-800 mb-2">{recipe.title}</h3>
            <p className="text-brown-500 text-sm">{recipe.description && recipe.description.substring(0, 100)}...</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecipeList;