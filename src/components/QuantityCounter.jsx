"use client";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const QuantityCounter = () => {
  const [count, setCount] = useState(1);

  const handleCount = (value) => {
    if (value === "i") {
      setCount(count + 1);
    }
    if (value === "d" && count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className="flex justify-between items-center gap-2 w-[132px] h-12 bg-[#ECE9FE] rounded-full text-base font-semibold px-4">
      <button onClick={() => handleCount("d")} className="p-1">
        <FaMinus />
      </button>
      <p>{count}</p>
      <button onClick={() => handleCount("i")} className="p-1">
        <FaPlus />
      </button>
    </div>
  );
};

export default QuantityCounter;
