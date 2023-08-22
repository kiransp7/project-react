import React from "react";
import "./navbar.css";
import Toggal from "../Toggle/toggal";
import { Link } from "react-scroll";


function Navbar() {

  return (
    <div className="n-wrapper">
      {/* Left Side */}
      <div className="n-left">
        <div className="n-name"> Kiran Patil</div>
        
        <Toggal></Toggal>


      </div>

      {/* Right Side */}
      <div className="n-right">
      <div className="n-list">
        <ul style={{listStyleType:"none"}}>
        <Link spy={true} to="Navbar" smooth={true}> <li>Home</li> </Link>
        <Link spy={true} to="project" smooth={true}>  <li>Project</li>  </Link>
        <Link spy={true} to="experience" smooth={true}> <li>Work Experience</li> </Link>
        <Link spy={true} to="skills" smooth={true}>  <li>Skills</li> </Link>
        <Link spy={true} to="certificates" smooth={true}> <li>Certificates</li> </Link>
        </ul>
      </div>
    </div>
    <Link spy={true} to="contact" smooth={true}>  <button className="button n-btn">Contact Us</button> </Link>
    
    
    
 </div>
  );
}

export default Navbar;
