import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VisionCircle from "./VisionCircle";
import Water from "../Image/Drop.svg";
import Profile from "../Image/Profile.svg";
import Eco from "../Image/Eco.svg";
import "../style.css";
import Impact from "../Image/Impact.svg";
import Change from "../Image/Change.svg";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
};

export default function VisionSlider() {
  return (
    <Slider {...settings} style={{ width: "93vw" }}>
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
        Subheading="We commute on a battery operated vehicle resulting in no pollution at all."
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
  );
}
