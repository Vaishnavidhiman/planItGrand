import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import FreeEvents from "../components/FreeEvents";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <FreeEvents />
      <Footer />
    </>
  );
}

export default Home;
