import React, { useState } from 'react';

const AddRecipeForm = ({ onRecipeAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecipe = { title, description, ingredients: ingredients.split('\n'), instructions };

    try {
      const response = await fetch('http://localhost:3001/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRecipe),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      onRecipeAdded(data);

      setTitle('');
      setDescription('');
      setIngredients('');
      setInstructions('');
    } catch (error) {
      console.error("Error adding recipe:", error);
      // Optionally display an error message to the user
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-brown-900 mb-4">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-brown-700 text-sm font-bold mb-2">Title:</label>
          <input type="text" id="title" className="shadow appearance-none border rounded w-full py-2 px-3 text-brown-700 leading-tight focus:outline-none focus:shadow-outline" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="description" className="block text-brown-700 text-sm font-bold mb-2">Description:</label>
          <textarea id="description" className="shadow appearance-none border rounded w-full py-2 px-3 text-brown-700 leading-tight focus:outline-none focus:shadow-outline" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label htmlFor="ingredients" className="block text-brown-700 text-sm font-bold mb-2">Ingredients (one per line):</label>
          <textarea id="ingredients" className="shadow appearance-none border rounded w-full py-2 px-3 text-brown-700 leading-tight focus:outline-none focus:shadow-outline" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required rows="4" />
        </div>
        <div>
          <label htmlFor="instructions" className="block text-brown-700 text-sm font-bold mb-2">Instructions:</label>
          <textarea id="instructions" className="shadow appearance-none border rounded w-full py-2 px-3 text-brown-700 leading-tight focus:outline-none focus:shadow-outline" value={instructions} onChange={(e) => setInstructions(e.target.value)} required rows="6" />
        </div>
        <button type="submit" className="bg-pink-500 hover:bg-pink-700 text-brown-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipeForm;