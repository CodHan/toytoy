import React from "react";

const FloatingBtn = () => {
  return (
    <div className="fixed w-[600px] right-[52%] bottom-[109px]  translate-x-[50%] z-50 sm:translate-x-0 sm:right-4 flex justify-end">
      <button className="w-[54px] h-[54px] z-30 bg-primary rounded-[27px]">
        +
      </button>
    </div>
  );
};

export default FloatingBtn;
