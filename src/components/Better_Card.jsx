import React from "react";
import styled from "styled-components";

function Better_Card({ BackgroundColor, Color, Text, Array, Svg }) {
  return (
    <Container BackgroundColor={BackgroundColor}>
      <Card__Heading Color={Color}>{Text}</Card__Heading>
      <Card__List>
        {Array.map((feature) => (
          <List_item>
            <img src={Svg} />
            {feature}
          </List_item>
        ))}
      </Card__List>
    </Container>
  );
}

export default Better_Card;

const Container = styled.div`
  width: 40rem;
  height: 50rem;
  background: ${(props) => props.BackgroundColor};
  box-shadow: 0px 6.25952px 4.17302px rgba(243, 243, 243, 0.65),
    0px 3.12976px 8.34603px rgba(243, 243, 243, 0.65);
  border-radius: 0.4rem;
`;
const Card__Heading = styled.div`
  font-weight: 500;
  font-size: 2.5rem;
  color: ${(props) => props.Color};
  padding-top: 4.5rem;
  text-align: center;
`;
const Card__List = styled.div`
  display: flex;
  flex-direction: column;

  padding: 50px;
`;
const List_item = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
  display: flex;
  gap: 1rem;
`;
