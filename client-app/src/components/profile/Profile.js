import React, { useState, useEffect } from "react";
import "./Profile.css";
import RegistrationForm from "../registrationForm/RegistrationForm";
import WorkoutPrograms from "../workoutPrograms/WorkoutPrograms";

function Profile() {
  const [userData, setUserData] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [selectedUserIndex, setSelectedUserIndex] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData) {
      setUserData(storedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  const handleEditProfile = (index) => {
    setSelectedUserIndex(index);
    setEditMode(true);
  };

  const handleAddNewUser = () => {
    const newUser = {
      firstName: "",
      lastName: "",
      city: "",
      goal: "",
      progress: 0,
    };
    setUserData([...userData, newUser]);
    setSelectedUserIndex(userData.length);
    setEditMode(true);
  };

  const handleDeleteProfile = (index) => {
    const updatedUsers = [...userData];
    updatedUsers.splice(index, 1);
    setUserData(updatedUsers);
    setSelectedUserIndex(null);
  };

  const handleRegistrationFormSubmit = (newUser) => {
    console.log("Form Submitted:", newUser);
    const updatedUsers = [...userData];
    updatedUsers[selectedUserIndex] = newUser;
    setUserData(updatedUsers);
    setSelectedUserIndex(null);
    setEditMode(false);
  };

  console.log("Selected User Index:", selectedUserIndex);

  const handleWorkoutComplete = (userId, workoutId) => {
    const updatedUsers = userData.map((user, index) => {
      if (index === userId) {
        return { ...user, progress: user.progress + 1 };
      }
      return user;
    });
    setUserData(updatedUsers);
  };

  return (
    <div className="profile">
      <div className="profile-info">
        <div className="user-selection">
          <select
            value={selectedUserIndex === null ? "null" : selectedUserIndex}
            onChange={(e) =>
              setSelectedUserIndex(
                e.target.value === "null" ? null : Number(e.target.value)
              )
            }
          >
            <option value="null">Select a user...</option>
            {userData.map((user, index) => (
              <option key={index} value={index}>
                {user.firstName} {user.lastName}
              </option>
            ))}
          </select>
        </div>
        {editMode ? (
          <RegistrationForm
            onSubmit={handleRegistrationFormSubmit}
            initialData={
              selectedUserIndex !== null ? userData[selectedUserIndex] : null
            }
          />
        ) : selectedUserIndex !== null ? (
          <div className="user-data">
            <h3>User Data:</h3>
            <p>
              <span className="label">First Name:</span>{" "}
              {userData[selectedUserIndex].firstName}
            </p>
            <p>
              <span className="label">Last Name:</span>{" "}
              {userData[selectedUserIndex].lastName}
            </p>
            <p>
              <span className="label">City:</span>{" "}
              {userData[selectedUserIndex].city}
            </p>
            <p>
              <span className="label">Training Goal:</span>{" "}
              {userData[selectedUserIndex].goal}
            </p>
            <p>
              <span className="label">Progress:</span>{" "}
              {userData[selectedUserIndex].progress}%
            </p>
            <button
              className="delete-profile-button"
              onClick={() => handleDeleteProfile(selectedUserIndex)}
            >
              Delete Profile
            </button>
            <button
              className="edit-profile-button"
              onClick={() => handleEditProfile(selectedUserIndex)}
            >
              Edit Profile
            </button>
          </div>
        ) : null}
        <button className="add-user-button" onClick={handleAddNewUser}>
          Add New User
        </button>
      </div>
      <WorkoutPrograms
        onWorkoutComplete={handleWorkoutComplete}
        userData={userData}
        setUserData={setUserData}
        selectedUserIndex={selectedUserIndex}
      />
    </div>
  );
}

export default Profile;
