import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({product}) => {
  return (
    <Link href={`/product/${product.id}`} className="w-[302px] h-[400px] p-2">
      <div className="flex flex-col gap-4">
        <div className="w-full h-[287px] relative">
          <Image src={product.img} alt="" fill />
        </div>

        <div className="text-[#1D1D1D] flex items-center justify-between">
          <p className="text-base font-normal">{product.title}</p>
          <p className="font-semibold text-[19px]">BDT {product.price}</p>
        </div>

        <button className="text-base font-semibold text-primary w-full h-[40px] rounded-[8px] border border-primary">
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
