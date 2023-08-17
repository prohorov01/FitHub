import React from "react";
import WorkoutCard from "../workoutCard/WorkoutCard";
import "./WorkoutGroup.css";

function WorkoutGroup({
  groupTitle,
  workouts,
  onWorkoutComplete,
  backgroundImage,
  selectedUserIndex,
  setSelectedUserIndex,
  userProgress,
}) {
  return (
    <div className="workout-group" style={{ backgroundImage: backgroundImage }}>
      <h2>{groupTitle}</h2>
      <div className="workout-list">
        {workouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
            onWorkoutComplete={onWorkoutComplete}
            selectedUserIndex={selectedUserIndex}
            setSelectedUserIndex={setSelectedUserIndex}
            userProgress={userProgress}
          />
        ))}
      </div>
    </div>
  );
}

export default WorkoutGroup;
