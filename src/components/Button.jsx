import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Button({ path }) {
  return <Button__Container to={path}>Book Now</Button__Container>;
}

export default Button;

const Button__Container = styled(Link)`
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
  text-decoration: none;
`;
