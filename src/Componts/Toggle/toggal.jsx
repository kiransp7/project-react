import React from 'react'
import "./toggle.css"
import Sun from "@iconscout/react-unicons/icons/uil-sun"
import Moon from "@iconscout/react-unicons/icons/uil-moon"
import { themeContaxt } from "../../Context";
import { useContext } from "react";

export default function Toggal() {

    const theme = useContext(themeContaxt);
    const darkMode = theme.state.darkMode;

    const handdleClick = () =>{
       theme.dispatch({type:'toggle'});
    }

  return (
    <div >
        {/* <Moon/>
        <Sun/>
        <div className='t-button' 
        onclick={handdleClick}
        style={darkMode ? {left: "2px"} : {right: "2px"}}>

        </div> */}
    </div>
  )
}
