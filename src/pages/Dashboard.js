import React from "react";
import "../styles/pages.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Profile Section */}
      <div className="profile-card">
        <img src="https://via.placeholder.com/100" alt="User" />
        <h2>John Doe</h2>
        <p>Fitness Enthusiast | Level 5</p>
      </div>

      {/* Stats Section */}
      <div className="stats-container">
        <div className="stat-item">🔥 Workouts Completed: <span>25</span></div>
        <div className="stat-item">🔥 Calories Burned: <span>7,800</span></div>
        <div className="stat-item">🔥 Total Workout Time: <span>15h 40m</span></div>
      </div>

      {/* Goals Section */}
      <div className="goals">
        <h2>🎯 Fitness Goals</h2>
        <ul>
          <li>🏋️ Gain 5kg muscle mass</li>
          <li>🏃 Run 10km without stopping</li>
          <li>🥗 Maintain 2,500 kcal daily intake</li>
        </ul>
      </div>

      {/* Achievements Section */}
      <div className="achievements">
        <h2>🏆 Achievements</h2>
        <div className="achievement-card">✅ First 10 Workouts Completed</div>
        <div className="achievement-card">✅ Burned 5,000 Calories</div>
        <div className="achievement-card">✅ 30-Day Streak</div>
      </div>
    </div>
  );
};

export default Dashboard;
