import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/ralph_halabi?igsh=MTJ0djMxOWUxeHUyMg%3D%3D&utm_source=qr"
        className="home__social-icon"
        target={"_blank"}
      >
        <i className="uil uil-instagram"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/ralph-halabi-063998261"
        className="home__social-icon"
        target={"_blank"}
      >
        <i class="uil uil-linkedin"></i>
      </a>

      <a
        href="https://github.com/RalphHalabi"
        className="home__social-icon"
        target={"_blank"}
      >
        <i className="uil uil-github"></i>
      </a>
    </div>
  );
};

export default Social;
