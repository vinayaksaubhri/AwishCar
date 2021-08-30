import React from "react";
import styled from "styled-components";

function Button3({ BackGroundColor, Text, Green, HandelClick }) {
  return (
    <Container
      BackGroundColor={BackGroundColor}
      Green={Green}
      onClick={HandelClick}
    >
      {Text}
    </Container>
  );
}

export default Button3;
const Container = styled.div`
  background: ${(props) =>
    props.Green ? "#ffffff" : "rgba(1, 161, 100, 0.2)"};
  border-radius: 5px;
  width: 200px;
  height: 50px;

  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #01a164;
  cursor: pointer;
`;
