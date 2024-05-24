import React from "react";
import Navbar from "../src/components/Navbar";
import About from "../src/components/About";
import Footer from "../src/components/Footer";

function AboutUs() {
  return (
    <>
      <div>
        <Navbar />
        <div className="min-h-screen">
          <About />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
