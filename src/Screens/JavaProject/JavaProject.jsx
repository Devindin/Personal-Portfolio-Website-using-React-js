import React from "react";
import Profile from "../../Components/profile/profile";
import JavaProjectCSS from '../JavaProject/JavaProject.module.css';
import project1 from '../../assets/14.png';



const JavaProject = () => {
  return (
    <div className={`${JavaProjectCSS.Projectwrapper} section`}>
      <div className="App_Layout">
        <Profile />
        <div className="Main_Wrapper">
        <h1 className="section_Title">
        Java Projects
      </h1> 
          <div className={JavaProjectCSS.projectcards}>
            <div className={JavaProjectCSS.card}>
              <img src={project1} alt="Web Project 1" controls />
              <h2>To-Do List </h2>
              
              <h4>Key features:</h4>
              <p>Create account and Login to the system</p>
              <p>View , add , remove and update to do s</p>
              <h4>Technologies and special functionalities:</h4>
              <p>Java , My SQL</p>
              <p>Intellij IDEA</p>
              <h4>🔗 Check out on GitHub:</h4>
              <a href="https://github.com/Devindin/ToDo-App-using-java.git">https://github.com/Devindin/ToDo-App-using-java.git</a>
            </div>
           
           
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default JavaProject;
