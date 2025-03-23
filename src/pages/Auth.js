import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const toggleAuthMode = () => {
    setIsSignUp((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard"); 
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <input type="text" placeholder="Full Name" required />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          {isSignUp && (
            <input type="password" placeholder="Confirm Password" required />
          )}
          <button type="submit">{isSignUp ? "Sign Up" : "Login"}</button>
        </form>

        <p className="toggle-text" onClick={toggleAuthMode}>
          {isSignUp
            ? "Already have an account? Login"
            : "Don't have an account? Sign up"}
        </p>
      </div>
    </div>
  );
};

export default Auth;
