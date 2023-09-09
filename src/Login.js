// Import React and Component from the 'react' library
import React, { Component } from 'react';

// Import the Jokes component from the './Jokes' file
import Jokes from './Jokes';

// Import Bootstrap CSS styles
import 'bootstrap/dist/css/bootstrap.min.css';

// Define a class-based React component called 'Login'
class Login extends Component {
  // Constructor method that initializes the component's state
  constructor(props) {
    super(props);
    this.state = {
      username: '',       // Initialize 'username' state as an empty string
      password: '',       // Initialize 'password' state as an empty string
      loggedIn: false,    // Initialize 'loggedIn' state as false
    };
  }

  // Event handler function to update state when input fields change
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }); // Update the corresponding state based on the input name
  };

  // Event handler function for simulating login (for demonstration purposes)
  handleLogin = () => {
    // In a real application, this is where you would perform authentication.
    // For demonstration, we set 'loggedIn' to true if both fields are filled.
    if (this.state.username && this.state.password) {
      this.setState({ loggedIn: true });
    }
  };

  // Render method that defines the component's UI structure
  render() {
    return (
      <div className="container-fluid bg-info d-flex justify-content-center align-items-center p-3 my-3">
        <div className="col-md-6">
          <div className="d-flex flex-column align-items-center">
            <h4 id="Login" className="mb-3" style={{ color: 'white' }}>
              Login
            </h4>
            <form className="d-flex mb-2">
              {/* Input field for 'username' */}
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleInputChange} // Attach the input change handler
                className="form-control mr-2"
                style={{ maxWidth: '16ch' }}
                maxLength="16"
              />
              {/* Input field for 'password' */}
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleInputChange} // Attach the input change handler
                className="form-control mr-2 ml-2"
                style={{ maxWidth: '16ch' }}
                maxLength="16"
              />
              {/* Button to trigger login simulation */}
              <button type="button" onClick={this.handleLogin} className="btn btn-light">
                Submit
              </button>
            </form>
            {/* Include the Jokes component below the login form */}
            <Jokes />
          </div>
        </div>
      </div>
    );
  }
}

// Export the 'Login' component for use in other parts of the application
export default Login;
