import React from "react";
import styled from "styled-components";
import WhyUsCard from "./WhyUsCard";
import Price from "../Image/Price.svg";
import CarPrice from "../Image/CarPrice.svg";
import CarUV from "../Image/CarUV.svg";

function WhyUS() {
  return (
    <WhyUs__Container>
      <WhyUs__Heading_Contianer>
        Why Us
        <SubHeading>Benefits of choosing our services.</SubHeading>
      </WhyUs__Heading_Contianer>
      <WhyUs__Card_Container>
        <WhyUsCard
          Img={Price}
          Heading="Higher Resale Value"
          Body="By keeping the car protected and clean increases the Resale Value of the car."
        />
        <WhyUsCard
          Img={CarUV}
          Heading="Protection from UV"
          Body="Protection from UV damage. Application of sealant coat on exterior of car’s surface every fortnight."
        />
        <WhyUsCard
          Img={CarPrice}
          Heading="Keeping your car new"
          Body="Keeps the car looking new throughout its life. Elimating the changes of scraches on your car by using Microfiber cloth."
        />
      </WhyUs__Card_Container>
    </WhyUs__Container>
  );
}

export default WhyUS;

const WhyUs__Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 20rem;
  gap: 5rem;
`;
const WhyUs__Heading_Contianer = styled.div`
  font-weight: 600;
  font-size: 4rem;
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
`;
const SubHeading = styled.div`
  font-size: 1.8rem;
  margin-top: 1rem;
`;
const WhyUs__Card_Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
