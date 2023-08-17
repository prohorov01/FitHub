import React from "react";
import "./WorkoutCard.css";

function WorkoutCard({
  workout,
  onWorkoutComplete,
  selectedUserIndex,
  setSelectedUserIndex,
  userProgress,
}) {
  const { id, title, description, duration, icon, completed } = workout;

  const handleCompleteClick = () => {
    onWorkoutComplete(id);
  };

  return (
    <div
      className={`bg-card workout-card ${
        completed ? "completed bg-card3" : ""
      }`}
    >
      <div className="card-header">
        <img src={icon} alt="Workout Icon" className="workout-icon" />
        <h3>{title}</h3>
      </div>
      <div className="card-content">
        <p className="workout-description">{description}</p>
        <p className="workout-duration">Duration: {duration}</p>
      </div>

      <button
        onClick={handleCompleteClick}
        disabled={completed || selectedUserIndex === null}
      >
        {completed ? "Completed" : "Mark as Complete"}
      </button>
    </div>
  );
}

export default WorkoutCard;
