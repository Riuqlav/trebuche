import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

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
  font-weight: 100;
  font-size: 40px;
  padding-top: 20px;
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
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;
// const Wrapper = styled.div`
//   padding: 50px;
//   display: flex;
// `;

// const ImgContainer = styled.div`
//   flex: 0.3; //almost left but not all the way
// `;

// const Image = styled.img`
//   width: 50%;
//   height: 90vh;
//   object-fit: cover;
// `;

// const InfoContainer = styled.div`
//   flex: 1;
//   padding: 0px 50px;
// `;

// const Title = styled.h1`
//   font-weight: 200;
// `;

// const Desc = styled.p`
//   margin: 20px 0px;
// `;

// const Price = styled.span`
//   font-weight: 300;
//   font-size: 40px;
// `;

// const FilterContainer = styled.div`
//   width: 50%;
//   margin: 30px;
//   display: flex;
//   justify-content: space-between;
// `;
// const Filter = styled.div`
//   display: flex;
//   align-items: center;
// `;
// const FilterTitle = styled.span`
//   font-size: 20px;
//   font-weight: 200;
// `;
// const FilterColor = styled.div`
//   width: 20px;
//   border-radius: 50%;
//   background-color: ${(props) => props.color};
//   margin: 0px 5px;
// `;
// const FilterSize = styled.select``;
// const FilterSizeOption = styled.option``;

const Product = () => {
  return (
    <Container>
      {" "}
      <Announcements />
      <Navbar />
      <Wrapper>
        <ImgContainer />
        <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        <InfoContainer>
          <Title>A pretty good Jumpsuit!</Title>
          <Desc>
            <h3>New Collection 2022</h3>
            <p>
              Single Dome Model
              <br />
              • Printed T-shirt <br />• Round collar <br />• Graphic on the
              chest and upper back <br /> • The patch is sewn on the lower back{" "}
              <br /> • With label certifying the authenticity
              <br />
            </p>
            <br />
            <h5>SIZE AND FIT</h5>

            <p>
              <br />
              Classic fit This product fits normally Take your usual size Model
              height: 3m99 <br />
              The model presented is a size S
              <br />
              COMPOSITION AND CARE
              <br />
              100% Cotton Machine washable at 40°
            </p>
            <Price>20,00 € </Price>
          </Desc>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
