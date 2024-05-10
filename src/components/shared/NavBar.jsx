import React from "react";
import { navData } from "../../data/utilsData";
import SectionWrapper from "../wrapper's/SectionWrapper";
import { IoMdNotificationsOutline } from "react-icons/io";

const NavBar = () => {
  return (
    <div>
      <div className="bg-slate-800 text-gray-300 py-4">
        <SectionWrapper>
          <div className="flex items-center justify-between">
            <ul className="flex items-center gap-8 font-semibold">
              {navData?.map((item, index) => (
                <li key={index}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-8">
              <IoMdNotificationsOutline className="text-2xl" />
              <img
                className="rounded-full w-14 h-14"
                src="/profile.jpg"
                alt=""
              />
            </div>
          </div>
        </SectionWrapper>
      </div>
      <div className="border-b">
        <SectionWrapper>
          <h1 className="text-3xl font-semibold">Master Price</h1>
        </SectionWrapper>
      </div>
    </div>
  );
};

export default NavBar;
