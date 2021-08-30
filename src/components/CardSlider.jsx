import React from "react";

import PackageCard from "./PackageCard";
import {
  OneMonthList,
  ThreeMonthList,
  SixMonthList,
} from "../Static/PriceList";
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

export default function CardSlider({ Text }) {
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
        ButtonText={Text}
      />

      <PackageCard
        Text="3 Months"
        Array={ThreeMonthList}
        Price="₹ 4347"
        SecondPrice="4500"
        Green
        ButtonText={Text}
      />

      <PackageCard
        Text="6 Months"
        Array={SixMonthList}
        Price="₹ 8694"
        SecondPrice="8700"
        ButtonText={Text}
      />
    </Slider>
  );
}
