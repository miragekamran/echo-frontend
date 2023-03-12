import "./HeroImg2Styles.css";
import "./HeroImgStyles.css";
import IntroImg from "../../assets/intro-bg.jpg"
import React from "react";
import { Link } from "react-router-dom";

export const HeroImg2 = (props) => {
  
    return (
        
        <div className="hero-img">
          <div className="heading">
            <h1>{props.heading}</h1>
            <p> {props.text} </p>
          </div>
        </div>
    );
  
}
