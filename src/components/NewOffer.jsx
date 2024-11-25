import { pacifico } from "@/utils/fonts";
import ShopNowBtn from "@/utils/ShopNowBtn";
import Image from "next/image";
import React from "react";

const NewOffer = () => {

  return (
    <div className="mt-[50px] pt-6 md:pt-0 px-4 md:px-12 md:mt-12 bg-[#EEECFB] w-full md:h-[450px] flex flex-col md:flex-row items-center justify-around gap-[46px] overflow-hidden text-center md:text-start">

      {/* Section Text Portion */}
      <div className="flex flex-col items-center md:items-start">
        <div>
          <p className={`text-[24px] text-[#6F42C1] ${pacifico.className}`}>
            Big Deal
          </p>
          <p className="text-[28px] md:text-[32px] lg:text-[48px] font-semibold">
            <span className="text-[#6F42C1]"> 30% </span> Off for New Customers
          </p>
        </div>

        <ShopNowBtn />
      </div>

      {/* Section Image Portion */}
      <div className="w-full h-[369px] md:w-[400px] md:h-[440px] relative">
        <Image src="/new offer.png" alt="" fill />
      </div>

    </div>
  );
};

export default NewOffer;
