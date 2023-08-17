import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

function Error() {
  return (
    <>
      <div className="bg-error ">
        <div className="bg-title">Page Not Found</div>
      </div>

      <div className="page-content">
        <img
          alt="Page Not Found 404"
          src="https://fithub.id/wp-content/uploads/2022/03/pana-mobile.png"
        />

        <div className="not-found">
          <h2>Oops! That page can’t be found.</h2>
        </div>
        <p className="not-title">
          It looks like nothing was found at this location. You can try to
          return to the main page using the link below.
        </p>
        <Link to="/" className="return-button">
          Go back to main page
        </Link>
      </div>
    </>
  );
}

export default Error;
