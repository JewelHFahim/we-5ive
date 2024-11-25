import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-[145px] lg:mt-[108px] bg-[#1D1D1D]">

      <div className="h-full px-4 md:px-10 lg:px-[80px] pt-6 md:pt-[55px] pb-10 lg:pb-[66px]">
        
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="">
            <div className="w-[96px] h-6 md:w-[130px] md:h-10 lg:w-[197px] lg:h-[49px] relative">
              <Image src="/logo footer.png" alt="" fill />
            </div>
            <p className="mt-4 lg:mt-[27px] text-[#F4F8FF] text-[13px] md:text-base lg:w-[411px]">
              Saepe quo suscipit vitae quia. Repudiandae nobis quis. Laboriosam
              unde quae qui quasi mollitia tenetur. Dicta explicabo est
              consectetur maxime quos fugit velit assumenda est.
            </p>
          </div>

          <div className="text-[#F4F8FF] w-full lg:w-[628px]">
            <h2 className="text-[19px] font-bold lg:text-[23px]">
              Sign Up For Our Newsletter!
            </h2>
            <p className="mt-2 text-[13px] lg:text-base">
              Get notified about updates and be the first to get early access to
              new Podcast episodes.
            </p>

            <div className="w-full h-[40px] md:h-[53px] flex items-center mt-4 md:mt-[30px] rounded-md">
              <input
                type="text"
                placeholder="Your email address"
                className="w-[69.3%] h-full px-4 rounded-s-md text-[13px] md:text-base text-black outline-none border-0 placeholder:text-[#1D1D1D]"
              />
              <button className="bg-primary w-[30.7%] h-full rounded-e-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 md:mt-12 lg:mt-[83px] flex gap-4 flex-col md:flex-row md:items-center justify-between">

          <div className="text-[#F4F8FF] flex flex-col gap-2 md:gap-4 text-[13px] md:text-base">
            <p className="font-bold">Contact Us</p>
            <p>support@we5ive.com</p>
          </div>

          <div className="text-[#F4F8FF] flex flex-col gap-2 md:gap-4 text-[13px] md:text-base">
            <p>About Us</p>
            <p>Contact Us</p>
          </div>

          <div className="text-[#F4F8FF] flex flex-col gap-2 md:gap-4 text-[13px] md:text-base">
            <p>Privacy policy</p>
            <p>Terms & Condition</p>
          </div>

          <div className="text-[#F4F8FF] flex flex-col gap-4">
            <p className="font-bold">Social Link</p>
            <div className="flex items-center gap-6">
              <Image src="/Facebook.svg" alt="" width={24} height={24} />
              <Image src="/Twitter.svg" alt="" width={24} height={24} />
              <Image src="/Linkedin.svg" alt="" width={24} height={24} />
            </div>
          </div>
        </div>
      </div>

      <div className="h-[58px] bg-primary text-base flex justify-center items-center text-white">© 2024 | We5ive</div>
    </div>
  );
};

export default Footer;
