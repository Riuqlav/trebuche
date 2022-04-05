import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
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

const Agreement = styled.p`
  font-size: 12px;
  margin: 10px 0px;
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px 0px;
  background-color: #fff;
  color: #000;
  font-weight: 200;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    /* pointer to the button easy in, avoids flashing once hovered */
    transition: ease-in 0.5s;
    background-color: #f8f4f4;
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input type="text" placeholder="First Name" />
          <Input type="text" placeholder="Last Name" />
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="Password" />
          <Input type="text" placeholder="Confirm Password" />
          <Agreement>
            By creating an account, you agree to our{" "}
            <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
          </Agreement>
          <Button>CREATE ACCOUNT</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
