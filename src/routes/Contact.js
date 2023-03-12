import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { HeroImg2 } from "../components/heroImages/HeroImg2";
import { ContactForm } from "../components/contact/ContactForm";

const styles = {
    textAlign: "center",
};

export const Contact = () => {
  
  return (
      <div>
          <Navbar />
          <HeroImg2
              heading="CONTACT"
              text={
                  <p style={styles}>
                      To learn more about our services or to request a quote, <br></br>
                      please visit our website or contact our customer service <br></br>
                      team at [phone number] or [email address].
                  </p>
              }
          />
          <ContactForm />
          <Footer />
      </div>
  );
};

