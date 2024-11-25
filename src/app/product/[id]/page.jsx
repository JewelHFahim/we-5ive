import DetailsProductGallery from "@/components/DetailsProductGallery";
import QuantityCounter from "@/components/QuantityCounter";
import RelatedProduct from "@/components/RelatedProducts";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { MdOutlineThumbUpOffAlt } from "react-icons/md";

const ProductDetails = () => {
  return (
    <div className="px-4 md:px-10 xxl:px-0 relative">
      {/* Breadcum */}
      <section className="mt-8">
        <p className="text-base font-semibold">
          Feature Product / <span className="text-primary">New Arriv all</span>
        </p>
      </section>

      {/* Products and Rating Section */}
      <section className="mt-4 w-full flex flex-col lg:flex-row gap-[42px] ">
        {/* Details Product Images Slider */}
        <div className="lg::w-1/2">
          <DetailsProductGallery />
        </div>

        <div className="lg:w-1/2">
          {/* Title & Ratings & Price */}
          <div>
            {/* Section Infos */}
            <div>
              <button className="w-[193px] h-[40px] bg-[#2F1C59] text-white rounded-[16px] text-base font-semibold">
                New Arrival
              </button>

              <h1 className="text-[19px] md:text-[33px] font-semibold mt-4 md:mt-6">
                White Hoodie
              </h1>
            </div>

            {/* Star Ratings */}
            <div className="flex items-center gap-4 mt-4 md:mt-6">
              <div className="flex items-center gap-1">
                <div className="flex gap-1 items-center text-[20px] md:text-[24px] text-[#FFCF11]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar className="text-[#DFDFDF]" />
                </div>
                <p className="text-base font-semibold">(16)</p>
              </div>
              <p className="text-base font-semibold text-primary">
                121 reviews
              </p>
            </div>
            {/* Product Price */}
            <h1 className="text-[23px] md:text-[28px] font-bold mt-4 md:mt-6">
              BDT 2500
            </h1>
          </div>

          <hr className="border-dashed border my-4 md:my-8 border-[#CECECE]" />

          {/* Size and Color Show case */}
          <div className="flex items-center gap-[69px]">
            {/* Size Chart */}
            <div className="flex flex-col gap-4 w-[282px]">
              <p className="font-semibold text-base md:text-[19px]">
                Available Size
              </p>
              <div className="flex items-center gap-2">
                <div className="border rounded-md border-primary w-10 h-10 flex justify-center items-center">
                  S
                </div>
                <div className="w-10 h-10 flex justify-center items-center">
                  M
                </div>
                <div className="w-10 h-10 flex justify-center items-center">
                  L
                </div>
                <div className="w-10 h-10 flex justify-center items-center">
                  XL
                </div>
              </div>
            </div>

            {/* Color Chart */}
            <div className="hidden md:flex items-center w-[282px]">
              <div className="flex flex-col gap-4">
                <p className="font-semibold text-[19px]">Available Size</p>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <div className="w-6 h-6 rounded-full border border-primary flex justify-center items-center">
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    </div>
                    <p className="text-xs">Off White</p>
                  </div>

                  <div className="flex items-center gap-1">
                    <div className="w-6 h-6 rounded-full flex justify-center items-center">
                      <div className="w-4 h-4 bg-black rounded-full"></div>
                    </div>
                    <p className="text-xs">Black</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-dashed border my-4 md:my-8 border-[#CECECE]" />

          {/* Quantity Selection */}
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-base md:text-[19px]">Quantity</p>

            <QuantityCounter />
          </div>

          {/* Buy and Cart Button */}
          <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
            <button className="w-full h-10 bg-primary text-base text-white rounded-[8px] font-semibold">
              Buy Now
            </button>
            <button className="w-full h-10 border border-primary text-base text-primary rounded-[8px] font-semibold">
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="mt-12">
        <div className="text-base  md:text-[19px] flex justify-center md:justify-start font-semibold text-[#747474] gap-4 md:gap-[72px]">
          <p>Details</p>
          <p className="text-primary">Review & Rating</p>
          <p>Discussion</p>
        </div>

        <div className="flex flex-col-reverse md:flex-row mt-10">
          <div className="mt-6 md:mt-0 md:w-2/3">
            <select className="w-[121px] h-10 outline-primary rounded-[8px] text-base font-semibold text-[#1D1D1D] px-2">
              <option value="">Newest</option>
              <option value="">Oldest</option>
            </select>

            <div className="mt-6">
              <div className="flex items-center gap-2">
                <Image src="/reveiw user1.png" alt="" width={40} height={40} />
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <p className="font-semibold">Cameron Williamvvvson</p>
                    <p className="text-[13px] text-[#656565]">3 days</p>
                  </div>

                  <div className="flex gap-1 items-center text-[20px] text-[#FFCF11]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar className="text-[#DFDFDF]" />
                  </div>
                </div>
              </div>

              <div className="mt-[15px]">
                <p className="text-base font-bold">Very Nice!!</p>
                <p className="mt-[15px] flex items-center gap-1 text-[13px]">
                  <MdOutlineThumbUpOffAlt />
                  10
                </p>
              </div>
            </div>

            <hr className="border border-[#CECECE] border-dashed text-[#CECECE] my-4" />

            <div className="mt-6">
              <div className="flex items-center gap-2">
                <Image src="/reveiw user1.png" alt="" width={40} height={40} />
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <p className="font-semibold">Cameron Williamvvvson</p>
                    <p className="text-[13px] text-[#656565]">3 days</p>
                  </div>

                  <div className="flex gap-1 items-center text-[20px] text-[#FFCF11]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar className="text-[#DFDFDF]" />
                  </div>
                </div>
              </div>

              <div className="mt-[15px]">
                <p className="text-base font-bold">Very Nice!!</p>
                <p className="mt-[15px] flex items-center gap-1 text-[13px]">
                  <MdOutlineThumbUpOffAlt />
                  10
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/3">
            <p className="text-base font-semibold">
              Product Review <span className="text-primary">121 reviews</span>
            </p>

            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-1 items-center text-[33px] text-[#FFCF11]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar className="text-[#DFDFDF]" />
              </div>
              <p className="text-[19px] font-semibold">(4.0)</p>
            </div>

            <hr className="border border-dashed my-4" />

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <p>5</p>
                <div className="w-full h-[10px] bg-[#DFDFDF] rounded-[5px]">
                  <div className="w-[50%] bg-[#FFCF11] h-full rounded-[5px]"></div>
                </div>
                <p className="w-5">50</p>
              </div>

              <div className="flex items-center gap-2">
                <p>4</p>
                <div className="w-full h-[10px] bg-[#DFDFDF] rounded-[5px]">
                  <div className="w-[10%] bg-[#FFCF11] h-full rounded-[5px]"></div>
                </div>
                <p className="w-5">5</p>
              </div>

              <div className="flex items-center gap-2">
                <p>3</p>
                <div className="w-full h-[10px] bg-[#DFDFDF] rounded-[5px]">
                  <div className="w-[30%] bg-[#FFCF11] h-full rounded-[5px]"></div>
                </div>
                <p className="w-5">10</p>
              </div>

              <div className="flex items-center gap-2">
                <p>2</p>
                <div className="w-full h-[10px] bg-[#DFDFDF] rounded-[5px]">
                  <div className="w-[45%] bg-[#FFCF11] h-full rounded-[5px]"></div>
                </div>
                <p className="w-5">30</p>
              </div>

              <div className="flex items-center gap-2">
                <p>1</p>
                <div className="w-full h-[10px] bg-[#DFDFDF] rounded-[5px]">
                  <div className="w-[5%] bg-[#FFCF11] h-full rounded-[5px]"></div>
                </div>
                <p className="w-5">2</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Product List and Slider */}
      <RelatedProduct />

      {/*Fixed Cart Section middle of the device, only for large device */}
      <div className="hidden fixed right-0 top-1/2 bottom-1/2 -translate-y-1/2 w-[100px] h-[100px] z-[999] bg-[#581FC1] rounded-s-[16px] text-white text-[13px] font-semibold lg:flex flex-col justify-center items-center">
        <Image src="/shopping-02.png" alt="" width={32} height={32} />
        <p>Your bag</p>
        <p>0</p>
      </div>
    </div>
  );
};

export default ProductDetails;
