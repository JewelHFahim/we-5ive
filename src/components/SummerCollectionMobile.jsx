"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const SummerCollectionMobile = () => {
  const products = [
    {
      id: 1,
      title: "Jama",
      price: "2,300",
      img: "/jama.png",
    },
    {
      id: 2,
      title: "Half Sleeve Shirt",
      price: "2,300",
      img: "/shirt.png",
    },
    {
      id: 3,
      title: "Women waering shari",
      price: "2,300",
      img: "/share.png",
    },
    {
      id: 4,
      title: "Check shirt",
      price: "2,300",
      img: "/check shirt.png",
    },
    {
      id: 5,
      title: "Jama",
      price: "2,300",
      img: "/jama.png",
    },
    {
      id: 6,
      title: "Half Sleeve Shirt",
      price: "2,300",
      img: "/shirt.png",
    },
    {
      id: 7,
      title: "Women waering shari",
      price: "2,300",
      img: "/share.png",
    },
    {
      id: 8,
      title: "Check shirt",
      price: "2,300",
      img: "/check shirt.png",
    },
  ];

  const btnStyle =
    "w-8 h-8 rounded-full border border-primary text-primary flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white";

  return (
    <div className="block lg:hidden mt-10 md:mt-[47px] w-full px-4 md:px-0">
      <div className="mb-6 w-full flex justify-between items-center">
        <div className="">
          <p className="text-primary md:text-[19px] font-normal leading-none">
            SUMMER
          </p>
          <h2 className="text-[23px] md:text-[28px] font-bold text-[#1D1D1D] mt-1 leading-none">
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

      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        centeredSlides={false}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
        pagination={false}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className=""
      >
        {products.map((product, idx) => (
          <SwiperSlide key={idx}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-6 flex justify-center ">
        <button className="w-[120px] h-10 rounded-[8px] bg-primary hover:bg-opacity-90 text-white font-semibold">
          See more
        </button>
      </div>
    </div>
  );
};

export default SummerCollectionMobile;
