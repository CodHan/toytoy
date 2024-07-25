"use client";

import Image from "next/image";
import { useState } from "react";

const Banner = () => {
  const [currCarousel, setCurrCarousel] = useState(0);
  const [carouselTransition, setCarouselTransition] = useState(
    "transform 500ms ease-in-out"
  );

  const bannerImage = [
    "https://ssl.pstatic.net/melona/libs/1499/1499243/443f420920ac1f1a6e29_20240719161249778.jpg",
    "https://as1.ftcdn.net/v2/jpg/04/75/95/86/1000_F_475958688_H77LPzr4MNdBkOOK3ddhMcxFSXzqdwMl.jpg",
    "https://blog.kakaocdn.net/dn/HUGVj/btrJloRg451/mctRUnHYAgTKvocX1HxXiK/img.jpg",
    "https://ssl.pstatic.net/melona/libs/1499/1499243/443f420920ac1f1a6e29_20240719161249778.jpg",
    "https://www.shutterstock.com/image-illustration/horizontal-banner-silhouette-wolf-standing-260nw-2047840529.jpg",
  ];

  const nextBtn = () => {
    setCurrCarousel((curr) => curr + 1);
    console.log(currCarousel);
  };
  return (
    <div id="root" className=" w-full">
      <div
        id="container"
        className="w-full flex h-[104px] border border-solid border-red-500  
        "
        style={{
          transform: `translateX(-${currCarousel}00%)`,
          transition: carouselTransition,
        }}
      >
        {bannerImage.map((item, index) => (
          <Image
            key={index}
            src={item}
            alt={`배너 이미지 ${index}`}
            className="object-cover"
            layout="fill"
            sizes="100%"
          />
        ))}
      </div>
      <button onClick={nextBtn}>NEXT</button>
    </div>
  );
};

export default Banner;
