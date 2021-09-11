import React from "react";
import styled from "styled-components";
import VisionCircle from "./VisionCircle";
import Water from "../Image/Drop.svg";
import Profile from "../Image/Profile.svg";
import Eco from "../Image/Eco.svg";
import MediaQuery from "react-responsive";
import VisionSlider from "./VisionSlider";
import Impact from "../Image/Impact.svg";
import Change from "../Image/Change.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style.css";

function OurVision() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <Container>
      <Heading__Container>
        Our Vision
        <SubHeading>
          What makes us better than other cleaning services.
        </SubHeading>
      </Heading__Container>
      <MediaQuery minWidth={769}>
        <Slider {...settings} style={{ width: "100vw" }}>
          <VisionCircle
            Heading="Save Water"
            Subheading="We use special technique to minimize the use of water."
            Svg={Water}
          />
          <VisionCircle
            Heading="Employment Generation"
            Subheading="Generating stable employment for people."
            Svg={Profile}
          />
          <VisionCircle
            Heading="Eco-Friendly"
            Subheading={`We commute on a battery operated vehicle resulting in no pollution at all.`}
            Svg={Eco}
          />
          <VisionCircle
            Heading="Impact"
            Subheading="We are working to make an impact on the team, the community and want our employees to outwork and outperform people around them so everyone feels the need to do more."
            Svg={Impact}
          />
          <VisionCircle
            Heading="Change"
            Subheading={`We want to change the perception people have for daily car cleaning...it's not just about cleaning and its about the overall maintenance of the car.`}
            Svg={Change}
          />
        </Slider>
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <VisionSlider />
      </MediaQuery>
    </Container>
  );
}

export default OurVision;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 20rem;
  gap: 5rem;
  @media (max-width: 768px) {
    padding-top: 10rem;
  }
`;
const Heading__Container = styled.div`
  font-weight: 600;
  font-size: 4rem;
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;
const SubHeading = styled.div`
  font-size: 1.8rem;
  margin-top: 1rem;
  font-weight: normal;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;
const Circle__Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-left: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5rem;
  }
`;
