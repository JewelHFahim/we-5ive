"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import DiscountProductContainer from "./DiscountProductCard";

const SummerCollections = () => {
  const btnStyle =
    "w-8 h-8 rounded-full border border-primary text-primary flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white";

  return (
    <div className="hidden lg:block mt-[40px] w-full">
      {/* Big Deals and Slider navigation button */}
      <div className="mb-6 w-full flex justify-between items-center">
        {/* Section Infos */}
        <div className="">
          <p className="text-primary text-[19px] font-normal leading-none">
            Summer
          </p>
          <h2 className="text-[28px] font-bold text-[#1D1D1D] mt-1 leading-none">
            Big Deal
          </h2>
        </div>

        {/* Custom navigation wrapper */}
        <div className="flex items-center justify-between gap-[10px] z-10">
          <div className={`swiper-button-prev-custom ${btnStyle}`}>
            <BsArrowLeft />
          </div>
          <div className={`swiper-button-next-custom ${btnStyle}`}>
            <BsArrowRight />
          </div>
        </div>
      </div>

      {/*Multiple Product Slider  */}
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        loop
        pagination={false}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className=""
      >
        {[...Array(3)].map((product, idx) => (
          <SwiperSlide key={idx}>
            <DiscountProductContainer />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* See More Button */}
      <div className="mt-6 flex justify-center ">
        <button className="w-[120px] h-10 rounded-[8px] bg-primary hover:bg-opacity-90 text-white font-semibold">
          See more
        </button>
      </div>
    </div>
  );
};

export default SummerCollections;
