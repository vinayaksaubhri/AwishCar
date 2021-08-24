import React from "react";
import styled from "styled-components";

function Button() {
  return <Button__Container>Book Now</Button__Container>;
}

export default Button;

const Button__Container = styled.div`
  width: 10.2rem;
  height: 3.8rem;
  background: #c8ece0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4e9d82;
  font-size: 1.2rem;
  border-radius: 0.6rem;
  font-style: normal;
  font-weight: 600;
`;
