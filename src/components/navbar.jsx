import React from "react";
import styled from "styled-components";
import Logoimage from "../Image/logoimage.svg";
import Button from "./Button";

function navbar() {
  return (
    <>
      <Navbar__Container>
        <Logo__Container>
          <img src={Logoimage} alt="logo" />
          AwishCar
        </Logo__Container>
        <Navbar__Button__Container>
          <Navbar__Button>Home</Navbar__Button>
          <Navbar__Button>About Us</Navbar__Button>
          <Navbar__Button>Pricing</Navbar__Button>
          <Button />
        </Navbar__Button__Container>
      </Navbar__Container>
    </>
  );
}

export default navbar;

const Navbar__Container = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  background: white;
  z-index: 1;
  min-height: 60px;
  @media (max-width: 980px) {
  }
`;
const Navbar__Button__Container = styled.div`
  display: flex;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 20px;
`;
const Navbar__Button = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 1.8rem;
  @media (max-width: 980px) {
    display: none;
  }
`;
const Logo__Container = styled.div`
  color: #00ab94;
  font-size: 1.8rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  margin-left: 20px;
  img {
    height: 2.5rem;
    padding-bottom: 1rem;
  }
`;
