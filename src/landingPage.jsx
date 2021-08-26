/* eslint-disable react-hooks/rules-of-hooks */
import { React } from "react";
import About from "./components/About";
import CardSlider from "./components/CardSlider";
import Footer from "./components/Footer";
import HeroPage from "./components/HeroPage";
import Navbar from "./components/navbar";
import OurPackage from "./components/OurPackage";
import OurVision from "./components/OurVision";
import WhatMakeUSBetter from "./components/WhatMakeUSBetter";
import WhyUS from "./components/WhyUS";

function landingPage() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <About />
      <WhyUS />
      <WhatMakeUSBetter />
      <OurVision />
      <OurPackage />
      <Footer />
    </>
  );
}

export default landingPage;
