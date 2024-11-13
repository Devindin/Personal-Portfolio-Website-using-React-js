import React from "react";
import Profile from "../../Components/profile/profile";
import uiuxCSS from '../UIUX/UIUX.module.css';
import project1 from '../../assets/20.png';
import project2 from '../../assets/21.png';
import project3 from '../../assets/22.png';

const UIUX = () => {
  return (
    <div className={`${uiuxCSS.Projectwrapper} section`}>
      <div className="App_Layout">
        <Profile />
        <div className="Main_Wrapper">
          <h1 className="section_Title">UI Projects</h1>
          <div className={uiuxCSS.projectcards}> {/* Fixed misplaced '<' */}
            <div className={uiuxCSS.card}>
              <img src={project1} alt="Web Project 1" />
              <h2>Wallet App</h2>
              <h4>Key features:</h4>
              <p>User can create a new account and log in.</p>
              <p>Make payments through this app.</p>
              <p>Make transactions, etc...</p>
              <h4>Technologies and special functionalities:</h4>
              <p>Figma</p>
            </div>
            <div className={uiuxCSS.card}>
              <img src={project2} alt="Web Project 2" />
              <h2>Acne Detection and Classification System for Medical treatments </h2>
              <h4>Key features:</h4>
              <p>User can create a new account and log in.</p>
              <p>Upload image Get Acnetypes and treatments.</p>
              <h4>Technologies and special functionalities:</h4>
              <p>Figma</p>
              <h4>🔗 Check out on behance:</h4>
              <a href="https://www.behance.net/gallery/210676843/Acne-Detection-And-Classification-System-UI-design">https://www.behance.net/gallery/210676843/Acne-Detection-And-Classification-System-UI-design</a>
            </div>
            <div className={uiuxCSS.card}> {/* Fixed missing opening '<' */}
              <img src={project3} alt="Web Project 3" />
              <h2>Food Delivery App</h2>
              <h4>Key features:</h4>
              <p>User can create a new account and log in.</p>
              <p>Place orders and ender delivery details</p>
              <h4>Technologies and special functionalities:</h4>
              <p>Figma</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIUX;
