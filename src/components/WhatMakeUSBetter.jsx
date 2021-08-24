import React from "react";
import styled from "styled-components";
import Better_Card from "./Better_Card";
import { AwishCarFeature, OrdinaryCarCleaning } from "../Static/FeatureList";
import Tick from "../Image/Tick.svg";
import Cross from "../Image/Cross.svg";

function WhatMakeUSBetter() {
  return (
    <Container>
      <Heading_Contianer>
        What make us Better
        <SubHeading>
          What makes us better than other cleaning services.
        </SubHeading>
      </Heading_Contianer>
      <Card__Container>
        <Better_Card
          BackgroundColor="#01A164"
          Color="#FFFFFF"
          Text="AwishCar Cleaning"
          Array={AwishCarFeature}
          Svg={Tick}
        />
        <Better_Card
          BackgroundColor="#ffffff"
          Color="#000000"
          Text="Ordinary Cleaning"
          Array={OrdinaryCarCleaning}
          Svg={Cross}
        />
      </Card__Container>
    </Container>
  );
}

export default WhatMakeUSBetter;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 20rem;
  gap: 5rem;
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
const Card__Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
