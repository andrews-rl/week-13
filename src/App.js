// Import the CSS file for styling
import './App.css';

// Import React components from other files
import Nav from './Nav';            // Import the Nav component
import Section from './Section';    // Import the Section component
import SubmitButton from './Login'; // Import the SubmitButton component
import ImageComponent from './image';// Import the ImageComponent component

// Define the main App component
function App() {
  // Return JSX content that makes up the App component
  return ( 
    <div className="App">
      {/* Render the Nav component */}
      <Nav></Nav>
      
      {/* Render the SubmitButton component */}
      <SubmitButton /> 
      
      {/* Render the Section component */}
      <Section />
      
      {/* Render the ImageComponent component */}
      <ImageComponent />
    </div>
  );
}

// Export the App component to make it available for use in other files
export default App;
