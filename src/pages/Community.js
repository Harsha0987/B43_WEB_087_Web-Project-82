import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const Community = () => {
  const navigate = useNavigate(); // ✅ Define navigate function

  return (
    <div className="community">
      {/* Page Header */}
      <div className="community-header">
        <h1>🔥 Community Hub</h1>
        <p>Connect, share progress, and stay motivated with fellow fitness enthusiasts!</p>
      </div>

      {/* User Posts Feed */}
      <div className="posts">
        <h2>📢 Recent Posts</h2>
        <div className="post">💪 John: Completed a 10K run today! 🎉</div>
        <div className="post">🏋️ Emma: Started strength training this week!</div>
        <div className="post">🚴‍♂️ Alex: First 50KM cycling challenge done! 🔥</div>
      </div>

      {/* Top Contributors Section */}
      <div className="top-contributors">
        <h2>🏆 Top Contributors</h2>
        <div className="contributor-card">⭐ Emily - 300 Posts</div>
        <div className="contributor-card">⭐ David - 250 Posts</div>
        <div className="contributor-card">⭐ Sarah - 200 Posts</div>
      </div>

      {/* Featured Challenges CTA */}
      <div className="join-challenge">
        <h2>🎯 Join a Challenge!</h2>
        <p>Participate in community fitness challenges to stay motivated.</p>
        <button className="join-btn" onClick={() => navigate("/challenges")}>
          View Challenges
        </button>
      </div>

      {/* Live Chat Preview */}
      <div className="chat-preview">
        <h2>💬 Live Discussions</h2>
        <p>🔥 Jason: “Best recovery tips after a long run?”</p>
        <p>⚡ Lisa: “What’s your favorite protein source?”</p>
      </div>
    </div>
  );
};

export default Community;
