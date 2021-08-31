import React from "react";
import styled from "styled-components";
import Form from "./Form";
import Carsvg from "../Image/SVG.svg";

function Footer() {
  return (
    <Container id="contact">
      <Form />
      <Text> ©2021 AwishCar </Text>
      <img src={Carsvg} alt="" />
    </Container>
  );
}

export default Footer;
const Container = styled.div`
  width: 100%;
  height: 487px;
  background: #01a164;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    img {
      display: none;
    }
  }
`;
const Text = styled.div`
  font-weight: bold;
  font-size: 24px;
  color: #ffffff;
  align-self: flex-end;
  padding-bottom: 2rem;
  @media (max-width: 768px) {
    align-self: center;
  }
`;
