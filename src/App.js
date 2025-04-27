import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';
import Navigation from './components/Navigation';
import Home from './components/Home';
import NotFound from './components/NotFound';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('http://localhost:3001/recipes');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRecipes(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const handleRecipeAdded = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen bg-pink-50">Loading recipes...</div>;
  }

  if (error) {
    return <div className="text-red-500 p-4 bg-pink-100 rounded-md">Error loading recipes: {error}</div>;
  }

  return (
    <Router>
      <div className="min-h-screen bg-pink-50">
        <Navigation />
        <main className="container mx-auto py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<RecipeList recipes={recipes} />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/add-recipe" element={<AddRecipeForm onRecipeAdded={handleRecipeAdded} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer className="bg-brown-700 text-pink-100 py-4 text-center">
          <p>&copy; 2025 Sweettooth - Your Baking Delights</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;