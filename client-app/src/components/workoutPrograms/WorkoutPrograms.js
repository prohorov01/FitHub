import React, { useState } from "react";
import "./WorkoutPrograms.css";
import Progress from "../progress/Progress";
import WorkoutGroup from "../workoutGroup/WorkoutGroup";

function WorkoutPrograms({
  onWorkoutComplete,
  userData,
  setUserData,
  selectedUserIndex,
  setSelectedUserIndex,
}) {
  const [completedWorkouts, setCompletedWorkouts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("cardioWorkouts");
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const cardioWorkouts = [
    {
      id: 1,
      title: "Jumping Jacks Intensity",
      description:
        "A high-intensity cardio workout with jumping jacks and sprints.",
      duration: "30 minutes",
      icon: "https://schedules.fithub.id/static/media/cardio.ea9eb3cb67fb37c84498.svg",
      completed: completedWorkouts.includes(1),
    },
    {
      id: 2,
      title: "Interval Jogging",
      description:
        "An interval workout alternating between jogging and high knees.",
      duration: "45 minutes",
      icon: "https://schedules.fithub.id/static/media/cardio.ea9eb3cb67fb37c84498.svg",
      completed: completedWorkouts.includes(2),
    },
    {
      id: 3,
      title: "Dance Cardio",
      description: "A dance-based cardio routine to your favorite beats.",
      duration: "40 minutes",
      icon: "https://schedules.fithub.id/static/media/cardio.ea9eb3cb67fb37c84498.svg",
      completed: completedWorkouts.includes(3),
    },
    {
      id: 4,
      title: "Jump Rope Challenge",
      description: "A jump rope cardio session for improving coordination.",
      duration: "35 minutes",
      icon: "https://schedules.fithub.id/static/media/cardio.ea9eb3cb67fb37c84498.svg",
      completed: completedWorkouts.includes(4),
    },
    {
      id: 5,
      title: "Stair Climbing",
      description: "A stair-climbing workout for building lower body strength.",
      duration: "50 minutes",
      icon: "https://schedules.fithub.id/static/media/cardio.ea9eb3cb67fb37c84498.svg",
      completed: completedWorkouts.includes(5),
    },

    {
      id: 6,
      title: "Boxing Cardio",
      description: "A boxing-inspired cardio routine with punches and jabs.",
      duration: "45 minutes",
      icon: "https://schedules.fithub.id/static/media/cardio.ea9eb3cb67fb37c84498.svg",
      completed: completedWorkouts.includes(6),
    },
    {
      id: 7,
      title: "High-Intensity Intervals",
      description: "A high-intensity interval training (HIIT) cardio workout.",
      duration: "30 minutes",
      icon: "https://schedules.fithub.id/static/media/cardio.ea9eb3cb67fb37c84498.svg",
      completed: completedWorkouts.includes(7),
    },
    {
      id: 8,
      title: "Cycling Adventure",
      description: "An indoor cycling session simulating an outdoor adventure.",
      duration: "60 minutes",
      icon: "https://schedules.fithub.id/static/media/cardio.ea9eb3cb67fb37c84498.svg",
      completed: completedWorkouts.includes(8),
    },

    {
      id: 9,
      title: "Interval Sprinting",
      description: "An interval training session focused on sprinting.",
      duration: "20 minutes",
      icon: "https://schedules.fithub.id/static/media/cardio.ea9eb3cb67fb37c84498.svg",
      completed: completedWorkouts.includes(9),
    },
  ];

  const strengthWorkouts = [
    {
      id: 10,
      title: "Full-Body Strength",
      description: "A full-body strength training workout using weights.",
      duration: "45 minutes",
      icon: "https://schedules.fithub.id/static/media/mind&body.a2802bb32fc1d2d22635.svg",
      completed: completedWorkouts.includes(10),
    },
    {
      id: 11,
      title: "Upper Body Blast",
      description:
        "An upper body focused strength workout for building muscles.",
      duration: "40 minutes",
      icon: "https://schedules.fithub.id/static/media/mind&body.a2802bb32fc1d2d22635.svg",
      completed: completedWorkouts.includes(11),
    },
    {
      id: 12,
      title: "Lower Body Sculpt",
      description: "A lower body workout targeting leg and glute muscles.",
      duration: "35 minutes",
      icon: "https://schedules.fithub.id/static/media/mind&body.a2802bb32fc1d2d22635.svg",
      completed: completedWorkouts.includes(12),
    },
    {
      id: 13,
      title: "Core Strengthening",
      description: "A core-focused strength workout to improve stability.",
      duration: "30 minutes",
      icon: "https://schedules.fithub.id/static/media/mind&body.a2802bb32fc1d2d22635.svg",
      completed: completedWorkouts.includes(13),
    },
    {
      id: 14,
      title: "Resistance Band Routine",
      description:
        "A strength workout using resistance bands for added resistance.",
      duration: "40 minutes",
      icon: "https://schedules.fithub.id/static/media/mind&body.a2802bb32fc1d2d22635.svg",
      completed: completedWorkouts.includes(14),
    },
    {
      id: 15,
      title: "Dumbbell Power",
      description:
        "A power-focused workout using dumbbells for explosive strength.",
      duration: "45 minutes",
      icon: "https://schedules.fithub.id/static/media/mind&body.a2802bb32fc1d2d22635.svg",
      completed: completedWorkouts.includes(15),
    },
    {
      id: 16,
      title: "Strength and Balance",
      description:
        "A workout combining strength exercises with balance challenges.",
      duration: "50 minutes",
      icon: "https://schedules.fithub.id/static/media/mind&body.a2802bb32fc1d2d22635.svg",
      completed: completedWorkouts.includes(16),
    },
    {
      id: 17,
      title: "Athletic Performance",
      description:
        "A strength workout focused on improving athletic performance.",
      duration: "55 minutes",
      icon: "https://schedules.fithub.id/static/media/mind&body.a2802bb32fc1d2d22635.svg",
      completed: completedWorkouts.includes(17),
    },
    {
      id: 18,
      title: "Up Body Workout",
      description: "Strength training exercises targeting the upper body.",
      duration: "40 minutes",
      icon: "https://schedules.fithub.id/static/media/mind&body.a2802bb32fc1d2d22635.svg",
      completed: completedWorkouts.includes(18),
    },
  ];
  const fullbodyWorkouts = [
    {
      id: 19,
      title: "Full-Body Burn",
      description:
        "A full-body workout designed to burn calories and build strength.",
      duration: "45 minutes",
      icon: "https://schedules.fithub.id/static/media/strength.b5323b1bf7ebf2f92991.svg",
      completed: completedWorkouts.includes(19),
    },
    {
      id: 20,
      title: "Total Body Sculpt",
      description: "A total body sculpting workout using various exercises.",
      duration: "50 minutes",
      icon: "https://schedules.fithub.id/static/media/strength.b5323b1bf7ebf2f92991.svg",
      completed: completedWorkouts.includes(20),
    },
    {
      id: 21,
      title: "Full-Body Power",
      description:
        "A power-focused full-body workout for enhancing strength and explosiveness.",
      duration: "55 minutes",
      icon: "https://schedules.fithub.id/static/media/strength.b5323b1bf7ebf2f92991.svg",
      completed: completedWorkouts.includes(21),
    },
    {
      id: 22,
      title: "Dynamic Fullbody",
      description:
        "A dynamic and varied full-body workout to improve overall fitness.",
      duration: "60 minutes",
      icon: "https://schedules.fithub.id/static/media/strength.b5323b1bf7ebf2f92991.svg",
      completed: completedWorkouts.includes(22),
    },
    {
      id: 23,
      title: "Full-Body HIIT",
      description:
        "A high-intensity interval training workout targeting all muscle groups.",
      duration: "40 minutes",
      icon: "https://schedules.fithub.id/static/media/strength.b5323b1bf7ebf2f92991.svg",
      completed: completedWorkouts.includes(23),
    },
    {
      id: 24,
      title: "Total Body Fusion",
      description:
        "A fusion of different workout styles for a complete body workout.",
      duration: "45 minutes",
      icon: "https://schedules.fithub.id/static/media/strength.b5323b1bf7ebf2f92991.svg",
      completed: completedWorkouts.includes(24),
    },
    {
      id: 25,
      title: "Full-Body Circuit",
      description: "A circuit-style workout targeting all major muscle groups.",
      duration: "50 minutes",
      icon: "https://schedules.fithub.id/static/media/strength.b5323b1bf7ebf2f92991.svg",
      completed: completedWorkouts.includes(25),
    },
    {
      id: 26,
      title: "Total Body Challenge",
      description:
        "A challenging full-body workout to test your strength and endurance.",
      duration: "55 minutes",
      icon: "https://schedules.fithub.id/static/media/strength.b5323b1bf7ebf2f92991.svg",
      backgroundImage:
        "	https://firebasestorage.googleapis.com/v0/b/thehub…=media&token=9a0080ff-909a-42e8-a597-60744806e847",
      completed: completedWorkouts.includes(26),
    },
    {
      id: 27,
      title: "Functional Fitness",
      description: "Functional exercises for improving everyday movements.",
      duration: "35 minutes",
      icon: "https://schedules.fithub.id/static/media/strength.b5323b1bf7ebf2f92991.svg",
      completed: completedWorkouts.includes(27),
    },
  ];

  const handleWorkoutComplete = (workoutId) => {
    if (!completedWorkouts.includes(workoutId)) {
      const updatedUsers = userData.map((user, index) => {
        if (index === selectedUserIndex) {
          return { ...user, progress: user.progress + 1 };
        }
        return user;
      });
      setUserData(updatedUsers);
      setCompletedWorkouts([...completedWorkouts, workoutId]);
      onWorkoutComplete();
    }
  };

  return (
    <div className="workout-programs">
      <h1 className="workout-programs-h1">Workout Programs</h1>
      <div className="categories">
        <button onClick={() => handleCategorySelect("cardio")}>
          Cardio Workouts
        </button>
        <button onClick={() => handleCategorySelect("strength")}>
          Strength Workouts
        </button>
        <button onClick={() => handleCategorySelect("fullbody")}>
          Fullbody Workouts
        </button>
      </div>

      {selectedCategory === "cardio" && (
        <WorkoutGroup
          groupTitle="Cardio Workouts"
          workouts={cardioWorkouts}
          onWorkoutComplete={handleWorkoutComplete}
          selectedUserIndex={selectedUserIndex}
          setSelectedUserIndex={setSelectedUserIndex}
        />
      )}

      {selectedCategory === "strength" && (
        <WorkoutGroup
          groupTitle="Strength Workouts"
          workouts={strengthWorkouts}
          onWorkoutComplete={handleWorkoutComplete}
          selectedUserIndex={selectedUserIndex}
          setSelectedUserIndex={setSelectedUserIndex}
        />
      )}

      {selectedCategory === "fullbody" && (
        <WorkoutGroup
          groupTitle="Fullbody Workouts"
          workouts={fullbodyWorkouts}
          onWorkoutComplete={handleWorkoutComplete}
          selectedUserIndex={selectedUserIndex}
          setSelectedUserIndex={setSelectedUserIndex}
        />
      )}

      <Progress
        completedWorkouts={completedWorkouts}
        setCompletedWorkouts={setCompletedWorkouts}
      />
    </div>
  );
}

export default WorkoutPrograms;
