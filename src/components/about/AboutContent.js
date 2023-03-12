import "./AboutContentStyles.css";
import React from "react";
import { Link } from "react-router-dom";

import React2 from "../../assets/react1.jpg"
import React1 from "../../assets/react2.jpg"

export const AboutContent = () => {


    return (
        <div className="about">
            <div className="left">
                <h1>Who We Are?</h1>
                <p>
                    EchoLineTransfer Trucking Company is a leading provider of freight
                    transportation services, specializing in the movement of
                    goods across various regions using a fleet of trucks, and
                    offering warehousing, distribution, and logistics services
                    to its clients
                </p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={React1} className="img" alt="true" />
                    </div>

                    <div className="img-stack bottom">
                        <img src={React2} className="img" alt="true" />
                    </div>
                </div>
            </div>
        </div>
    );



}