// Import React and Component from the 'react' library
import React, { Component } from 'react';

// Import Bootstrap CSS styles
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Dropdown and DropdownButton components from 'react-bootstrap'
import { Dropdown, DropdownButton } from 'react-bootstrap';

// Define and export a class-based React component called 'CustomNav'
export default class CustomNav extends Component {
  // Render method that defines the component's UI structure
  render() {
    return (
      // Create a navigation bar container with a custom CSS class 'navBar'
      <nav className="navBar">
        {/* Create an unordered list with flexbox and alignment styles */}
        <ul className="d-flex align-items-center mb-0">
          {/* List item with flexbox and alignment styles */}
          <li className="d-flex align-items-center">
            {/* Anchor link with the text 'Home' */}
            <a href="/" className="text-dark text-decoration-none">Home</a>
          </li>
          {/* List item with flexbox and alignment styles */}
          <li className="d-flex align-items-center">
            {/* Anchor link with the text 'Portfolio' */}
            <a href="/portfolio" className="text-dark text-decoration-none">Portfolio</a>
          </li>
          {/* List item with flexbox and alignment styles */}
          <li className="d-flex align-items-center">
            {/* Anchor link with the text 'Contact' */}
            <a href="/contact" className="text-dark text-decoration-none">Contact</a>
          </li>
          {/* List item with flexbox and alignment styles, for the 'More' dropdown */}
          <li className="d-flex align-items-center ml-auto">
            {/* DropdownButton component with the title 'More' */}
            <DropdownButton title="More">
              {/* Dropdown items within the 'More' dropdown */}
              <Dropdown.Item href="/">Home</Dropdown.Item>
              <Dropdown.Item href="/portfolio">Portfolio</Dropdown.Item>
              <Dropdown.Item href="/contact">Contact</Dropdown.Item>
            </DropdownButton>
          </li>
        </ul>
      </nav>
    );
  }
}
