import React from "react";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import styled from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2em;
  font-weight: bold;
  line-height: 1.2;
  color: #000000;
  margin-bottom: 0.5em;
`;

const Desc = styled.p`
  font-size: 1.2em;
  line-height: 1.2;
  color: #000000;
  margin-bottom: 0.5em;
`;

const Price = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  line-height: 1.2;
  color: #000000;
  margin-bottom: 0.5em;
`;

const Product = () => {
  return (
    <Container>
      {" "}
      <Announcements />
      <Navbar />
      <Wrapper>
        <ImgContainer src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        <InfoContainer>
          <Title>A pretty good product!</Title>
          <Desc>
            New Collection 2022
            <br />
            Single Dome Model
            <br />
            • Printed T-shirt <br />• Round collar <br />• Graphic on the chest
            and upper back <br /> • The patch is sewn on the lower back <br /> •
            With label certifying the authenticity
            <br />
            SIZE AND FIT
            <br />
            Classic fit This product fits normally Take your usual size Model
            height: 3m99 <br />
            The model presented is a size S
            <br />
            COMPOSITION AND CARE
            <br />
            100% Cotton Machine washable at 40°
          </Desc>
          <Price>20,00 € </Price>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
