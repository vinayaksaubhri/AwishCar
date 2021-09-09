import React from "react";
import styled from "styled-components";
import PackageCard from "./PackageCard";
import {
  OneMonthList,
  ThreeMonthList,
  SixMonthList,
} from "../Static/PriceList";
import LeftLeaf from "../Image/LeftLeaf.svg";
import RightLeaf from "../Image/RightLeaf.svg";
import MediaQuery from "react-responsive";
import CardSlider from "./CardSlider";

function OurPackage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container id="pricing">
      <Heading_Contianer>
        Our Package
        <SubHeading>Which wash is best for your vehicle</SubHeading>
      </Heading_Contianer>
      <MediaQuery minWidth={769}>
        <Card__Svg_container>
          <img src={LeftLeaf} alt="" />
          <PackageCard__Container>
            <PackageCard
              Text="1 Months"
              Array={OneMonthList}
              Price="₹ 1449"
              SecondPrice="1500"
              BackGroundColor="#ffffff"
              ButtonText="Book Now"
              Landing
            />
            <PackageCard
              Text="3 Months"
              Array={ThreeMonthList}
              Price="₹ 4347"
              SecondPrice="4500"
              ButtonText="Book Now"
              Green
              Landing
            />
            <PackageCard
              Text="6 Months"
              Array={SixMonthList}
              Price="₹ 8694"
              SecondPrice="8700"
              ButtonText="Book Now"
              Landing
            />
          </PackageCard__Container>
          <img src={RightLeaf} alt="" />
        </Card__Svg_container>
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <CardSlider Text="Book Now" />
      </MediaQuery>
      <Terms>*Prices may vary according to your Car model</Terms>
    </Container>
  );
}

export default OurPackage;
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 20rem;
  gap: 5rem;
  margin-bottom: 10.6rem;
  @media (max-width: 768px) {
    padding-top: 10rem;
  }
`;
const Heading_Contianer = styled.div`
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
    font-size: 1.4rem;
  }
`;
const PackageCard__Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5rem;
  }
`;
const Card__Svg_container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  @media (max-width: 768px) {
    img {
      display: none;
    }
  }
`;
const Terms = styled.div`
  text-align: center;
  font-size: 12px;
  justify-self: flex-end;
`;
