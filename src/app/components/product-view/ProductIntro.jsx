/** @format */

import React from "react";
import new_arrivals_img_3 from "../../../../public/Images/home-page/new_arrivals-img_3.png";
import Image from "next/image";
import full_star from "../../../../public/Images/product-view/full_star.png";
import half_star from "../../../../public/Images/product-view/half_star.png";

export default function ProductIntro() {
  return (
    <div className="w-full gap-3 flex border-2 border-blue-400">
      {/* left */}
      <div className="relative flex-grow flex flex-col bg-red-200 rounded-sm border-2 border-red-400">
        <div className="relative overflow-hidden w-full flex-grow">
          <Image
            src={new_arrivals_img_3}
            alt="arrow head"
            fill
            className="object-cover"
          />
        </div>
        {/* Details left */}

        <div className="mt-2">
          {/* Initial Details */}
          <div className="flex gap-4">
            <h1>Pink Dye Dress</h1>
            <div className="flex gap-2 ml-5">
              {[...Array(5)].map((_, index) => (
                <Image
                  key={index}
                  src={index < 4 ? full_star : half_star}
                  alt="star"
                  width={20}
                  height={20}
                />
              ))}
            </div>
            <p className="">(4.5 stars) | 56 reviews</p>
          </div>
          {/* Size and color */}
          <div className="flex">
            {/* Size */}
            <div className=""></div>
            {/* Color */}
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex flex-col border-2 border-red-400 bg-red-200">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-blue-400 col-span-1 w-64 h-64 relative rounded-sm overflow-hidden">
            <Image
              src={new_arrivals_img_3}
              alt="arrow head"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-blue-500 col-span-1 w-64 h-64 relative rounded-sm overflow-hidden">
            <Image
              src={new_arrivals_img_3}
              alt="arrow head"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-blue-600 col-span-1 w-64 h-64 relative rounded-sm overflow-hidden">
            <Image
              src={new_arrivals_img_3}
              alt="arrow head"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-blue-700 col-span-1 w-64 h-64 relative rounded-sm overflow-hidden">
            <Image
              src={new_arrivals_img_3}
              alt="arrow head"
              fill
              className="object-cover"
            />
          </div>
        </div>
        {/* Details right */}
        <div className="mt-2">ad</div>
      </div>
    </div>
  );
}
