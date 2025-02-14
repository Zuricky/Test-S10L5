import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container my-4 text-center">
      <h1>Error 404, Page not found.</h1>
      <p>The page you are searching does not exist.</p>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
