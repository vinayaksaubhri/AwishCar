import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Link as scrollLink } from "react-scroll";

function Button2({ Text, BackgroundColor, Color, BookNow, ContactUS }) {
  return (
    <>
      {BookNow && (
        <Button__Container
          BackgroundColor={BackgroundColor}
          Color={Color}
          to="/BookNow"
        >
          {Text}
        </Button__Container>
      )}
      {ContactUS && (
        <Button__Container_contact
          BackgroundColor={BackgroundColor}
          to="contact"
          Color={Color}
          smooth={true}
          duration={500}
          BookNow={BookNow}
        >
          {Text}
        </Button__Container_contact>
      )}
    </>
  );
}

export default Button2;

const Button__Container = styled(Link)`
  width: 20rem;
  height: 5.5rem;
  border-radius: 1rem;
  background: #01a164;
  font-weight: 600;
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: #028c57;
  }
  @media (max-width: 768px) {
    width: 13.8rem;
    height: 4.5rem;
    font-size: 1.3rem;
    border-radius: 4px;
  }
`;

const Button__Container_contact = styled(scrollLink)`
  width: 20rem;
  height: 5.5rem;
  border-radius: 1rem;
  background: #f0f0f0;
  font-weight: 600;
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: #ebebeb;
  }
  @media (max-width: 768px) {
    width: 13.8rem;
    height: 4.5rem;
    font-size: 1.3rem;
    border-radius: 4px;
  }
`;
