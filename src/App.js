import Navbar from "./Componts/Navbar/navbar";
import Intro from "./Componts/Intro/intro";
import './App.css'
import Services from "./Componts/Services/services";

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Intro></Intro>
     <Services></Services>
    </div>
  );
}

export default App;
