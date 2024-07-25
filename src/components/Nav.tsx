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
    <div className="h-[80px] flex justify-center  w-full absolute bottom-0 border border-blue-500 z-50 rounded-t-lg shadow-custom ">
      <div className="fixed border border-yellow-700">
        <div className="w-[303px] h-[46px] border border-green-600 mt-3 flex justify-center gap-[37px]  ">
          <div className="w-full h-full flex justify-between">
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
      </div>
    </div>
  );
};

export default Nav;
