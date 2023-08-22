import React from "react";
import "./project.css"

export default function Project() {
  return (
    <div className="project" id="project">
      <span>Project</span>
      <span>Vehicle Servicing Management System</span>
      <span>Tech:- React.js, JAVA EE, RESTful API, MySQL</span>
      
      <span>
        The Vehicle Service Management System is an easy to use application and
        has a user friendly interface. This application stores information in
        MySQL database and we have used Spring Boot and ReactJS to develop our
        Backend and Frontend respectively. The objective is to provide a
        platform to users where they can find nearby options available for
        getting their vehicle service done. It implements role based
        authentication which restrict access to sensitive information and
        reduces the data breaches
      </span>
      <div
            className="blur"
            style={{ background: "val(--purple)" }}
          ></div>
    </div>
  );
}
