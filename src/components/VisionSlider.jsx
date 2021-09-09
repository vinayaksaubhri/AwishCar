import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VisionCircle from "./VisionCircle";
import Water from "../Image/Drop.svg";
import Profile from "../Image/Profile.svg";
import Eco from "../Image/Eco.svg";
import "../style.css";

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
    </Slider>
  );
}
