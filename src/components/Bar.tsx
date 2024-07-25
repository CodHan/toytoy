import Image from "next/image";
import React from "react";

const Bar = () => {
  return (
    <div className="mr-4 ml-[17px] h-11 flex items-center mt-4 rounded-lg shadow-custom">
      <button className="w-full flex justify-between px-[10px]">
        <h2 className="text-base font-semibold">
          프로버전으로 업그레이드 하기
        </h2>
        <Image
          src="../arrow-right.svg"
          alt="오른쪽 화살표 아이콘"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};

export default Bar;
