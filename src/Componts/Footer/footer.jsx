import React from 'react'
import "./footer.css"
import footer from "../../img/wave.png"
import Insta from "@iconscout/react-unicons/icons/uil-instagram"
import Facebook from "@iconscout/react-unicons/icons/uil-facebook"
import GitHub from "@iconscout/react-unicons/icons/uil-github"

export default function Footer() {
  return (
    <div className='footer'>
    <img src={footer} style={{width:"100%"}}/>
      <div className='f-content'>
      {/* <span className='my-email'> Email: thekiranspatil@gmail.com</span> */}
      <div className='f-icons'>
            <a href="#" target="_blank">  <Facebook color='white' size='3rem'> </Facebook>  </a>
            <a href="https://github.com/kiransp7" target="_blank"> <GitHub color='white' size='3rem'> </GitHub>  </a>
            <a href="https://www.instagram.com/kiran7p/" target="_blank">  <Insta color='white' size='3rem'> </Insta>  </a>
      </div>

      </div>
    </div>
  )
}
