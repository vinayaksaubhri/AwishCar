import React from "react";
import styled from "styled-components";
import WhyUsCard from "./WhyUsCard";
import Price from "../Image/Price.svg";
import CarPrice from "../Image/CarPrice.svg";
import CarUV from "../Image/CarUV.svg";
import CarAppearance from "../Image/CarAppearance.svg";
import CarSolance from "../Image/CarSolance.svg";
import MediaQuery from "react-responsive";
import WhyUSSlider from "./WhyUSSlider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style.css";

function WhyUS() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <WhyUs__Container>
      <WhyUs__Heading_Contianer>
        Why Us
        <SubHeading>Benefits of choosing our services.</SubHeading>
      </WhyUs__Heading_Contianer>
      <MediaQuery minWidth={769}>
        <Slider {...settings} style={{ width: "100vw" }}>
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
            Body="Eliminating the chances of scratching on your car by using microfibre towels and spraying water on the car first which acts as a lubricant."
          />
          <WhyUsCard
            Img={CarAppearance}
            Heading="Appearance"
            Body="The way a man treats his car is how he treats himself...also driving a nicely detailed car always makes you feel good."
          />
          <WhyUsCard
            Img={CarSolance}
            Heading="Solance"
            Body="With Awishcars daily car cleaning services, you are assured that your car would look and feel great inside-out and would give you a feeling of joy everytime you lay your eyes on it. "
          />
        </Slider>
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <WhyUSSlider />
      </MediaQuery>
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
  @media (max-width: 768px) {
    padding-top: 10rem;
  }
`;
const WhyUs__Heading_Contianer = styled.div`
  font-weight: 600;
  font-size: 4rem;
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;
const SubHeading = styled.div`
  font-size: 1.8rem;
  margin-top: 1rem;
  font-weight: normal;
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;
const WhyUs__Card_Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
    align-self: center;
    gap: 5rem;
  }
`;
