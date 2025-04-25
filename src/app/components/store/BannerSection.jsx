/** @format */

import Image from "next/image";
import React from "react";
import banner_image from "../../../../public/Images/store/banner_image.png";

export default function BannerSection({ category}) {
  return (
    <div className="w-full flex justify-center items-center bg-gradient-to-b from-[#D9AC72] to-[#D5A76B] h-[55vh] rounded-b-3xl relative overflow-hidden">
      <Image
        src={banner_image}
        width={500}
        height={500}
        alt="banner-image"
        className="absolute bottom-0 right-20 z-10"
      />
      <p className="opacity-10 uppercase text-white font-bold text-[24rem] absolute -bottom-10 z-0 leading-none">
        womens
      </p>
      <div className="flex flex-col justify-between py-8 max-w-7xl w-full h-full mx-auto px-4">
        <p className="mt-28 text-9xl font-semibold text-white">
          Women`s <br />
          Wear.
        </p>
        <p className="text-white text-xl">Trendy Looks for the Modern Woman.</p>
      </div>
    </div>
  );
}
