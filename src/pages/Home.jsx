import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

// #0E1117, #2A2D31

const Home = () => {
  return (
    <div style={{ background: "#FBFDFB" }}>
      <Navbar />
      <Slider />
      <Announcement />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
