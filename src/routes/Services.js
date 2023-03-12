import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { HeroImg2 } from "../components/heroImages/HeroImg2";
// import { ServicesCardList } from "../components/priceCards/ServiceCardList";
import { Work } from "../components/work/Work";

const styles = {
    textAlign: "center",
};

export const Services = () => {
    return (
        <div>
            <Navbar />
            <HeroImg2
                heading="SERVICES"
                text={
                    <p style={styles}>
                        EchoLineTransfer is dedicated to providing top-notch{" "}
                        <br></br>
                        trucking services to our clients, ensuring that their{" "}
                        <br></br>
                        goods are transported safely, efficiently, and on-time.
                    </p>
                }
            />
            <Work />
            <Footer />
        </div>
    );
};
