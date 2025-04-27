/** @format */

import React from "react";
import { ThreeDCardDemo } from "./ThreeDCardDemo";

export default function CategorySection() {
  return (
    <div className="max-w-7xl w-full mx-auto px-4 flex flex-col gap-10 bg-yellow-100">
        {/* title */}
      <div className="flex justify-between gap-4 items-center w-full bg-blue-300">
        <p className="text-justify uppercase leading-tight text-sm max-w-3xs">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
          consequuntur tenetur consequatur, explicabo in blanditiis molestias
          dolor impedit distinctio temporibus natus.
        </p>
        <h2 className="text-3xl text-center md:text-5xl flex font-medium uppercase text-[#655656] md:whitespace-nowrap">
          fashion for everyone
        </h2>
        <hr className="border-[#655656] w-[20%] hidden md:block" />
      </div>
      {/* 3d card - right side */}
      <div className="bg-green-200 w-full flex justify-end">
        <ThreeDCardDemo/>
      </div>
    </div>
  );
}
