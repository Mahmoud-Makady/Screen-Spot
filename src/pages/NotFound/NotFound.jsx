import React from "react";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="not-found bg-dark text-secondary text-center">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <a href="/" className="home-link">
        Back to Home
      </a>
    </div>
  );
}
