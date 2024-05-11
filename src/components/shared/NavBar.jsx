import { navData } from "../../data/utilsData";
import SectionWrapper from "../wrapper's/SectionWrapper";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiBars2 } from "react-icons/hi2";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";

const NavBar = () => {
  const [navShow, setNavShow] = useState(false);
  return (
    <>
      <div className="bg-neutral text-neutral-content py-4 relative">
        <SectionWrapper>
          {/* desktop nav */}
          <div className="md:block hidden">
            <div className="flex items-center justify-between">
              <ul className="flex items-center gap-8 font-semibold">
                {navData?.map((item, index) => (
                  <li
                    key={index}
                    className={`hover:underline ${
                      item === "Master Price" && "underline text-white"
                    }`}
                  >
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-8">
                <div className="relative">
                  <IoMdNotificationsOutline className="text-3xl cursor-pointer" />
                  <span className="bg-red-500 w-4 h-4 text-[13px] rounded-full flex items-center justify-center absolute -top-1 -right-0">
                    4
                  </span>
                </div>
                <img
                  className="rounded-full w-14 h-14 cursor-pointer"
                  src="/profile.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* mobile nav */}
          <div className="md:hidden block">
            <div className="flex items-center justify-between">
              <HiBars2
                onClick={() => setNavShow(!navShow)}
                className="text-4xl"
              />
              <div
                className={`flex items-center absolute transition-all duration-100  z-30  ${
                  navShow ? "left-0 top-0" : "-left-[200%] top-0"
                }`}
              >
                <ul className="w-[70vw] h-[100vh] flex flex-col font-semibold px-8  pt-10 bg-neutral text-neutral-content text-[18px]">
                  <div className="flex items-center justify-between pb-8">
                    <img className="w-[50%]" src="/logo-white.png" alt="" />
                    <FaXmark
                      onClick={() => setNavShow(!navShow)}
                      className="text-4xl"
                    />
                  </div>
                  <p className="pb-6 text-2xl font-semibold">Menu</p>
                  {navData?.map((item, index) => (
                    <div className="py-4">
                      <li key={index}>
                        <a href="#">{item}</a>
                      </li>
                      <div className="w-full h-[1px] bg-white"></div>
                    </div>
                  ))}
                </ul>
                <div className="w-[30vw] h-[100vh] bg-black opacity-40"></div>
              </div>
              <div className="flex items-center gap-8">
                <div className="relative">
                  <IoMdNotificationsOutline className="text-3xl cursor-pointer" />
                  <span className="bg-red-500 w-4 h-4 text-[13px] rounded-full flex items-center justify-center absolute -top-1 -right-0">
                    4
                  </span>
                </div>
                <img
                  className="rounded-full w-14 h-14 cursor-pointer"
                  src="/profile.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>
      <div className="border-b py-2 md:block hidden">
        <SectionWrapper>
          <h1 className="text-3xl font-semibold">Master Price</h1>
        </SectionWrapper>
      </div>
    </>
  );
};

export default NavBar;
