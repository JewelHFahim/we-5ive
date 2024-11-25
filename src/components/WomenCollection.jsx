"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

const WomenCollection = () => {
  return (
    <div className="mt-[31px] md:mt-[91px]">
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={true}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="custom-pagination"
      >
        {[...Array(3)].map((product, idx) => (
          <SwiperSlide key={idx} className="">
            <div className="w-full md:h-[614px] pb-[40px] flex flex-col md:flex-row  md:items-center gap-2 md:gap-10">
              {/* Image Container */}
              <div className=" md:w-[621px] h-[356px] md:h-full relative">
                <Image src="/women.png" alt="" fill />
              </div>

              {/*Shop Now Button and Title*/}
              <div>
                <h1 className="uppercase text-[23px] md:text-[32px] lg:text-[48px] font-semibold">
                  Women Collections
                </h1>

                <div className="mt-4 md:mt-0 flex items-center">
                  <button className="bg-[#8F71E1] text-white w-[149px] h-[48px] rounded-full">
                    Shop Now
                  </button>
                  <button className="bg-[#8F71E1] w-12 h-12 rounded-full text-white flex justify-center items-center transition-all duration-150 ease-in-out hover:rotate-[45deg]">
                    <BsArrowUpRight />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WomenCollection;
