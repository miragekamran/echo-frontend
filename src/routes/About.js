import React from "react";
import { Navbar }   from "../components/navbar/Navbar";
import { Footer }   from "../components/footer/Footer";
import { HeroImg2 }   from "../components/heroImages/HeroImg2";
import { AboutContent } from "../components/about/AboutContent";

const styles = {
    textAlign: "center",
};

export const About = () => {
  return (
      <div>
          <Navbar />
          <HeroImg2
              heading="ABOUT"
              text={
                  <p style={styles}>
                      At EchoLineTransfer, we understand the importance of <br></br>
                      timely and efficient delivery, which is why we use <br></br>
                      state-of-the-art technology to track our shipments and
                      ensure they arrive on time.
                  </p>
              }
          />
          <AboutContent />
          <Footer />
      </div>
  );
};
