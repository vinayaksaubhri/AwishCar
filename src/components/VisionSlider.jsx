import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VisionCircle from "./VisionCircle";
import Water from "../Image/Drop.svg";
import Profile from "../Image/Profile.svg";
import Eco from "../Image/Eco.svg";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: "center",
  centerMode: true,
  centerPadding: "1rem",
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
};

export default function VisionSlider() {
  return (
    <Slider {...settings} style={{ width: "90vw" }}>
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
        Subheading="We use Eco-Friendly material to clean."
        Svg={Eco}
      />
    </Slider>
  );
}
