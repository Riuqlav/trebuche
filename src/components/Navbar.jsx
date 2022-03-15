import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styledComponents from "styled-components";

const Container = styledComponents.div`

height: 60px;
`;

const Wrapper = styledComponents.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
`;

const Left = styledComponents.div`
flex: 1;
display: flex;
align-items: center;
`;

const Language = styledComponents.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styledComponents.div`
border: 0.5px solid lightgrey;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px,
`;

const Input = styledComponents.input`
border:none

`;

const Logo = styledComponents.h1`
font-weight: bold;
`;

const Center = styledComponents.div`
  flex: 1
text-align: center;
`;

const Right = styledComponents.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;`;

const MenuItem = styledComponents.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "grey", fontSize: 18 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Boutique Ennuyeuse.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            {" "}
            <Badge color="primary" badgeContent={10}>
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
