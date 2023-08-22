import React from "react";
import './intro.css'
import LinkedIn from "../../img/linkedin.png";
import GitHub from "../../img/github.png";
import Instagram from "../../img/instagram.png";
import vector1 from "../../img/Vector1.png";
import vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import Floatingdiv from "./floatingdiv";
import { Link } from "react-scroll";





function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am </span>
          <span>Kiran</span>
          <span> Full Stack Developer with project experience in web designing and backend API's, producting the Quality work</span>
        </div>

        <Link spy={true} to="contact" smooth={true}> 
        <button className="button i-btn">Hire Me</button> </Link>
        
        <div className="i-icons">
              <a href="https://www.linkedin.com/in/kiran-patil-903b41200/" target="_blank"> <img src={LinkedIn} alt="LinkedIn"/>  </a>
              <a href="https://github.com/kiransp7" target="_blank">  <img src={GitHub} alt="Facebook"/> </a>
              <a href="https://www.instagram.com/kiran7p/" target="_blank"> <img src={Instagram} alt="Instagram"/>  </a>
        </div>
      </div>

      <div className="i-right"> 

      <img src={vector1} alt="v1"/>
      <img src={vector2} alt="v2"/>
      <img src={boy} alt="boy"/>
      <img src={glassesimoji} alt="glassesimoji"/>

      <div style={{top:'-4%', left:'68%'}} className="floatingdiv">
      {/* Prop use------------------------------------------------>>>>>>>>>>>>>> PROPs------------------------------------*/}
          <Floatingdiv image={crown} txt1={"FullStack"} txt2={"Developer"}></Floatingdiv>  
      </div>

      <div style={{top:'18rem', left:'0rem'}} className="floatingdiv">
      {/* Prop use------------------------------------------------>>>>>>>>>>>>>> PROPs-------------------------------------*/}
          <Floatingdiv image={thumbup} txt1={"Best Design"} txt2={"UI/UX"}></Floatingdiv>  
      </div>

      {/* Blur Dives */}

      <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
      <div className="blur" style={{
              background: "#76FF7A", 
              top:"17rem", 
              width:"21rem", 
              height:"7rem", 
              left:"-9rem"}}></div>
      
      </div>
    </div>
  );
}

export default Intro;
