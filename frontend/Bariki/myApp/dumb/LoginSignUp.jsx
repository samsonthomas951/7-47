// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../pages/LoginSignUp.css";
import image from "../assets/hands.png";
const LoginSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleLoginClick = () => {
    setIsSignUp(false);
  };

  return (
    <div className="login-signup-container">
      <div className="left-half">
        <img src={image} alt="Decorative" className="image" />
      </div>
      <div className="right-half">
        <button className="back-button" onClick={handleLoginClick}>
          Back
        </button>
        {isSignUp ? <SignUpForm /> : <LoginForm />}
        <div className="button-group">
          {isSignUp ? (
            <button className="auth-button" onClick={handleLoginClick}>
              Already have an account
            </button>
          ) : (
            <button className="auth-button" onClick={handleSignUpClick}>
              Sign Up
            </button>
          )}
          <button className="next-button">Next</button>
        </div>
      </div>
    </div>
  );
};

const LoginForm = () => (
  <form className="auth-form">
    <h2>Login</h2>
    <input type="email" placeholder="Email" required />
    <input type="password" placeholder="Password" required />
    <button type="submit">Login</button>
  </form>
);

const SignUpForm = () => (
  <form className="auth-form">
    <h2>Sign Up</h2>
    <input type="text" placeholder="Full Name" required />
    <input type="email" placeholder="Email" required />
    <input type="password" placeholder="Password" required />
    <button type="submit">Sign Up</button>
  </form>
);

export default LoginSignUp;
