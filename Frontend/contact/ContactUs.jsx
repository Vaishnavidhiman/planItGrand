import React from "react";
import Navbar from "../src/components/Navbar";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";

function ContactUs() {
  return (
    <>
      <div>
        <Navbar />
        <div className="min-h-screen">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ContactUs;
