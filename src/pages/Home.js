import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to FitnessBuddy</h1>
        <p>Your journey to a healthier life starts here.</p>
        <button onClick={() => navigate("/auth")}>Get Started</button>
      </section>

      <section className="featured-workouts">
        <h2>Featured Workouts</h2>
        <div className="workout-list">
          <div className="workout-item">Cardio</div>
          <div className="workout-item">Strength Training</div>
          <div className="workout-item">Yoga</div>
        </div>
      </section>

      <section className="cta">
        <h2>Join the Community</h2>
        <p>Connect with fitness enthusiasts and take on challenges.</p>
        <button onClick={() => navigate("/auth")}>Join Now</button>
      </section>
    </div>
  );
};

export default Home;
