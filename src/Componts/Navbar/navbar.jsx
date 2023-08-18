import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="n-wrapper">
      {/* Left Side */}
      <div className="n-left">
        <div className="n-name"> Kiran </div>
        <span>Patil</span>
      </div>

      {/* Right Side */}
      <div className="n-right">
      <div className="n-list">
        <ul style={{listStyleType:"none"}}>
          <li>Home</li>
          <li>Project</li>
          <li>Work Experience</li>
          <li>Skills</li>
          <li>Certificates</li>
          {/* <li>Testimonials</li> */}
        </ul>
      </div>
    </div>
    <button className="button n-btn">Contact Us</button>
 </div>
  );
}

export default Navbar;
