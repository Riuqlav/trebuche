import React from "react";
import styledComponents from "styled-components";
const Container = styledComponents.div`
height: 30px
background-color: teal;
color:white
`;

const Announcements = () => {
  return <Container>Super Deal! Free shipping over 50 € purchase!</Container>;
};

export default Announcements;
