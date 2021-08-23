import React from "react";
import styled from "styled-components";

function Button2({ Text, BackgroundColor, Color }) {
  return (
    <Button__Container BackgroundColor={BackgroundColor} Color={Color}>
      {Text}
    </Button__Container>
  );
}

export default Button2;

const Button__Container = styled.div`
  width: 20rem;
  height: 5.5rem;
  border-radius: 1rem;
  background: ${(props) => props.BackgroundColor};
  font-weight: 600;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.Color};
  cursor: pointer;
  &:hover {
    background: ${(props) => props.BackgroundColor === "#01A164" && "#028c57"};
    background: ${(props) => props.BackgroundColor === "#F0F0F0" && "#EBEBEB"};
  }
`;
