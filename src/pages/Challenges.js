import React from "react";

const Challenges = () => {
  return (
    <div className="challenges">
      {/* Title Section */}
      <header className="challenges-header">
        <h1>🔥 Fitness Challenges</h1>
        <p>Take on a challenge and push yourself beyond limits!</p>
      </header>

      {/* Featured Challenge Section */}
      <section className="featured-challenge">
        <h2>🏆 Featured Challenge: The Ultimate 30-Day Stamina Test</h2>
        <p>Boost your endurance and strength with a 30-day guided challenge.</p>
        <button className="join-btn">Join Now</button>
      </section>

      {/* Challenge List Section */}
      <section className="challenge-list">
        <h2>💪 Popular Challenges</h2>
        <ul>
          <li>🔥 30-Day Plank Challenge</li>
          <li>🏃‍♂️ 5K Running Challenge</li>
          <li>💥 100 Push-ups a Day</li>
          <li>🏋️‍♂️ 7-Day Full Body Workout</li>
          <li>🧘‍♀️ 14-Day Yoga Challenge</li>
        </ul>
      </section>

      {/* Leaderboard Table Section */}
      <section className="leaderboard">
        <h2>🏅 Challenge Leaderboard</h2>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Challenge Completed</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>30-Day Plank</td>
              <td>95%</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jane Smith</td>
              <td>5K Running</td>
              <td>92%</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Mike Johnson</td>
              <td>100 Push-ups</td>
              <td>89%</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Challenges;
