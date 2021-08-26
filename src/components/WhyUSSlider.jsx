import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Price from "../Image/Price.svg";
import CarPrice from "../Image/CarPrice.svg";
import CarUV from "../Image/CarUV.svg";
import WhyUsCard from "./WhyUsCard";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "7rem",
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
};

export default function WhyUSSlider() {
  return (
    <Slider
      {...settings}
      style={{
        width: "90vw",
      }}
    >
      <div>
        <WhyUsCard
          Img={Price}
          Heading="Higher Resale Value"
          Body="By keeping the car protected and clean increases the Resale Value of the car."
        />
      </div>
      <div>
        <WhyUsCard
          Img={CarUV}
          Heading="Protection from UV"
          Body="Protection from UV damage. Application of sealant coat on exterior of car’s surface every fortnight."
        />
      </div>
      <div>
        <WhyUsCard
          Img={CarPrice}
          Heading="Keeping your car new"
          Body="Keeps the car looking new throughout its life. Elimating the changes of scraches on your car by using Microfiber cloth."
        />
      </div>
    </Slider>
  );
}
