"use client";
import { useState } from "react";
import Image from "next/image";

import "swiper/css";
import "../app/globals.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";

const Carousel = () => {
  const [currentIdx, setCurrentIdx] = useState(1);
  const bannerImage = [
    "https://ssl.pstatic.net/melona/libs/1499/1499243/443f420920ac1f1a6e29_20240719161249778.jpg",
    "https://as1.ftcdn.net/v2/jpg/04/75/95/86/1000_F_475958688_H77LPzr4MNdBkOOK3ddhMcxFSXzqdwMl.jpg",
    "https://blog.kakaocdn.net/dn/HUGVj/btrJloRg451/mctRUnHYAgTKvocX1HxXiK/img.jpg",
    "https://www.shutterstock.com/image-illustration/horizontal-banner-silhouette-wolf-standing-260nw-2047840529.jpg",
  ];

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentIdx(swiper.activeIndex + 1);
  };

  return (
    <div id="wrrper" className="h-[104px] mt-6 relative ">
      <Swiper
        className="mySwiper"
        onSlideChange={handleSlideChange}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {bannerImage.map((item, idx) => {
          return (
            <SwiperSlide
              key={idx}
              onChange={() => {
                console.log(idx);
              }}
            >
              <Image
                src={item}
                alt="배너 광고 이미지"
                fill
                sizes="100%"
                priority={idx === 0}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div
        id="bannerCount"
        className="w-8 h-[18px] rounded-lg absolute bg-primary opacity-[80%] z-10 right-2 bottom-2 top-[78px]"
      />
      <span className="text-white right-[15px] z-20 top-[80px] absolute font-semibold text-[9px]">{`${currentIdx} / ${bannerImage.length}`}</span>
    </div>
  );
};

export default Carousel;
