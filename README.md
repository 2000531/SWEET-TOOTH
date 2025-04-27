# Sweettooth - Baking Recipe Application

This is a single-page application built with React, Tailwind CSS, and interacts with a `json-server` backend to manage and display baking recipes. The application features a vibrant pink and chocolatey brown theme.

## Table of Contents

* [Learning Goals](#learning-goals)
* [Requirements](#requirements)
* [Setup](#setup)
    * [Backend (json-server)](#backend-json-server)
    * [Frontend](#frontend)
* [Running the Application](#running-the-application)
* [Key Features](#key-features)
* [File Structure](#file-structure)
* [Components](#components)
* [Routing](#routing)
* [API Interaction](#api-interaction)
    * [GET Request](#get-request)
    * [POST Request](#post-request)
* [Styling](#styling)
* [Future Enhancements](#future-enhancements)
* [Credits](#credits)

## Learning Goals

* Build a React single-page application from scratch.
* Apply knowledge of components, props, and state management.
* Incorporate client-side routing.
* Use data from an API (using `json-server` for a RESTful API with GET and POST requests).
* Implement styling using Tailwind CSS with a custom color theme.

## Requirements

* A single-page application built using `create-react-app`.
* At least 5 well-organized React components.
* At least 3 client-side routes using `react-router-dom`, with a navigation element.
* A `json-server` backend to create a RESTful API.
* Implementation of both `GET` and `POST` requests to the `json-server`.
* A controlled form to handle the `POST` request.
* State update upon receiving data from the `POST` request to re-render the UI.
* Styling applied using Tailwind CSS with a vibrant pink and chocolatey brown theme.

## Setup

Follow these steps to set up and run the Sweettooth application on your local machine.

### Backend (json-server)

1.  **Create a backend repository (if you haven't already):**
    ```bash
    mkdir sweettooth-backend
    cd sweettooth-backend
    npm init -y
    npm install json-server
    ```

2.  **Create a `db.json` file:**
    In the `sweettooth-backend` directory, create a `db.json` file with some initial recipe data. For example:

    ```json
    {
      "recipes": [
        {
          "id": 1,
          "title": "Classic Chocolate Cake",
          "description": "A rich and moist chocolate cake recipe.",
          "ingredients": ["2 cups flour", "2 cups sugar", "¾ cup cocoa powder", "..."],
          "instructions": "Preheat oven to 350°F...",
          "image": "[https://via.placeholder.com/300/846050/f8f4f2?Text=Chocolate+Cake](https://via.placeholder.com/300/846050/f8f4f2?Text=Chocolate+Cake)"
        },
        {
          "id": 2,
          "title": "Simple Sugar Cookies",
          "description": "Easy and delicious sugar cookies perfect for any occasion.",
          "ingredients": ["1 cup butter", "1 cup sugar", "1 egg", "..."],
          "instructions": "Cream together butter and sugar...",
          "image": "[https://via.placeholder.com/300/ff69b4/f8f4f2?Text=Sugar+Cookies](https://via.placeholder.com/300/ff69b4/f8f4f2?Text=Sugar+Cookies)"
        },
        {
          "id": 3,
          "title": "Banana Bread",
          "description": "A comforting and flavorful banana bread.",
          "ingredients": ["3 ripe bananas", "⅓ cup melted butter", "1 egg", "..."],
          "instructions": "Preheat oven to 350°F...",
          "image": "[https://via.placeholder.com/300/846050/f8f4f2?Text=Banana+Bread](https://via.placeholder.com/300/846050/f8f4f2?Text=Banana+Bread)"
        }
      ]
    }
    ```

3.  **Start the `json-server`:**
    Add a script to your `package.json` in the backend directory:

    ```json
    "scripts": {
      "start": "json-server --watch db.json --port 3001"
    }
    ```

    Then, run the server:

    ```bash
    npm start
    ```

    The API will now be available at `http://localhost:3001`.

### Frontend

1.  **Create a frontend repository (if you haven't already):**
    ```bash
    npx create-react-app sweettooth-frontend
    cd sweettooth-frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install react-router-dom tailwindcss postcss autoprefixer @tailwindcss/forms
    ```

3.  **Configure Tailwind CSS:**
    ```bash
    npx tailwindcss init -p
    ```

    Modify `tailwind.config.js` to include the custom brown color palette:

    ```javascript
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html",
      ],
      theme: {
        extend: {
          colors: {
            'brown': {
              50: '#f8f4f2',
              100: '#e9e0da',
              200: '#d6c7c0',
              300: '#bfa9a0',
              400: '#a18478',
              500: '#846050',
              600: '#6d493d',
              700: '#57362e',
              800: '#422722',
              900: '#2e1a18',
            },
          },
        },
      },
      plugins: [
        require('@tailwindcss/forms'),
      ],
    }
    ```

    Modify `src/index.css`:

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

## Running the Application

1.  **Start the backend server:**
    Navigate to your `sweettooth-backend` directory in the terminal and run:
    ```bash
    npm start
    ```

2.  **Start the frontend development server:**
    Open a new terminal window, navigate to your `sweettooth-frontend` directory, and run:
    ```bash
    npm start
    ```

    The frontend application will usually be accessible at `http://localhost:3000`.

## Key Features

* **Recipe Browsing:** Displays a list of available baking recipes fetched from the `json-server` API, styled with a pink and brown theme.
* **Recipe Detail View:** Allows users to view the full details of a selected recipe, presented with the chosen color scheme.
* **Adding New Recipes:** Users can add new recipes through a controlled form. Upon submission, the new recipe is sent to the `json-server` API, and the recipe list updates dynamically.
* **Navigation:** A navigation bar with a pink and brown design enables seamless switching between different sections of the application.
* **Vibrant Theme:** The application utilizes a visually appealing theme with vibrant pink accents and chocolatey brown tones, enhancing the user experience.

## File Structure
