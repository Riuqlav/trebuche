import React from "react";
import Announcements from "../components/Announcements";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <Announcements />,
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
