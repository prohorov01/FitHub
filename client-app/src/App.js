import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import WorkoutPrograms from "./components/workoutPrograms/WorkoutPrograms";
import Progress from "./components/progress/Progress";
import Profile from "./components/profile/Profile";
import Settings from "./components/settings/Settings";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Error from "./components/error/Error";
import AboutUs from "./components/footer/aboutUs/AboutUs";
import Services from "./components/footer/services/Services";
import Blog from "./components/footer/blog/Blog";
import Contact from "./components/footer/contact/Contact";
import PrivacyPolicy from "./components/footer/privacyPolicy/PrivacyPolicy";

function App() {
  const [completedWorkouts, setCompletedWorkouts] = useState(0);
  const [showVideo, setShowVideo] = useState(true);

  const handleWorkoutComplete = () => {
    setCompletedWorkouts(completedWorkouts + 1);
  };

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={<Home showVideo={showVideo} setShowVideo={setShowVideo} />}
          />

          <Route
            path="/workout-programs"
            element={
              <WorkoutPrograms onWorkoutComplete={handleWorkoutComplete} />
            }
          />
          <Route
            path="/progress"
            element={
              <Progress
                completedWorkouts={completedWorkouts}
                setCompletedWorkouts={setCompletedWorkouts}
              />
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
