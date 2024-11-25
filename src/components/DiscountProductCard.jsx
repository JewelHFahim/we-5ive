import Image from "next/image";
import Link from "next/link";
import { TbStarFilled, TbStarHalfFilled } from "react-icons/tb";

const DiscountProductCard = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`} className="w-[302px] h-[400px] p-2">
      <div className="flex flex-col gap-4">
        <div className="w-full h-[260px] relative">
          <Image src={product.img} alt="" fill />

          <div className="absolute right-0 top-0 w-[44px] h-[60px] bg-primary rounded-b-full text-xs text-white text-center  flex justify-center items-center">
            Up <br /> to <br /> 40%
          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-1">
            <div className="flex gap-1 text-[16px] text-[#FFC700]">
              <TbStarFilled />
              <TbStarFilled />
              <TbStarFilled />
              <TbStarHalfFilled />
              <TbStarHalfFilled />
            </div>
            <p className="text-[#1D1D1D] text-sm">(50)</p>
          </div>

          <div className="text-[#1D1D1D] flex items-center justify-between">
            <p className="text-base font-normal">{product.title}</p>
            <p className="font-semibold text-[19px]">BDT {product.price}</p>
          </div>
        </div>

        <button className="text-base font-semibold text-primary w-full h-[40px] rounded-[8px] border border-primary">
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

const DiscountProductContainer = () => {
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

  return (
    <div className="grid grid-cols-4 gap-6">
      {products.map((product, idx) => (
        <DiscountProductCard key={idx} product={product} />
      ))}
    </div>
  );
};
export default DiscountProductContainer;
