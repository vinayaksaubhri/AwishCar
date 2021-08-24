import React from "react";
import styled from "styled-components";
import PackageCard from "./PackageCard";
import {
  OneMonthList,
  ThreeMonthList,
  SixMonthList,
} from "../Static/PriceList";
import GreenTick from "../Image/Tick.svg";
import GreyTick from "../Image/GreyTick.svg";

function OurPackage() {
  return (
    <Container>
      <Heading_Contianer>
        Our Package
        <SubHeading>Which wash is best for your vehicle</SubHeading>
      </Heading_Contianer>
      <PackageCard__Container>
        <PackageCard
          Text="1 Months"
          Array={OneMonthList}
          Price="₹ 1449"
          SecondPrice="1500"
          BackGroundColor="#ffffff"
          Color="rgba(0, 0, 0, 0.8)"
          Tick={GreyTick}
          BackGroundColorButton="rgba(1, 161, 100, 0.2);"
          ColorButton="#01A164"
        />
        <PackageCard
          Text="3 Months"
          Array={ThreeMonthList}
          Price="₹ 4347"
          SecondPrice="4500"
          BackGroundColor="#01A164"
          Color="#ffffff"
          Tick={GreenTick}
          BackGroundColorButton="#ffffff"
          ColorButton="#01A164"
        />
        <PackageCard
          Text="6 Months"
          Array={SixMonthList}
          Price="₹ 8694"
          SecondPrice="8700"
          BackGroundColor="#ffffff"
          Color="rgba(0, 0, 0, 0.8)"
          Tick={GreyTick}
          BackGroundColorButton="rgba(1, 161, 100, 0.2);"
          ColorButton="#01A164"
        />
      </PackageCard__Container>
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
`;
const Heading_Contianer = styled.div`
  font-weight: 600;
  font-size: 4rem;
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
`;
const SubHeading = styled.div`
  font-size: 1.8rem;
  margin-top: 1rem;
`;
const PackageCard__Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
