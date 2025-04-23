/** @format */

import React from "react";
import new_arrivals_img_3 from "../../../../public/Images/home-page/new_arrivals-img_3.png";
import Image from "next/image";

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
          <h1>Pink Dye Dress</h1>
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
