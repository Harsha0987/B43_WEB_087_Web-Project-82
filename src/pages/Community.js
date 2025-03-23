import React from "react";
import { useNavigate } from "react-router-dom"; 

const Community = () => {
  const navigate = useNavigate(); 

  return (
    <div className="community">
      
      <div className="community-header">
        <h1>🔥 Community Hub</h1>
        <p>Connect, share progress, and stay motivated with fellow fitness enthusiasts!</p>
      </div>

   
      <div className="posts">
        <h2>📢 Recent Posts</h2>
        <div className="post">💪 John: Completed a 10K run today! 🎉</div>
        <div className="post">🏋️ Emma: Started strength training this week!</div>
        <div className="post">🚴‍♂️ Alex: First 50KM cycling challenge done! 🔥</div>
      </div>

      
      <div className="top-contributors">
        <h2>🏆 Top Contributors</h2>
        <div className="contributor-card">⭐ Emily - 300 Posts</div>
        <div className="contributor-card">⭐ David - 250 Posts</div>
        <div className="contributor-card">⭐ Sarah - 200 Posts</div>
      </div>

      
      <div className="join-challenge">
        <h2>🎯 Join a Challenge!</h2>
        <p>Participate in community fitness challenges to stay motivated.</p>
        <button className="join-btn" onClick={() => navigate("/challenges")}>
          View Challenges
        </button>
      </div>

   
      <div className="chat-preview">
        <h2>💬 Live Discussions</h2>
        <p>🔥 Jason: “Best recovery tips after a long run?”</p>
        <p>⚡ Lisa: “What’s your favorite protein source?”</p>
      </div>
    </div>
  );
};

export default Community;
