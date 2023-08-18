import React from 'react'
import "./services.css"
import dev from '../../img/dev.png'
import uiux from '../../img/uiux.svg'
import dotnet from '../../img/dotnet.png'

function Services() {
  return (
    <div className='services'>

    {/* Left Side */}
      <div className='awesome'>
        <span>My Awesome</span>
        <span>Services</span> 
      <span> There are many variations of passages of Lorem Ipsum available, but the majority have
      <br/>
      Randomised words which don't look even.
      </span>
      <button className='button s-button'> Download CV</button>
      <div className='blur s-blur1' style={{background:"#ABF1FF94"}}></div>
      </div>
      

    {/* Right Div */}
      <div className='cards'>
          <div> <Cart image={dev} txt= {"Developer"} details={"i am Devloper"}/> </div>
          <div> <Cart image={uiux} txt= {"UI/UX"} details={"UIUX designer"}/> </div>
          <div> <Cart image={dotnet} txt= {"Language"} details={"Language Expert"}/> </div>
          <div> </div>
      </div>


     </div>


  )
}



export default Services;
