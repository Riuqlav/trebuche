import React from "react";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import styled from "styled-components";

const Container = styled.div``;

const Product = () => {
  return (
    <Container>
      {" "}
      <Announcements />
      <Navbar />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
