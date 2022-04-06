import React from "react";
import Announcements from "../components/Announcements";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;
const Wrapper = styled.div`
  padding-bottom: 100px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  margin: 10px;
  /* On this props you can  */
  border: black 1px solid;
  background-color: white;
  color: black;
`;
const TopButton1 = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  margin: 10px;
  /* On this props you can  */
  border: none;
  background-color: black;
  color: white;
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Image = styled.img`
  width: 200px;
`;
const ProductName = styled.span`
  color: black;
  font-weight: 600;
`;
const ProductId = styled.span``;
const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const ProductAmountBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: lightgray;
`;
const Summary = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => (props.type === "total" ? "600" : "300")};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Announcements />
      <Navbar />
      <Wrapper>
        <Title>
          Your Cart <br />
        </Title>
        <Top>
          <TopButton> CONTINUE SHOPPING</TopButton>
          <TopTexts>
            {" "}
            <TopText> SHOPPING CART (10) </TopText>{" "}
            <TopText> YOUR WISHLIST (5) </TopText>{" "}
          </TopTexts>
          <TopButton1> CHECKOUT NOW </TopButton1>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                {" "}
                <ProductAmountBox>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountBox>{" "}
                <ProductPrice> € 49,99 </ProductPrice>{" "}
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> HAKURA T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountBox>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountBox>
                <ProductPrice>€ 20,00</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>€ 69,99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>€ 5,90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>€ -5,90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>€ 69,99</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
