import React from "react";

const Workouts = () => {
  return (
    <div className="workouts">
      <h1 className="workouts-title">💪 Workouts & Fitness Plans</h1>
      <p className="workouts-desc">Stay fit with structured workout plans and challenges.</p>

      {/* Workout Categories (Animated Cards) */}
      <div className="workout-cards">
        {["Cardio", "Strength", "Yoga", "HIIT"].map((type, index) => (
          <div key={index} className="workout-card">
            <h2>{type}</h2>
            <p>Boost endurance and strength with {type} workouts.</p>
          </div>
        ))}
      </div>

      {/* Workout Plans Table */}
      <div className="workout-table">
        <h2>📅 Weekly Workout Plans</h2>
        <table>
          <thead>
            <tr>
              <th>Workout Type</th>
              <th>Duration</th>
              <th>Calories Burned</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cardio</td>
              <td>30 mins</td>
              <td>400 kcal</td>
            </tr>
            <tr>
              <td>Strength Training</td>
              <td>45 mins</td>
              <td>500 kcal</td>
            </tr>
            <tr>
              <td>Yoga</td>
              <td>60 mins</td>
              <td>250 kcal</td>
            </tr>
            <tr>
              <td>HIIT</td>
              <td>20 mins</td>
              <td>600 kcal</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Workouts;
