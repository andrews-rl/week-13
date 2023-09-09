// Import React and Component from the 'react' library
import React, { Component } from 'react';

// Import Axios for making HTTP requests
import axios from 'axios';

// Define a class-based React component called 'Jokes'
class Jokes extends Component {
  // Constructor method that initializes the component's state
  constructor(props) {
    super(props);
    this.state = {
      // Initialize the 'joke' state with an empty setup and punchline
      joke: {
        setup: '',
        punchline: '',
      },
    };
  }

  // Lifecycle method that runs after the component is mounted to the DOM
  componentDidMount() {
    // Make an HTTP GET request to the joke API
    axios
      .get('https://official-joke-api.appspot.com/random_joke')
      .then((response) => {
        // Update the 'joke' state with the fetched joke data
        this.setState({ joke: response.data });
      })
      .catch((error) => {
        // Handle and log any errors that occur during the fetch
        console.error('Error fetching joke:', error);
      });
  }

  // Render method that defines the component's UI structure
  render() {
    return (
      <div className="row mt-4 justify-content-center"> {/* Create a centered row */}
        <div className="col pt-2">
          {/* Apply custom CSS styles for width */}
          <div
            id="joke-container"
            className="container-fluid form-control bg-white p-3 custom-width border border-info"
          >
            <div className="text-center font-weight-bold fs-5">
              Jokes: Have you heard this one?
            </div>
            <div className="fs-6">
              {/* Display the setup and punchline of the fetched joke */}
              <p>{this.state.joke.setup}</p>
              <p>{this.state.joke.punchline}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Export the 'Jokes' component for use in other parts of the application
export default Jokes;

