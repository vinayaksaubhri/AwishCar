import About from "../components/About";
import Footer from "../components/Footer";
import HeroPage from "../components/HeroPage";
import Navbar from "../components/navbar";
import OurPackage from "../components/OurPackage";
import OurVision from "../components/OurVision";
import WhatMakeUSBetter from "../components/WhatMakeUSBetter";
import WhyUS from "../components/WhyUS";
import ScrollToOnMount from "../components/ScrollToOnMount";

function LandingPage() {
  return (
    <>
      <ScrollToOnMount />
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

export default LandingPage;
