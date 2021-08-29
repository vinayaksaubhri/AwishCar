import React from "react";

import PackageCard from "./PackageCard";
import {
  OneMonthList,
  ThreeMonthList,
  SixMonthList,
} from "../Static/PriceList";
import GreenTick from "../Image/Tick.svg";
import GreyTick from "../Image/GreyTick.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

export default function CardSlider() {
  return (
    <Slider
      {...settings}
      style={{
        width: "93vw",
      }}
    >
      <PackageCard
        Text="1 Months"
        Array={OneMonthList}
        Price="₹ 1449"
        SecondPrice="1500"
        BackGroundColor="#ffffff"
        Color="rgba(0, 0, 0, 0.8)"
        Tick={GreyTick}
        BackGroundColorButton="rgba(1, 161, 100, 0.2);"
        ColorButton="#01A164"
      />

      <PackageCard
        Text="3 Months"
        Array={ThreeMonthList}
        Price="₹ 4347"
        SecondPrice="4500"
        BackGroundColor="#01A164"
        Color="#ffffff"
        Tick={GreenTick}
        BackGroundColorButton="#ffffff"
        ColorButton="#01A164"
      />

      <PackageCard
        Text="6 Months"
        Array={SixMonthList}
        Price="₹ 8694"
        SecondPrice="8700"
        BackGroundColor="#ffffff"
        Color="rgba(0, 0, 0, 0.8)"
        Tick={GreyTick}
        BackGroundColorButton="rgba(1, 161, 100, 0.2);"
        ColorButton="#01A164"
      />
    </Slider>
  );
}
