// Import the necessary libraries and dependencies
import React from 'react';                          // Import the React library
import ReactDOM from 'react-dom/client';            // Import ReactDOM (client-specific version)
import './index.css';                               // Import custom CSS styles
import App from './App';                            // Import the main App component
import 'bootstrap/dist/css/bootstrap.min.css';      // Import Bootstrap CSS styles
import 'jquery/dist/jquery.min.js';                 // Import jQuery library

// Create a root element for rendering the React application
const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root element with id 'root'

// Render the main App component within a React Strict Mode
root.render(
  <React.StrictMode>
    <App /> {/* Render the App component */}
  </React.StrictMode>
);
