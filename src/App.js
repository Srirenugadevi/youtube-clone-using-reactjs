import React from "react";
import youtube from "./assert/youtube.jpeg";
import './App.css';
import { IoIosSearch } from "react-icons/io";
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { IoLogoGameControllerB } from "react-icons/io";
import { MdLiveTv } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { IoLinkSharp } from "react-icons/io5";
import { IoMdMusicalNotes } from "react-icons/io";
import elemental from "./assert/elemental.jpeg";
import encanto from "./assert/encanto.jpeg";
import Frozen1 from "./assert/Frozen1.jpeg";
import Frozen2 from "./assert/Frozen2.jpeg";
import gooddinosaur from "./assert/gooddinosaur.jpeg";
import moana from "./assert/moana.jpeg";
import Rava from "./assert/Rava.jpeg";
import tangled from "./assert/tangled.jpeg";





function App() {
  return (
     <div>
      <div className="header">
        <div className="logo">
                <img src={youtube}   height="50px" alt="img"/>
        </div>
        <div className="input">
          <input ></input><span><IoIosSearch /></span>
          </div> 
          </div> 
      <div className="section">
        <div className="left">
             <div className="icon"><IoMdHome /> </div>
             <div className="icon"> <IoLinkSharp />  </div>
             <div className="icon"> <IoMdMusicalNotes />  </div>
             <div className="icon"><MdOutlineLaptopChromebook /> </div>
             <div className="icon"><MdLiveTv /> </div>
             <div className="icon"><IoLogoGameControllerB /> </div>
        </div>
        <div className="Right">
          <div className="row1">
            <div className="img1">
              <img className="image1" src={elemental} height="200px" width="250px" alt="img"/>
              <h1>elemental</h1>
            </div>
            <div className="img1">
              <img className="image1" src={encanto} height="200px" width="250px" alt="img"/>
              <h1>enchanto</h1>
            </div>
            <div className="img1">
              <img className="image1" src={Frozen1} height="200px" width="250px" alt="img"/>
              <h1>Frozen1</h1>
            </div>
          </div>
          <div className="row2">
            <div className="img1">
              <img className="image1" src={Frozen1} height="200px" width="250px" alt="img"/>
              <h1>Frozen1</h1>

            </div>
            <div className="img1">
              <img className="image1" src={Frozen2} height="200px" width="250px" alt="img"/>
              <h1>from</h1>
            </div>
            <div className="img1">
              <img className="image1" src={gooddinosaur} height="200px" width="250px" alt="img"/>
              <h1>gooddinosaur</h1>
            </div>
          </div>
          <div className="row3">
            <div className="img1">
              <img className="image1" src={moana} height="200px" width="250px" alt="img"/>
              <h1>moana</h1>
            </div>
            <div className="img1">
              <img className="image1" src={Rava} height="200px" width="250px" alt="img"/>
              <h1>Rava</h1>
            </div>
            <div className="img1">
              <img className="image1" src={tangled} height="200px" width="250px" alt="img"/>
              <h1>tangled</h1>
            </div>
          </div>
        </div>
      </div>


     </div>


  );
}

export default App;
