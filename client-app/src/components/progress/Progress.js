import React from "react";
import "./Progress.css";

function Progress({ completedWorkouts, setCompletedWorkouts }) {
  const totalWorkouts = 27;
  const progressPercentage = (completedWorkouts.length / totalWorkouts) * 100;
  const roundedPercentage = Math.round(progressPercentage);

  const handleResetProgress = () => {
    setCompletedWorkouts([]);
  };
  return (
    <div className="progress">
      <h2>Your Progress</h2>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${roundedPercentage}%` }}
        ></div>
      </div>
      <p>{roundedPercentage}% Completed</p>
      <button onClick={handleResetProgress}>Reset Progress</button>
    </div>
  );
}

export default Progress;
