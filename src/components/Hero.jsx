import ShopNowBtn from "@/utils/ShopNowBtn";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div
      className="w-full h-[350px] md:h-[500px] relative bg-no-repeat bg-cover bg-center md:bg-top flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url(/woman-model.avif)",
        backgroundPosition: "center 13%",
      }}
    >
      <h1 className="text-[23px] md:text-[32px] lg:text-[48px] font-bold text-white m-0 p-0 leading-none">
        Elevate Your Everyday Style
      </h1>
      <p className="text-[13px] md:text-[19px] text-[#F5F3FF] leading-none mt-2">
        Discover the Latest Trends in Sustainable Fashion
      </p>

      <ShopNowBtn />
    </div>
  );
};

export default Hero;
