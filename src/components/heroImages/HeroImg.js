import "./HeroImgStyles.css";
import { React } from "react";

import IntroImg from "../../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

export const HeroImg = () => {
  return (
      <div className="hero">
          <div className="mask">
              <img className="into-img" src={IntroImg} alt="Hero Image" />
          </div>

          <div className="content">
              <p>Delivering your world with speed and reliability.</p>
              <h1>EchoLineTransfer</h1>
              <div>
                  <Link to="/services" className="btn">
                      Services
                  </Link>
                  <Link to="/contact" className="btn btn-light">
                      Contact
                  </Link>
              </div>
          </div>
      </div>
  );
};

