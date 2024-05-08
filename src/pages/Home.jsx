import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Login from "./Login";
import Register from "./Register";
import "../app.css";

// #0E1117, #2A2D31

const Home = () => {
  return (
    <div style={{ background: "var(--primary-Homebg-color)" }}>
      <Navbar />

      <Register />
      <Login />
      <Slider />
      <Announcement />
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
