import React from "react";
import styled from "styled-components";
import Button3 from "./Button3";
import GreenTick from "../Image/Tick.svg";
import GreyTick from "../Image/GreyTick.svg";

function PackageCard({
  Text,
  Array,
  Price,
  SecondPrice,
  Green = false,
  ButtonText,
  HandelClick,
}) {
  return (
    <Container Green={Green}>
      <Month__Heading>{Text}</Month__Heading>
      <Card__List>
        {Array.map((Price) => (
          <List_item>
            <img src={Green ? GreenTick : GreyTick} />
            {Price[0]}
            <List_item_Second>{Price[1]}</List_item_Second>
          </List_item>
        ))}
      </Card__List>
      <Card__Price>
        {Price}
        <Card__Price_Second>({SecondPrice})</Card__Price_Second>
      </Card__Price>
      <Button3 Text={ButtonText} Green={Green} HandelClick={HandelClick} />
    </Container>
  );
}

export default PackageCard;
const Container = styled.div`
  width: 280px;
  height: 430px;
  background: ${(props) => (props.Green ? "#01A164" : "#ffffff")};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: ${(props) => (props.Green ? "#ffffff" : "rgba(0, 0, 0, 0.8)")};
  border: ${(props) => (props.Green ? "none" : "1px solid #8ff1d5")};
  @media (max-width: 768px) {
    align-self: center;
  }
`;
const Month__Heading = styled.div`
  font-size: 2.4rem;
`;
const Card__List = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 0.5rem;
`;
const List_item = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
  display: flex;
  gap: 1rem;
  align-items: center;
`;
const List_item_Second = styled.div`
  font-size: 8px;
`;
const Card__Price = styled.div`
  font-size: 36px;
`;
const Card__Price_Second = styled.span`
  font-size: 14px;
  text-decoration-line: line-through;
`;
