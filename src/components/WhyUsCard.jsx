import React from "react";
import styled from "styled-components";

function WhyUsCard({ Img, Heading, Body }) {
  return (
    <WhyUs__Card>
      <img src={Img} alt="Svg" />
      <WhyUs__Card_Heading>{Heading}</WhyUs__Card_Heading>
      <WhyUS__Card_Body>{Body}</WhyUS__Card_Body>
    </WhyUs__Card>
  );
}

export default WhyUsCard;

const WhyUs__Card = styled.div`
  width: 35rem;
  height: 35rem;
  background: #ffffff;
  border: 1px solid #8ff1d5;
  box-sizing: border-box;
  box-shadow: 0px 6.25952px 4.17302px rgba(243, 243, 243, 0.65),
    0px 3.12976px 8.34603px rgba(243, 243, 243, 0.65);
  border-radius: 1rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  img {
    width: 9rem;
  }
  @media (max-width: 768px) {
    img {
      width: 7.5rem;
    }
    width: 30rem;
    height: 34rem;
  }
`;
const WhyUs__Card_Heading = styled.div`
  font-weight: 500;
  font-size: 25px;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 4rem;
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;
const WhyUS__Card_Body = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;
