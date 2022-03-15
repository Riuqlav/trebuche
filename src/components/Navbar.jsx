import React from "react";
import styledComponents from "styled-components";

const Container = styledComponents.div`
height: 60px;

`;

const Wrapper = styledComponents.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`;

const Left = styledComponents.div`
  flex: 1
`;

const Language = styledComponents.span`
  font
`;

const Center = styledComponents.div`
  flex: 1

`;
const Right = styledComponents.div`
  flex: 1

`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
        </Left>
        <Center>center</Center>
        <Right>right</Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
