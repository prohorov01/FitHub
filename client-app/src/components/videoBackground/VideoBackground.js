import React from "react";
import "./VideoBackground.css"; // Импортируйте стили для VideoBackground

function VideoBackground({ videoUrl, children }) {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {children}
    </div>
  );
}

export default VideoBackground;
