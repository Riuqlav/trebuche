import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-weight: 200;
  color: #000000;
  text-decoration: none;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  margin: 0px auto;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px 0px;
  padding: 0px 10px;
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px 0px;
  background-color: #fff;
  color: #000;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    /* pointer to the button easy in, avoids flashing once hovered */
    transition: ease-in 0.5s;
    background-color: teal;
  }
`;
const Links = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  font-weight: 300;

  /* IT HAS TO BE BIGGER IN WEIGHT OTHERWISE THE PHOTO WILL COVER */
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none" }}>
          {" "}
          {/* this is in line to remove text decoration */}
          <Title>SIGN IN</Title>
        </Link>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />

          <Button>LOGIN</Button>

          <Links> FORGOT YOUR PASSWORD?</Links>
          <Links>CREATE A NEW ACCOUNT</Links>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
