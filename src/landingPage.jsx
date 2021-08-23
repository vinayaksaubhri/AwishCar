import React from "react";
import About from "./components/About";
import HeroPage from "./components/HeroPage";
import Navbar from "./components/navbar";

function landingPage() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <About />
    </>
  );
}

export default landingPage;
