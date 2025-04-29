/** @format */

import Image from "next/image";
import React from "react";
import banner_image from "../../../../public/Images/store/banner_image.png";

export default function BannerSection({ category}) {
  return (
    <div className="w-full flex justify-center items-center bg-gradient-to-b from-[#D9AC72] to-[#D5A76B] h-72 md:h-[55vh] rounded-b-3xl relative overflow-hidden">
      <Image
        src={banner_image}
        width={200}
        height={200}
        alt="banner-image"
        className="absolute bottom-0 right-0 md:right-20 z-10 md:w-[500px]"
      />
      <p className="opacity-10 uppercase text-white font-bold text-8xl md:text-[24rem] absolute -bottom-5 md:-bottom-10 z-0 leading-none">
        womens
      </p>
      <div className="flex flex-col justify-between py-4 md:py-8 max-w-7xl w-full h-full mx-auto px-4">
        <p className="mt-18 text-5xl md:text-9xl font-semibold text-white">
          Women`s <br />
          Wear.
        </p>
        <p className="text-white text-sm md:text-xl pb-5 md:pb-0">Trendy Looks for the Modern Woman.</p>
      </div>
    </div>
  );
}
