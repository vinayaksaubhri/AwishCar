import React from "react";
import styled from "styled-components";

function Button3({ BackGroundColor, Color }) {
  return (
    <Container BackGroundColor={BackGroundColor} Color={Color}>
      <div>Book Now</div>
    </Container>
  );
}

export default Button3;
const Container = styled.div`
  background: ${(props) => props.BackGroundColor};
  border-radius: 5px;
  width: 200px;
  height: 50px;

  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* opacity: 0.2; */
  div {
    color: ${(props) => props.Color};
  }
`;
