import Navbar from "./Componts/Navbar/navbar";
import Intro from "./Componts/Intro/intro";
import './App.css'
import Services from "./Componts/Servicess/services";
import Contactus from "./Componts/Contactus/contactus";
import Footer from "./Componts/Footer/footer";
import { themeContaxt } from "./Context";
import { useContext } from "react";
import Experience from "./Componts/Experience/experience";
import Project from "./Componts/Project/project";
import Skills from "./Componts/Skills/skills";
import Certificates from "./Componts/Certificates/certificates";

function App() {
    const theme = useContext(themeContaxt)
    const darkMode = theme.state.darkMode
  return (
    <div className="App" style={{
      background: darkMode ? '#343434' : '',
      color: darkMode ? 'white' : ''
      }}>
     <Navbar></Navbar>
     <Intro></Intro>
     <Services></Services>
     <Project></Project>
     <Experience></Experience>
     <Skills></Skills>
     <Certificates></Certificates>
     <Contactus></Contactus>
     <Footer></Footer>
    </div>
  );
}

export default App;
