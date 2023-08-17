import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import VideoBackground from "../videoBackground/VideoBackground";
import Navigation from "../navigation/Navigation";
import BannerFree from "../bannerFree/BannerFree";
import Progress from "../progress/Progress";

import "./Home.css"; // Импортируйте свои пользовательские стили

function Home({ showVideo, setShowVideo }) {
  const location = useLocation();

  useEffect(() => {
    // При переходе с Home.js скрываем видео
    setShowVideo(location.pathname === "/");
  }, [location, setShowVideo]);

  return (
    <div className="home">
      {showVideo && (
        <VideoBackground videoUrl="/videos/your-video.mp4">
          <Navigation />
        </VideoBackground>
      )}
      <div>
        <h1>Find the one that suits you.</h1>
      </div>
      <div className="image-container">
        <div className="image-wrapper">
          <a className="" href="/workout-programs">
            <img
              src="https://fithub.id/wp-content/uploads/2022/03/location-en-1.jpeg"
              alt="Image 1"
            />
          </a>
          <h2 className="image-caption">Schedules</h2>
        </div>
        <div className="image-wrapper">
          <a className="" href="/workout-programs">
            <img
              src="https://fithub.id/wp-content/uploads/2022/03/location-en2-2.jpg"
              alt="Image 2"
            />
          </a>

          <h2 className="image-caption">Locations</h2>
        </div>
        <div className="image-wrapper">
          <a className="" href="/workout-programs">
            <img
              src="https://fithub.id/wp-content/uploads/2022/03/class_en.jpeg"
              alt="Image 3"
            />
          </a>

          <h2 className="image-caption">Classes</h2>
        </div>
      </div>
      <BannerFree />
    </div>
  );
}

export default Home;
