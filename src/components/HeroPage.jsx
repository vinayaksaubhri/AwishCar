import { React } from "react";
import styled from "styled-components";
import Carsvg from "../Image/SVG.svg";
import Button2 from "./Button2";
import Background from "../Image/Background.svg";
function HeroPage() {
  return (
    <HeroPage__Container id="main" img={Background}>
      <HeroPage__Text_Container>
        <HeroPage__Text_Heading>
          Eco-friendly,
          <br />
          on-demand car valeting.
          <br />
          Delivered to you.
        </HeroPage__Text_Heading>
        <HeroPage__Text_Body>
          We deliver the deepest clean which is even good for environment.
          <br />
          Save more than 150 liters of water.
        </HeroPage__Text_Body>
        <Button_Container>
          <Button2 Text="Book Now" BookNow />
          <Button2 Text="Contact Us" ContactUS />
        </Button_Container>
      </HeroPage__Text_Container>
      <img src={Carsvg} alt="" />
    </HeroPage__Container>
  );
}

export default HeroPage;
const HeroPage__Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    height: 66rem;
    width: 54rem;
    margin-right: 4rem;
  }
  @media (max-width: 768px) {
    img {
      display: none;
    }
    justify-content: center;
    background-image: url(${(props) => props.img});
    background-repeat: repeat-y;
    background-position: center;
    height: 100vh;
  }
`;
const HeroPage__Text_Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  margin-left: 9rem;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
const HeroPage__Text_Heading = styled.div`
  font-weight: 600;
  font-size: 3.6rem;
  @media (max-width: 768px) {
    font-size: 2.6rem;
    text-align: center;
  }
`;
const HeroPage__Text_Body = styled.div`
  font-weight: normal;
  font-size: 1.8rem;
  color: rgba(0, 0, 0, 0.8);
  @media (max-width: 768px) {
    font-size: 1.2rem;
    text-align: center;
  }
`;
const Button_Container = styled.div`
  display: flex;
  gap: 1.8rem;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
