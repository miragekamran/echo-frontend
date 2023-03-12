import React from "react";
import "./index.css";

import { Home } from "./routes/Home";
import { About } from "./routes/About";
import { Contact } from "./routes/Contact";
import { Services } from "./routes/Services";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
