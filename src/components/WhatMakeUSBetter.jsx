import React from "react";
import styled from "styled-components";
import Better_Card from "./Better_Card";
import { AwishCarFeature, OrdinaryCarCleaning } from "../Static/FeatureList";
import Tick from "../Image/Tick.svg";
import Cross from "../Image/Cross.svg";
import LeftPlant from "../Image/LeftPlant.svg";
import RightPlant from "../Image/RightPlant.svg";

function WhatMakeUSBetter() {
  return (
    <Container>
      <Heading_Contianer>
        What make us Better
        <SubHeading>
          What makes us better than other cleaning services.
        </SubHeading>
      </Heading_Contianer>
      <Card__Svg_container>
        <img src={LeftPlant} alt="svg" id="Left" />
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
        <img src={RightPlant} alt="svg" id="Right" />
      </Card__Svg_container>
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
const Card__Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5rem;
  }
`;
const Card__Svg_container = styled.div`
  display: flex;
  align-content: center;
  align-items: flex-end;
  justify-content: center;
  #Left {
    z-index: -1;
    position: relative;
    left: 60px;
  }
  #Right {
    z-index: -1;
    position: relative;
    right: 80px;
  }
  @media (max-width: 768px) {
    & > img {
      display: none;
    }
  }
`;
