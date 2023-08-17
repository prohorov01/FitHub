import React from "react";
import { Link } from "react-router-dom";
import "./BannerFree.css";

function FreeTrialSection() {
  return (
    <div className="Container ">
      <div className="bg-free">
        <h1 className="text-white">Сhoose the right workout</h1>
        <Link to="/workout-programs" className="Button">
          Workout programs
        </Link>
      </div>
    </div>
  );
}

export default FreeTrialSection;
