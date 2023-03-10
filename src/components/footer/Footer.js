import "./FooterStyles.css";
import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
export const Footer = () => {
  return (
      <div className="footer">
          <div className="footer-container">
              <div className="left">
                  <div className="location">
                      <FaHome
                          size={20}
                          style={{ color: "#fff", marginRight: "2rem" }}
                      />
                      <div>
                          <p>Somewhere , MainStreet 003</p>
                          <p>California</p>
                      </div>
                  </div>

                  <div className="phone">
                      <h4>
                          <FaPhone
                              size={20}
                              style={{ color: "#fff", marginRight: "2rem" }}
                          />
                          1-2323-343-23
                      </h4>
                  </div>
                  <div className="email">
                      <h4>
                          <FaMailBulk
                              size={20}
                              style={{ color: "#fff", marginRight: "2rem" }}
                          />
                          info@gmail.com
                      </h4>
                      <div className="social"> </div>
                  </div>
              </div>

              <div className="right">
                  <h4>About the company</h4>
                  <p>
                      EchoLineTransfer provides a range of services including freight
                      transportation, warehousing and distribution, and
                      logistics and supply chain management.
                  </p>

                  <div className="social">
                      <FaFacebook
                          size={20}
                          style={{ color: "#fff", marginRight: "2rem" }}
                      />
                      <FaLinkedin
                          size={20}
                          style={{ color: "#fff", marginRight: "2rem" }}
                      />

                      <FaTwitter
                          size={20}
                          style={{ color: "#fff", marginRight: "2rem" }}
                      />
                  </div>
              </div>
          </div>
      </div>
  );
};
