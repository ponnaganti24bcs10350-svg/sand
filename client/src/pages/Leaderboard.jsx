import { useEffect, useState } from "react";
import { getApiUrl } from "../config/api";

function Leaderboard() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        setError("");

        const response = await fetch(
          `${getApiUrl()}/api/leaderboard`
        );


        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(
            result.message ||
              "Failed to fetch leaderboard"
          );
        }

        setUsers(result.data || []);
      } catch (error) {
        console.error(
          "Failed to fetch leaderboard:",
          error
        );

        setError(
          error.message ||
            "Unable to connect to server"
        );
      }
    }

    fetchLeaderboard();
  }, []);

  function getRankDisplay(rank) {
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";

    return `#${rank}`;
  }

  return (
    <div className="leaderboard-page">
      <div className="leaderboard-container">
        <h1 className="leaderboard-title">
          Developer Leaderboard
        </h1>

        <p className="leaderboard-subtitle">
          Track your skills. Improve your rank.
        </p>

        {error ? (
          <div className="leaderboard-error">
            <p>Unable to load leaderboard.</p>
            <p>{error}</p>
          </div>
        ) : users.length === 0 ? (
          <p>No users found yet.</p>
        ) : (
          <div className="leaderboard-list">
            {users.map((user) => (
              <div
                className="leaderboard-card"
                key={user.userId}
              >
                <div className="rank">
                  {getRankDisplay(user.rank)}
                </div>

                <div className="user-info">
                  <h2 className="username">
                    {user.username}
                  </h2>

                  <div className="skill">
                    <div className="skill-label">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/vidya-work
                      <span>JavaScript</span>

                      <span>
                        {user.javascriptScore}%
<<<<<<< HEAD
=======
                      <span>MERN</span>

                      <span>
                        {user.mernScore}%
>>>>>>> origin/ishikas-15th-sept
=======
>>>>>>> origin/vidya-work
                      </span>
                    </div>

                    <div className="progress-bar">
                      <div
                        className="progress"
                        style={{
<<<<<<< HEAD
<<<<<<< HEAD
                          width: `${user.javascriptScore}%`,
=======
                          width: `${user.mernScore}%`,
>>>>>>> origin/ishikas-15th-sept
=======
                          width: `${user.javascriptScore}%`,
>>>>>>> origin/vidya-work
                        }}
                      />
                    </div>
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/vidya-work

                  <div className="skill">
                    <div className="skill-label">
                      <span>React</span>

                      <span>
                        {user.reactScore}%
                      </span>
                    </div>

                    <div className="progress-bar">
                      <div
                        className="progress"
                        style={{
                          width: `${user.reactScore}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="overall-score">
                  <div className="score-number">
                    {user.overallScore}
                  </div>

                  <div className="score-label">
                    OVERALL SCORE
                  </div>
<<<<<<< HEAD
=======
>>>>>>> origin/ishikas-15th-sept
=======
>>>>>>> origin/vidya-work
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Leaderboard;