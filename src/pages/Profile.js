import React, { useState } from "react";


const Profile = () => {
  const [goal, setGoal] = useState("Lose 5kg");
  const [progress, setProgress] = useState(45); 

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>🚀 My Profile</h1>
        <p>Manage your account, track progress, and stay motivated!</p>
      </div>

      <div className="profile-grid">
        <div className="profile-card">
          <h2>👤 Personal Info</h2>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> johndoe@example.com</p>
          <p><strong>Fitness Goal:</strong> {goal}</p>
        </div>
        <div className="profile-card">
          <h2>📊 Progress</h2>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}>
              {progress}%
            </div>
          </div>
          <button className="goal-btn" onClick={() => setProgress(progress + 5)}>Increase Progress</button>
        </div>
        <div className="profile-card">
          <h2>🏆 Achievements</h2>
          <ul>
            <li>✅ Completed 10K Steps in a Day</li>
            <li>✅ Ran 5KM in One Go</li>
            <li>✅ Tracked Workouts for 30 Days</li>
          </ul>
        </div>
        <div className="profile-card">
          <h2>⚙️ Settings</h2>
          <button className="edit-btn">Edit Profile</button>
          <button className="goal-btn" onClick={() => setGoal("Build Muscle")}>Change Goal</button>
          <button className="logout-btn">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
