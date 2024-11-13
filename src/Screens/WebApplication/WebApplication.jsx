import React from "react";
import Profile from "../../Components/profile/profile";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import webapplicationCSS from "../WebApplication/WebApplication.module.css";
import project1 from "../../assets/2.png";
import project2 from "../../assets/3.png";
import project3 from "../../assets/4.png";
import project4 from "../../assets/5.png";
import project5 from "../../assets/6.png";
import project7 from "../../assets/7.png";
import project10 from "../../assets/10.png";
import project11 from "../../assets/11.png";
import project18 from "../../assets/18.png";
import project6 from "../../assets/1.png";
import project9 from "../../assets/9.png";
import project16 from "../../assets/16.png";
import project15 from "../../assets/15.png";
import project8 from "../../assets/8.png";
import project12 from "../../assets/12.png";
import project13 from "../../assets/13.png";
import project19 from "../../assets/19.png";

const WebApplication = () => {
  return (
    <div className={`${webapplicationCSS.Projectwrapper} section`}>
      <div className="App_Layout">
        <Profile />
        <div className="Main_Wrapper">
          <h1 className="section_Title">Web Application Projects</h1>
          <div className={webapplicationCSS.projectcards}>
            <div className={webapplicationCSS.card}>
              <img src={project6} alt="Web Project 1" controls />
              <h2>
                Acne Detection And Classification System for Medical Treatments{" "}
              </h2>
              <h3>📹 Watch the Video:</h3>
              <a href="https://www.linkedin.com/posts/devindi-karunathilaka-4bb52b230_machinelearning-mern-acnedetection-activity-7261021228730064896-0djc?utm_source=share&utm_medium=member_desktop">uploaded video in linkdin</a>
              <h4>Key features:</h4>
              <ul>
                <li>
                  Automated Acne Detection: Upload an image,
                  and the system will analyze and identify acne types instantly.
                </li>
                <li>
                  Classification of Acne Types: Detects
                  multiple types, including blackheads, whiteheads, papules,
                  pustules, nodules, and dark spots.
                </li>
                <li>
                  Treatment Recommendations:Based
                  on detected acne types, the system suggests appropriate
                  treatments.
                </li>
                <li>
                 User-Friendly Interface: Intuitive UI built
                  with React and Tailwind CSS for easy navigation and
                  interaction.
                </li>
                <li>
                  Secure Data Management: All user information
                  and images are securely processed and stored with MongoDB on
                  the backend.
                </li>
              </ul>
              <h4>Technologies and special functionalities:</h4>
              <ul>
                <li>
                  React, Tailwind CSS 
                </li>
                <li>
                   Node.js, Express 
                </li>
                <li>
                 TensorFlow CNN
                </li>
                <li>
                 Utilizes preprocessing
                  techniques to optimize uploaded images for accurate model
                  predictions.
                </li>
                <li>
                  RESTful API
                </li>
                
              </ul>

              <h4>🔗 Check out on GitHub:</h4>
              <p>FrontEnd</p>
              <a href="https://github.com/Devindin/Acne-Detection-and-Classification-System-For-Medical-Treatments-Frontend-.git">
              https://github.com/Devindin/Acne-Detection-and-Classification-System-For-Medical-Treatments-Frontend-.git
              </a>
              <p>BackEnd</p>
              <a href="https://github.com/Devindin/Acne-Detection-and-Classification-System-For-Medical-Treatments-Backend-using-Node.js-and-Express.js.git">
              https://github.com/Devindin/Acne-Detection-and-Classification-System-For-Medical-Treatments-Backend-using-Node.js-and-Express.js.git
              </a>
              <p>Model</p>
              <a href="https://github.com/Devindin/Multi-Label-Acne-Classification-CNN-Model-.git">
              https://github.com/Devindin/Multi-Label-Acne-Classification-CNN-Model-.git
              </a>
            </div>
            <div className={webapplicationCSS.card}>
              <img src={project1} alt="Web Project 1" controls />
              <h2>
                E-commerce website with admin dashboard for an online flower
                shop{" "}
              </h2>
              <h3>📹 Watch the Video:</h3>
              <a href="https://www.linkedin.com/posts/devindi-karunathilaka-4bb52b230_fullstackdevelopment-mernstack-ecommerce-activity-7205275432521273344-hw0I?utm_source=share&utm_medium=member_desktop">
                {" "}
                uploaded video in linkdin
              </a>
              <h4>Key features:</h4>
              <p>Customer Experience:</p>
              <p>
                View available products and detailed descriptions. <br />
                Place orderswith ease.
                <br />
                User-friendly interface for a pleasant shopping experience.
              </p>
              <p>Admin Panel:</p>
              <p>
                Secure admin login.
                <br />
                Comprehensive view of all products, orders, and customer
                details. <br />
                Capability to add, update, and delete products.
              </p>
              <h4>Technologies and special functionalities:</h4>
              <p>Mongo DB , Express JS , React , Node JS , Tailwind CSS</p>
              <p>API calling</p>
              <h4>🔗 Check out on GitHub:</h4>
              <p>FrontEnd</p>
              <a href="https://github.com/Devindin/Online-Flower-Shop-FrontEnd.git">
                https://github.com/Devindin/Online-Flower-Shop-FrontEnd.git
              </a>
              <p>BackEnd</p>
              <a href="https://github.com/Devindin/Online-Flower-Shop-backEnd.git">
                https://github.com/Devindin/Online-Flower-Shop-backEnd.git
              </a>
            </div>
            <div className={webapplicationCSS.card}>
              <img src={project2} alt="Web Project 4" controls />
              <h2> Appointment Management System </h2>
              <h3>📹 Watch the Video:</h3>
              <a href="https://www.linkedin.com/posts/devindi-karunathilaka-4bb52b230_mernstack-appointmentmanagement-rolebasedauthentication-activity-7199490245099180033-42B5?utm_source=share&utm_medium=member_desktop">
                uploaded video in linkdin
              </a>
              <h4>Key features:</h4>
              <p>Receptionist Dashboard:</p>
              <p>
                Appointment Management: Create, view (by date and doctor name),
                and cancel appointments seamlessly.
                <br />
                Doctor Management: Add new doctors and view their details
                efficiently.
                <br />
                Patient Management: Add, view (using NIC), edit, and delete
                patient records with ease.
              </p>
              <p>Doctor Dashboard:</p>
              <p>
                Appointment Viewing: Doctors can log in to view their own
                appointments based on the date.
              </p>
              <h4>Technologies and special functionalities:</h4>
              <p>Mongo DB , Express JS , React , Node JS , Tailwind CSS</p>
              <p>API calling</p>
              <p>Login authentications and authorizations</p>
              <h4>🔗 Check out on GitHub:</h4>
              <p>FrontEnd</p>
              <a href="https://github.com/Devindin/Appointment-Management-System-using-MERN-stack-frontend.git">
                https://github.com/Devindin/Appointment-Management-System-using-MERN-stack-frontend.git
              </a>
              <p>BackEnd</p>
              <a href="https://github.com/Devindin/Appointment-Management-System-using-MERN-stack-backend.git">
                https://github.com/Devindin/Appointment-Management-System-using-MERN-stack-backend.git
              </a>
            </div>
            <div className={webapplicationCSS.card}>
              <img src={project3} alt="Web Project 4" controls />
              <h2> Logging System and Beyond!</h2>
              <h3>📹 Watch the Video:</h3>
              <a href="">uploaded video in linkdin</a>
              <h4>Key features:</h4>
              <p>Building a Logging System:</p>
              <p>
                Starting with the basics, I crafted a robust logging system
                using MERN stack. Postman came in handy for API testing,
                ensuring smooth communication between my frontend and backend.
              </p>
              <p> Creating the Authentication Flow:</p>
              <p>
                First, users encounter the login page. If they're new, they
                seamlessly register through a form, which adds them to the
                application and stores their data securely in the database. Once
                registered, users can log in using their credentials.
              </p>
              <p>Home Sweet Home:</p>
              <p>
                Upon logging in, users are greeted with a personalized home
                page, dynamically loaded with their details fetched directly
                from the database. This ensures a customized experience for
                every user.
              </p>
              <p>Editing User Details:</p>
              <p>
                Want to update your details? No problem! With a click of the
                'Edit' button, users can modify their information, which is then
                seamlessly updated and stored back into the database.
              </p>
              <p>Adding Relations:</p>
              <p>
                With the 'Add Relation' button, users can establish connections
                and relations, enriching their profile and network. Each
                relation is stored securely in the database, enhancing the
                user's experience.
              </p>
              <p>Deleting Relations:</p>
              <p>
                Need to clean up? Simply click the bin icon to delete unwanted
                relations, both from the profile view and database, ensuring a
                clutter-free and organized profile.
              </p>
              <h4>Technologies and special functionalities:</h4>
              <p>Mongo DB , Express JS , React , Node JS , Tailwind CSS</p>
              <p>API calling</p>
              <p>Login authentications</p>
              <h4>🔗 Check out on GitHub:</h4>
              <p>FrontEnd</p>
              <a href="https://github.com/Devindin/Login-Authentication-And-Account-maintain.git">
                https://github.com/Devindin/Login-Authentication-And-Account-maintain.git
              </a>
              <p>BackEnd</p>
              <a href="https://github.com/Devindin/Login-authentication-and-account-maintain-backend-.git">
                https://github.com/Devindin/Login-authentication-and-account-maintain-backend-.git
              </a>
            </div>
            <div className={webapplicationCSS.card}>
              <img src={project4} alt="Web Project 2" controls />
              <h2> Buyer Wallet Interface </h2>
              <h3>📹 Watch the Video:</h3>
              <a href="https://www.linkedin.com/posts/devindi-karunathilaka-4bb52b230_mern-usdt-react-activity-7239368098955304961-c6jB?utm_source=share&utm_medium=member_desktop">
                uploaded video in linkdin
              </a>
              <h4>Key features:</h4>
              <p>
                allows buyers to easily manage their USDT and LKR balances with
                a smooth and user-friendly interface, paving the way for secure
                and efficient trading.
              </p>
              <p>Graph</p>
              <h4>Technologies and special functionalities:</h4>
              <p>React , Tailwind css</p>
              <h4>🔗 Check out on GitHub:</h4>
              <a href="https://github.com/Devindin/Buyer-wallet-using-react.git">
                https://github.com/Devindin/Buyer-wallet-using-react.git
              </a>
            </div>
            <div className={webapplicationCSS.card}>
              <img src={project7} alt="Web Project 2" controls />
              <h2> Transactions </h2>
              <h3>📹 Watch the Video:</h3>
              <a href="https://www.linkedin.com/posts/devindi-karunathilaka-4bb52b230_mernstack-react-tailwindcss-activity-7246004431484264449-KT3r?utm_source=share&utm_medium=member_desktop">
                uploaded video in linkdin
              </a>
              <h4>Key features:</h4>
              <p>
                allows users to make transactions and view transactions
              </p>
              <h4>Technologies and special functionalities:</h4>
              <p>React , Tailwind css</p>
              <h4>🔗 Check out on GitHub:</h4>
              <a href="https://github.com/Devindin/Buyer-wallet-using-react.git">
                https://github.com/Devindin/Buyer-wallet-using-react.git
              </a>
            </div>
            <div className={webapplicationCSS.card}>
              <img src={project5} alt="Web Project 3" controls />
              <h2>User registration system</h2>
              <h3>📹 Watch the Video:</h3>
              <a href="https://www.linkedin.com/posts/devindi-karunathilaka-4bb52b230_mern-usdt-react-activity-7238976191427133440-UfZn?utm_source=share&utm_medium=member_desktop">
                uploaded video in linkdin
              </a>
              <h4>Key features:</h4>
              <p>
                enabling secure and efficient trading between retail buyers and
                sellers.
              </p>
              <p>Responsive</p>
              <h4>Technologies and special functionalities:</h4>
              <p>React , Tailwind css</p>
              <h4>🔗 Check out on GitHub:</h4>
              <a href="https://github.com/Devindin/TetherX-signUp.git">
                https://github.com/Devindin/TetherX-signUp.git
              </a>
            </div>

            <div className={webapplicationCSS.card}>
              <img src={project9} alt="Web Project 4" controls />
              <h2>Online book library</h2>
              <h3>📹 Watch the Video:</h3>
              <a href="https://www.linkedin.com/posts/devindi-karunathilaka-4bb52b230_onlinelibrary-openlibraryapi-books-activity-7194659457744711680-cLsU?utm_source=share&utm_medium=member_desktop">
                uploaded video in linkdin
              </a>
              <h4>Key features:</h4>
              <p>
                Discover, explore, and immerse yourself in a world of
                literature.{" "}
              </p>
              <h4>Technologies and special functionalities:</h4>
              <p>React</p>
              <p>Open Library API</p>

              <h4>🔗 Check out on GitHub:</h4>
              <a href="https://github.com/Devindin/BookFinderApp.git">
                https://github.com/Devindin/BookFinderApp.git
              </a>
            </div>
            <div className={webapplicationCSS.card}>
              <img src={project15} alt="Web Project 4" controls />
              <h2>Blogs website </h2>
              <h3>📹 Watch the Video:</h3>
              <a href="">uploaded video in linkdin</a>
              <h4>Key features:</h4>
              <p>Add new blogs</p>
              <p>Remove blogs</p>
              <p>Update blogs</p>
              <p>View blogs</p>
              <h4>Technologies and special functionalities:</h4>
              <p>React</p>
              <h4>🔗 Check out on GitHub:</h4>
              <a href="https://github.com/Devindin/Blog-web-site-using-react.git">
                https://github.com/Devindin/Blog-web-site-using-react.git
              </a>
            </div>

            <div className={webapplicationCSS.card}>
              <img src={project18} alt="Web Project 4" controls />
              <h2>Animated Website</h2>
              <h3>📹 Watch the Video:</h3>
              <a href="https://www.linkedin.com/posts/devindi-karunathilaka-4bb52b230_webdevelopment-react-framermotion-activity-7222172267068190720-E789?utm_source=share&utm_medium=member_desktop">
                uploaded video in linkdin
              </a>
              <h4>Key features:</h4>
              <p>
                a dynamic and engaging animated website built with React and
                Framer Motion.
              </p>
              <h4>Technologies and special functionalities:</h4>
              <p>React</p>
              <h4>🔗 Check out on GitHub:</h4>
              <a href="https://github.com/Devindin/animated-web-experience.git">
                https://github.com/Devindin/animated-web-experience.git
              </a>
            </div>
            <div className={webapplicationCSS.card}>
              <img src={project8} alt="Web Project 4" controls />
              <h2>Netflix Clone </h2>
              <h3>📹 Watch the Video:</h3>
              <a href="https://www.linkedin.com/posts/devindi-karunathilaka-4bb52b230_react-openai-webdevelopment-activity-7243528230370959361-bfVo?utm_source=share&utm_medium=member_desktop">
                uploaded video in linkdin
              </a>
              <h4>Key features:</h4>
              <p>Responsive design with an intuitive UI/UX</p>
              <h4>Technologies and special functionalities:</h4>
              <p>React</p>
              <p>OpenAI </p>
              <h4>🔗 Check out on GitHub:</h4>
              <a href="https://github.com/Devindin/Netflix-clone-using-react-and-open-API.git">
                https://github.com/Devindin/Netflix-clone-using-react-and-open-API.git
              </a>
            </div>
            <div className={webapplicationCSS.card}>
              <img src={project11} alt="Web Project 4" controls />
              <h2>Online Hanging plants shop website </h2>
              <h3>📹 Watch the Video:</h3>
              <a href="https://www.linkedin.com/posts/devindi-karunathilaka-4bb52b230_frontenddevelopment-reactjs-tailwindcss-activity-7208509593197453312-guSL?utm_source=share&utm_medium=member_desktop">
                uploaded video in linkdin
              </a>
              <h4>Key features:</h4>
              <p>Responsive website</p>
              <h4>Technologies and special functionalities:</h4>
              <p>React</p>
              <p>Tailwind css</p>
              <p>Vite</p>
              <h4>🔗 Check out on GitHub:</h4>
              <a href="https://github.com/Devindin/Hanging-Plants-web-page.git">
                https://github.com/Devindin/Hanging-Plants-web-page.git
              </a>
            </div>
            <div className={webapplicationCSS.card}>
              <img src={project12} alt="Web Project 4" controls />
              <h2>Ecommerce frontend</h2>
              <h3>📹 Watch the Video:</h3>
              <a href="">uploaded video in linkdin</a>
              <h4>Key features:</h4>
              <p> Discover, explore dresses and add to cart </p>
              <h4>Technologies and special functionalities:</h4>
              <p>React</p>
              <h4>🔗 Check out on GitHub:</h4>
              <a href="https://github.com/Devindin/E-commerce-web-site.git">
                https://github.com/Devindin/E-commerce-web-site.git
              </a>
            </div>
            <div className={webapplicationCSS.card}>
              <img src={project10} alt="Web Project 4" controls />
              <h2>Restaurant website </h2>
              <h3>📹 Watch the Video:</h3>
              <a href="">uploaded video in linkdin</a>
              <h4>Key features:</h4>
              <p>better UI experience</p>
              <h4>Technologies and special functionalities:</h4>
              <p>React</p>
              <h4>🔗 Check out on GitHub:</h4>
              <a href="https://github.com/Devindin/Restaurant-Web-site-using-React.git">
                https://github.com/Devindin/Restaurant-Web-site-using-React.git
              </a>
            </div>
            <div className={webapplicationCSS.card}>
              <img src={project19} alt="Web Project 4" controls />
              <h2>Web Interface for Thapro Coin project</h2>
              <h3>📹 Watch the Video:</h3>
              <a href="">uploaded video in linkdin</a>
              <h4>Key features:</h4>
              <p>Dynamic web page</p>
              <h4>Technologies and special functionalities:</h4>
              <p>HTML ,CSS , Java Script</p>
              <h4>🔗 Check out on GitHub:</h4>
              <a href="https://github.com/Devindin/Thapro-coin-web.git">
                https://github.com/Devindin/Thapro-coin-web.git
              </a>
            </div>
            <div className={webapplicationCSS.card}>
              <img src={project13} alt="Web Project 4" controls />
              <h2>Hospital website </h2>
              <h3>📹 Watch the Video:</h3>
              <a href="">uploaded video in linkdin</a>
              <h4>Key features:</h4>
              <p>User can view about doctors and hospital.</p>
              <p>User can login to the website and make appointments </p>
              <h4>Technologies and special functionalities:</h4>
              <p>HTML ,CSS , Java Script , PHP </p>
              <p>My SQL</p>
              <h4>🔗 Check out on GitHub:</h4>
              <a href="https://github.com/Devindin/Hospital.git">
                https://github.com/Devindin/Hospital.git
              </a>
            </div>
            <div className={webapplicationCSS.card}>
              <img src={project16} alt="Web Project 4" controls />
              <h2>Personal Portfolio website </h2>
              <h3>📹 Watch the Video:</h3>
              <a href="">uploaded video in linkdin</a>
              <h4>Key features:</h4>
              <p>Responsive</p>
              <h4>Technologies and special functionalities:</h4>
              <p>HTML ,CSS ,Javascript</p>
              <p>And connected to google sheet .</p>
              <h4>🔗 Check out on GitHub:</h4>
              <a href="https://github.com/Devindin/portfolio.git">
                https://github.com/Devindin/portfolio.git
              </a>
              <a></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebApplication;
