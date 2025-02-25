import React from "react";
import Slider from "../../components/shared/Slider";
import "./Home.css";
import AboutUsSection from "./components/AboutUsSection";
import ServicesSection from "./components/ServicesSection";
import NewsSection from "./components/NewsSection";

function Home() {
  return (
    <>
      <Slider />
      <div className="pt-[40px] px-[15px] md:px-[80px]">
        <AboutUsSection></AboutUsSection>
        <ServicesSection></ServicesSection>
        <NewsSection></NewsSection>
        <p className="text-sm-regular text-right text-[#161616] py-[16px] mt-[40px]">
            Last Modified Date: 04/12/2020 - 4:13 PM Saudi Arabia Time
          </p>
      </div>
    </>
  );
}

export default Home;
