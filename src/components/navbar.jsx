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
          <Navbar__Button>
            <Button />
          </Navbar__Button>
        </Navbar__Button__Container>
      </Navbar__Container>
    </>
  );
}

export default navbar;

const Navbar__Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  padding: 3rem 9rem;
  background: white;
`;
const Navbar__Button__Container = styled.div`
  display: flex;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Navbar__Button = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 1.8rem;
`;
const Logo__Container = styled.div`
  color: #00ab94;
  font-size: 1.8rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  img {
    height: 2.5rem;
    padding-bottom: 1rem;
  }
`;
