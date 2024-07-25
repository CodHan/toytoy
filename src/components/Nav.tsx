"use client";
import { navStore } from "@/store/navStroe";
import { navModule } from "@/utills/navModule";
import Image from "next/image";
import React from "react";

const Nav = () => {
  const { activeName, setActiveName } = navStore();

  const navBtnHandler = (name: string) => {
    setActiveName(name);
  };

  return (
    <div className="h-[80px] sm:w-full flex justify-center items-center right-[50%] translate-x-[50%] fixed w-[600px] bg-white bottom-0 rounded-t-lg shadow-custom ">
      <div className="w-[303px] h-[46px] flex justify-center gap-10">
        {navModule.map((item, idx) => {
          return (
            <div key={idx + 1}>
              <button
                className="w-12 h-[45px] flex flex-col  items-center justify-center"
                onClick={() => navBtnHandler(item.name)}
              >
                {activeName === item.name ? (
                  <>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={24}
                      height={24}
                    />
                    <p className="font-medium text-xs">{item.name}</p>
                    <Image
                      src="../rectangle.svg"
                      alt="rectangle"
                      width={40}
                      height={2}
                    />
                  </>
                ) : (
                  <>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={24}
                      height={24}
                    />
                    <p className="font-medium text-xs">{item.name}</p>
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
