import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'

const ShopNowBtn = () => {
  return (
    <div className="mt-6 flex items-center">
    <button className="bg-[#8F71E1] text-white w-[149px] h-[48px] rounded-full">
      Shop Now
    </button>
    <button className="bg-[#8F71E1] w-12 h-12 rounded-full text-white flex justify-center items-center transition-all duration-150 ease-in-out hover:rotate-[45deg]">
      <BsArrowUpRight />
    </button>
  </div>
  )
}

export default ShopNowBtn