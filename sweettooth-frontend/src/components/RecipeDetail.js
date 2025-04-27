import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`http://localhost:3001/recipes/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRecipe(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen bg-pink-50">Loading recipe details...</div>;
  }

  if (error) {
    return <div className="text-red-500 p-4 bg-pink-100 rounded-md">Error loading recipe: {error}</div>;
  }

  if (!recipe) {
    return <div className="p-6 bg-pink-100 rounded-md text-brown-600">Recipe not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-semibold text-brown-900 mb-4">{recipe.title}</h2>
      {recipe.image && <img src={recipe.image} alt={recipe.title} className="w-full rounded-md mb-4" />}
      <div className="mb-6 bg-pink-50 p-4 rounded-md">
        <h3 className="text-xl font-semibold text-brown-800 mb-2">Ingredients:</h3>
        <ul className="list-disc list-inside text-brown-700">
          {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="bg-pink-50 p-4 rounded-md">
        <h3 className="text-xl font-semibold text-brown-800 mb-2">Instructions:</h3>
        <p className="text-brown-700">{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;