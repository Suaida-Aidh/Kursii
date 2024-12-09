import React from "react";
import "../styles/Main.css";
import logo from '../images/white-logo.svg'
import { FaFacebook, FaInstagram } from 'react-icons/fa'; // Importing icons from react-icons

const Main = () => {
  return (
    <div>
      <div className="kursii-design">
        <div className="background"></div>

        <div className="content-wrapper">
          <img src={logo} alt="Kursii logo" className="logo-svg" />

          <div className="logo-and-text">
            <h1 className="header-text">Ergonomics meets style</h1>
            <p className="sub-header-text">
              Kursii's new website is coming soon, featuring{" "}
              <span className="second-line">
                exquisite chairs and innovative design. Stay tuned!
              </span>
            </p>
          </div>
          
          {/* Bottom Section */}
          <div className="bottom-section">
            <button className="action-button">Contact us</button>

            {/* Social Media Icons */}
            <div className="icon-container">
              <FaFacebook size={30} color="#fff" />
              <FaInstagram size={30} color="#fff" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
