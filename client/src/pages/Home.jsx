import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Shop from "../components/Shop";
import "../app.css";

// #0E1117, #2A2D31

const Home = () => {
  return (
    <div style={{ background: "var(--primary-Homebg-color)" }}>
      <Announcement />
      <Navbar />
      <Slider />
      <Shop />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;

//  Font Boyutları
//
//  Başlıklar : 42px
//  Body : 18px
//
