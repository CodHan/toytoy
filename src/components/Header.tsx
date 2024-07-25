import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="h-11 flex justify-items-center mt-[52px]">
      <div className="flex justify-between w-full pl-6 pr-4 ">
        <h1 className="font-extraBold text-3xl  ">모두의 부조</h1>
        <button>
          <Image
            src="../notification.svg"
            alt="알림 아이콘"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
