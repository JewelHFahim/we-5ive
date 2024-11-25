"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

export default function DetailsProductGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="w-full lg:w-[628px]">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 rounded-[16px]"
      >
        {[...Array(9)].map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="h-[271px] md:h-[450px] lg:h-[519px] relative rounded-[16px]">
              <Image src="/details img.png" alt="" fill />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hidden lg:block">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={16}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper mt-4"
        >
          {[...Array(9)].map((item, idx) => (
            <SwiperSlide key={idx} className="">
              <div className="w-[145px] h-[142px] relative rounded-[16px]">
                <Image src="/thumb img.png" alt="" fill />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
