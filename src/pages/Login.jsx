import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ImgContainer = styled.div`
  flex: 0.3;
`;

const Image = styled.img`
  width: 50%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 300;
  font-size: 40px;
  margin: 20px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;

`;


const Login = () => {
  return <Container>
      <Wrapper>
        <ImgContainer>
          <Image src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
        </ImgContainer>
        <InfoContainer>
          <Title>
            Product Title
          </Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec euismod, nisl eget consectetur sagittis,
            nisl nunc ultrices eros, eu porttitor nisl nunc euismod
            nisl.
          </Desc>
          <Price>
            $100
          </Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>
                Color
              </FilterTitle>
              <FilterColor style={{ backgroundColor: "red" }} />
              <FilterColor style={{ backgroundColor: "blue" }} />
              <FilterColor style={{ backgroundColor: "green" }} />
            </Filter>
            <Filter>
              <FilterTitle>
                Size
              </FilterTitle>
              <FilterTitle>
                S
              </FilterTitle>
              <FilterTitle>
                M
              </FilterTitle>
              <FilterTitle>
                L
              </FilterTitle>
              <FilterTitle>
                XL
              </FilterTitle>
            </Filter>
          </FilterContainer>
        </InfoContainer>
      </Wrapper>
    </Container>;
}
      </Wrapper>
  </Container>;
};

export default Login;
