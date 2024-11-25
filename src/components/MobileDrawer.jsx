/* eslint-disable react/prop-types */
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdCloseCircleOutline } from "react-icons/io";

const MobileDrawer = ({ openDrawer, setOpenDrawer }) => {
  const pathname = usePathname();

  const menus = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "#" },
    { name: "Deals", path: "#" },
    { name: "What's New", path: "#" },
  ];

  return (
    <div
      className={`fixed inset-0 z-[999] transition-all duration-300 ease-in-out ${
        openDrawer ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Backdrop */}
      <div
        onClick={() => setOpenDrawer(false)}
        className={`absolute inset-0 bg-black bg-opacity-70 transition-opacity duration-300 ${
          openDrawer ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed left-0 top-0 h-full w-[250px] bg-gray-100 p-4 transition-transform duration-300 ease-in-out ${
          openDrawer ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-[10%] flex items-center justify-between">
          <div className="w-28 h-9 relative">
            <Image src="/logo.png" alt="Logo" fill />
          </div>
          <button type="button" onClick={() => setOpenDrawer(false)}>
            <IoMdCloseCircleOutline className="h-7 w-7" />
          </button>
        </div>

        <div className="mt-[40px] h-[90%] flex flex-col justify-between">
          <ul className="h-[80%]">
            <li className="flex flex-col gap-5 font-medium">
              {menus.map((menu, idx) => (
                <Link
                  href={menu.path}
                  key={idx}
                  className={` ${
                    pathname === menu.path ? "text-primary" : ""
                  }`}
                >
                  {menu.name}
                </Link>
              ))}
            </li>
          </ul>

          <div className="h-[20%] flex items-center gap-2">
            <div className="w-9 h-9 bg-gray-300 rounded-full"></div>
            <p>John Doe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDrawer;
