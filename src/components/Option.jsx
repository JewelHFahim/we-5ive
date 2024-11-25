import Image from "next/image";

const Option = () => {

  const options = [
    {
      title: "FREE SHIPPING",
      slogan: "BUY BDT 3000+ & GET FREE DELIVERY",
      icon: "/truck-delivery.svg",
    },
    {
      title: "7 DAYS EXCHANGE",
      slogan: "EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS",
      icon: "/exchange.png",
    },
    {
      title: "100% PAYMENT SECURE",
      slogan: "CASH ON DELIVERY AND SECURED ONLINE PAYMENT",
      icon: "/payment-02.png",
    },
  ];

  return (
    <section
      className="w-full md:h-[82px] grid grid-cols-1 md:grid-cols-3 items-center gap-4 px-4 py-4 md:py-0 md:px-[30px] lg:px-[87.5px] bg-no-repeat bg-cover" style={{ backgroundImage: "url(/option.png)" }}>

      {/* Options Map */}
      {options.map((item, idx) => (
        <div key={idx} className="flex gap-4">
          <div className="w-8 h-8 relative">
            <Image src={item.icon} alt="" fill />
          </div>

          <div className="text-[#F4F8FF]">
            <h3 className="font-bold md:font-medium text-base lg:text-[19px]">
              {item.title}
            </h3>
            <p className="text-[13px]">{item.slogan}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Option;
