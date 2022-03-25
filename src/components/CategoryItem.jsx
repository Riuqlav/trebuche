import React from "react";
import { categories } from "../data";
import styled from "styled-components";

const Container = styled.div``;
const Image = styled.img``;
const Info = styled.div``;
const Title = styled.h1``;
const Button = styled.button``;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
