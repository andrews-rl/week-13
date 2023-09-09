// Import React and Component from the 'react' library
import React, { Component } from 'react';

// Create a new Date object to get the current date and time
let date = new Date();

// Define an object called 'singleUser' with properties for name, date, and time
let singleUser = {
  name: 'Promineo Tech Team',    // A property for the user's name
  date: date.toDateString(),     // A property for the current date
  time: date.toLocaleTimeString(), // A property for the current time
}

// Define and export a class-based React component called 'Section'
export default class Section extends Component {
  render() {
    return (
      // Create a section element with a custom CSS class 'welcomeSection'
      <section className="welcomeSection">
        {/* Display a heading with the user's name */}
        <h1>Welcome {singleUser.name}</h1>
        {/* Display a paragraph with the current date and time */}
        <p>Today is {singleUser.date}. The time is {singleUser.time}.</p>
      </section>
    );
  }
}
