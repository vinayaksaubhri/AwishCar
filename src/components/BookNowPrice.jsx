import React from "react";
import styled from "styled-components";
import PackageCard from "./PackageCard";
import {
  OneMonthList,
  ThreeMonthList,
  SixMonthList,
} from "../Static/PriceList";
import LeftLeaf from "../Image/LeftLeaf.svg";
import RightLeaf from "../Image/RightLeaf.svg";
import MediaQuery from "react-responsive";
import { Price } from "../utils/Price";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BookNowPrice({ Value, getPackage }) {
  const [Green, setGreen] = useState({
    Card1: false,
    Card2: false,
    Card3: false,
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  getPackage(Green);

  const PriceList = Price(Value);
  return (
    <div>
      <MediaQuery minWidth={769}>
        <Card__Svg_container>
          <img src={LeftLeaf} alt="" />
          <PackageCard__Container>
            <PackageCard
              Text="1 Months"
              Array={OneMonthList}
              Price={PriceList[0][0]}
              SecondPrice={PriceList[0][1]}
              ButtonText="Choose This"
              Green={Green.Card1}
              HandelClick={() => {
                if (Green.Card1 === true) {
                  setGreen({
                    Card1: false,
                    Card2: false,
                    Card3: false,
                  });
                } else {
                  setGreen({
                    Card1: true,
                    Card2: false,
                    Card3: false,
                  });
                }
              }}
            />
            <PackageCard
              Text="3 Months"
              Array={ThreeMonthList}
              Price={PriceList[1][0]}
              SecondPrice={PriceList[1][1]}
              ButtonText="Choose This"
              Green={Green.Card2}
              HandelClick={() => {
                if (Green.Card2 === true) {
                  setGreen({
                    Card1: false,
                    Card2: false,
                    Card3: false,
                  });
                } else {
                  setGreen({
                    Card1: false,
                    Card2: true,
                    Card3: false,
                  });
                }
              }}
            />
            <PackageCard
              Text="6 Months"
              Array={SixMonthList}
              Price={PriceList[2][0]}
              SecondPrice={PriceList[2][1]}
              ButtonText="Choose This"
              Green={Green.Card3}
              HandelClick={() => {
                if (Green.Card3 === true) {
                  setGreen({
                    Card1: false,
                    Card2: false,
                    Card3: false,
                  });
                } else {
                  setGreen({
                    Card1: false,
                    Card2: false,
                    Card3: true,
                  });
                }
              }}
            />
          </PackageCard__Container>
          <img src={RightLeaf} alt="" />
        </Card__Svg_container>
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <Slider
          {...settings}
          style={{
            width: "93vw",
            marginTop: "4rem",
          }}
        >
          <PackageCard
            Text="1 Months"
            Array={OneMonthList}
            Price={PriceList[0][0]}
            SecondPrice={PriceList[0][1]}
            ButtonText="Choose This"
            Green={Green.Card1}
            HandelClick={() => {
              if (Green.Card1 === true) {
                setGreen({
                  Card1: false,
                  Card2: false,
                  Card3: false,
                });
              } else {
                setGreen({
                  Card1: true,
                  Card2: false,
                  Card3: false,
                });
              }
            }}
          />
          <PackageCard
            Text="3 Months"
            Array={ThreeMonthList}
            Price={PriceList[1][0]}
            SecondPrice={PriceList[1][1]}
            ButtonText="Choose This"
            Green={Green.Card2}
            HandelClick={() => {
              if (Green.Card2 === true) {
                setGreen({
                  Card1: false,
                  Card2: false,
                  Card3: false,
                });
              } else {
                setGreen({
                  Card1: false,
                  Card2: true,
                  Card3: false,
                });
              }
            }}
          />
          <PackageCard
            Text="6 Months"
            Array={SixMonthList}
            Price={PriceList[2][0]}
            SecondPrice={PriceList[2][1]}
            ButtonText="Choose This"
            Green={Green.Card3}
            HandelClick={() => {
              if (Green.Card3 === true) {
                setGreen({
                  Card1: false,
                  Card2: false,
                  Card3: false,
                });
              } else {
                setGreen({
                  Card1: false,
                  Card2: false,
                  Card3: true,
                });
              }
            }}
          />
        </Slider>
      </MediaQuery>
    </div>
  );
}

export default BookNowPrice;
const PackageCard__Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5rem;
  }
`;
const Card__Svg_container = styled.div`
  margin: 8rem 0rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  @media (max-width: 768px) {
    img {
      display: none;
    }
  }
`;
