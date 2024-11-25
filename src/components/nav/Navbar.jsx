"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { nunitoSans } from "@/utils/fonts";
import { usePathname } from "next/navigation";
import MobileDrawer from "../MobileDrawer";

const Navbar = () => {
  const router = usePathname();
  const [openDrawer, setOpenDrawer] = useState(false);

  const menus = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Shop",
      path: "#",
    },
    {
      name: "Deals",
      path: "#",
    },
    {
      name: "What's New",
      path: "#",
    },
  ];

  return (
    <div className="relative">
      <nav className="h-[56px] md:h-[80px] flex items-center justify-between px-4 md:px-10 xxl:px-0">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setOpenDrawer(true)}
            className="w-6 h-6 lg:hidden relative"
          >
            <Image src="/menu.png" fill alt="" />
          </button>

          <Link href="/" className="w-[96px] h-6  lg:w-[161px] lg:h-10 relative">
            <Image src="/logo.png" fill alt="" />
          </Link>
        </div>

        <ul className="hidden lg:block">
          <li className="flex items-center gap-8">
            {menus.map((menu, idx) => (
              <Link
                href={menu.path}
                key={idx}
                className={`text-base font-semibold hover:text-[#581FC1]  ${
                  router === menu.path ? "text-[#581FC1]" : "text-[#646464]"
                }`}
              >
                {menu.name}
              </Link>
            ))}
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <div className="hidden w-[242px] h-[35px] md:flex gap-2 items-center bg-white rounded-full overflow-hidden px-2">
            <Image src="/search-01.png" alt="" width={16} height={16} />
            <input
              type="text"
              placeholder="Search"
              className={` ${nunitoSans.className} outline-none h-full w-[92%] placeholder:text-[#1D1D1D]`}
            />
          </div>

          <button>
            <Image src="/search.png" alt="" width={24} height={24} />
          </button>

          <button className="relative">
            <Image src="/shopping.png" alt="" width={24} height={24} />

            <div
              className={`absolute -top-1 -right-2 ${nunitoSans.className} w-4 h-4 bg-black rounded-full text-white text-xs flex justify-center items-center`}
            >
              0
            </div>
          </button>

          <button>
            <Image src="/user.png" alt="" width={24} height={24} />
          </button>
        </div>
      </nav>

      <MobileDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </div>
  );
};

export default Navbar;
