import React from "react";
import styled from "styled-components";
import VisionCircle from "./VisionCircle";
import Water from "../Image/Drop.svg";
import Profile from "../Image/Profile.svg";
import Eco from "../Image/Eco.svg";

function OurVision() {
  return (
    <Container>
      <Heading__Container>
        Our Vision
        <SubHeading>
          What makes us better than other cleaning services.
        </SubHeading>
      </Heading__Container>
      <Circle__Container>
        <VisionCircle
          Heading="Save Water"
          Subheading="We use special technique to minimize the use of water."
          Svg={Water}
        />
        <VisionCircle
          Heading="Employment Generation"
          Subheading="Generating stable employment for people."
          Svg={Profile}
        />
        <VisionCircle
          Heading="Eco-Friendly"
          Subheading="We use Eco-Friendly material to clean."
          Svg={Eco}
        />
      </Circle__Container>
    </Container>
  );
}

export default OurVision;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 20rem;
  gap: 5rem;
`;
const Heading__Container = styled.div`
  font-weight: 600;
  font-size: 4rem;
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
`;
const SubHeading = styled.div`
  font-size: 1.8rem;
  margin-top: 1rem;
`;
const Circle__Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
