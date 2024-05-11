import { navData } from "../../data/utilsData";
import SectionWrapper from "../wrapper's/SectionWrapper";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiBars2 } from "react-icons/hi2";
import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";

// NavBar component for displaying navigation bar
const NavBar = React.memo(() => {
  // State to toggle mobile navigation
  const [navShow, setNavShow] = useState(false);
  
  return (
    <>
      {/* Desktop navigation */}
      <div className="bg-neutral text-neutral-content py-4 relative">
        <SectionWrapper>
          <div className="md:block hidden">
            <div className="flex items-center justify-between">
              {/* Navigation links */}
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
              {/* Notifications and profile picture */}
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
          {/* Mobile navigation */}
          <div className="md:hidden block">
            <div className="flex items-center justify-between">
              {/* Mobile menu icon */}
              <HiBars2
                onClick={() => setNavShow(!navShow)}
                className="text-4xl"
              />
              {/* Mobile menu */}
              <div
                className={`flex items-center absolute transition-all duration-100  z-30  ${
                  navShow ? "left-0 top-0" : "-left-[200%] top-0"
                }`}
              >
                <div className="w-[70vw] h-[100vh] flex flex-col font-semibold px-8  pt-10 bg-neutral text-neutral-content text-[18px]">
                  <div className="flex items-center justify-between pb-8">
                    <img className="w-[50%]" src="/logo-white.png" alt="" />
                    {/* Close icon */}
                    <FaXmark
                      onClick={() => setNavShow(!navShow)}
                      className="text-4xl"
                    />
                  </div>
                  {/* Mobile menu items */}
                  <p className="pb-6 text-2xl font-semibold">Menu</p>
                  {navData?.map((item, index) => (
                    <div className="py-4" key={index}>
                      <li>
                        <a href="#">{item}</a>
                      </li>
                      {/* Divider */}
                      <div className="w-full h-[1px] bg-white"></div>
                    </div>
                  ))}
                </div>
                {/* Background overlay */}
                <div className="w-[30vw] h-[100vh] bg-black opacity-40"></div>
              </div>
              {/* Notifications and profile picture */}
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
      {/* Border separator and page title */}
      <div className="border-b py-2 md:block hidden">
        <SectionWrapper>
          <h1 className="text-3xl font-semibold">Master Price</h1>
        </SectionWrapper>
      </div>
    </>
  );
});

export default NavBar;
