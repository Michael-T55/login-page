import React, { useState } from "react";

function LoginForm() {
  const [showRegistration, setShowRegistration] = useState(false);

  const handleRegisterClick = () => {
    setShowRegistration(true);
  };

  const handleSignInClick = () => {
    // Handle sign in logic here
    console.log("Signing in...");
  };

  const handleRegistrationSubmit = (event) => {
    event.preventDefault();
    // Handle registration form submission logic here
    console.log("Registering...");
  };

  return (
    <div>
      {showRegistration ? (
        <form onSubmit={handleRegistrationSubmit}>
          <h2>Register</h2>
          <label>
            Username:
            <input type="text" />
          </label>
          <label>
            Password:
            <input type="password" />
          </label>
          <button type="submit">Register</button>
        </form>
      ) : (
        <div>
          <h2>Login</h2>
          <label>
            Username:
            <input type="text" />
          </label>
          <label>
            Password:
            <input type="password" />
          </label>
          <button onClick={handleSignInClick}>Sign In</button>
        </div>
      )}
      <button onClick={handleRegisterClick}>Register</button>
    </div>
  );
}

export default LoginForm;
