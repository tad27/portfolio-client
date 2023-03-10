import React from "react";

import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import ScrollDown from "../components/ScrollDown";
import SocialIcons from "../components/SocialIcons";
import Technologies from "../components/Technologies";

function Home() {
  return (
    <>
      <Hero />

      <SocialIcons />
      <ScrollDown className="hidden xl:block" />

      {/* <About /> */}
      <Portfolio />
      <Technologies />
      <Contact />
    </>
  );
}

export default Home;
