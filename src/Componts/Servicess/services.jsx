import React from "react";
import "./services.css";
import studyemoji from "../../img/studyemoji.png";
import Cart from "./cart";
import Resume from '../../img/KiranPatilResume.pdf';

function Services() {
  return (
    <div className="services">
      {/* Left Side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Words</span>
        <span>
          {" "}
          With a passion for programming, I am always eager to learn and take on
          new challenges. My experience includes working with several
          programming languages and frameworks, which has enabled me to solve
          complex problems and develop innovative solutions.<br></br> Staying
          up-to-date with the latest industry trends is a top priority for me,
          and I am committed to delivering high-quality results that exceed
          expectations.
        </span>
        <a href= {Resume} download><button className="button s-button"> Download CV</button></a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* Right Div */}
      <div className="cart">
        <div>
        {/* Prop-----------------------------------------------------------------------------Prop */}
          <Cart
            image={studyemoji}
            txt={"Full-Stack Developer"}
            details1={"Frontend : HTML, CSS, Bootstrap, JavaScript, ReactJS"}
            details2={"Backend : Java, .Net, C#, ADO.Net, ASP.Net, .Net MVC, Hibernate, SpringBoot"}
          />
          <div className="blur" style={{background: "var(--purple)"}}></div>
        </div>
      </div>
    </div>
  );
}

export default Services;
