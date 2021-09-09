import React from "react";
import styled from "styled-components";

function VisionCircle({ Heading, Subheading, Svg }) {
  return (
    <Circle__Container>
      <Circle>
        <img src={Svg} alt="svg" />
      </Circle>
      <Heading__Container>
        {Heading}
        <SubHeading>{Subheading}</SubHeading>
      </Heading__Container>
    </Circle__Container>
  );
}

export default VisionCircle;

const Circle__Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  align-items: center;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 140px;
  height: 140px;
  background: rgba(1, 161, 100, 0.2);
  display: flex;
  justify-content: center;
`;
const Heading__Container = styled.div`
  font-weight: 500;
  font-size: 2.4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
`;
const SubHeading = styled.div`
  margin-top: 1rem;
  font-weight: 300;
  font-size: 1.2rem;
  text-align: center;
  width: 80%;
  align-self: center;
`;
