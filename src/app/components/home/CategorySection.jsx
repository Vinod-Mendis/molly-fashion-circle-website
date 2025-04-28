/** @format */
"use client";

import { ThreeDCardDemo } from "./ThreeDCardDemo";
import Image from "next/image";
import menuStar from "../../../../public/Images/home-page/menu_star.png";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function CategorySection() {
  const [selectedCategory, setSelectedCategory] = useState("Men");
  console.log("Selected Category:", selectedCategory);

  const categories = [
    {
      name: "Men",
      link: "/",
      images: ["/Images/home-page/new_arrivals-img_3.png", "/", "/"],
    },
    {
      name: "Women",
      link: "/",
      images: ["/Images/home-page/new_arrivals-img_2.png", "/", "/"],
    },
    {
      name: "Kids",
      link: "/",
      images: ["/Images/home-page/new_arrivals-img_1.png", "/", "/"],
    },
    {
      name: "home & lifestyle",
      link: "/",
      images: ["/Images/home-page/new_arrivals-img_4.png", "/", "/"],
    },
  ];
  return (
    <div className="max-w-7xl w-full mx-auto lg:px-4 flex flex-col gap-10 relative pb-80">
      <div className="pt-12 h-full w-16 absolute -z-10 hidden lg:block">
        <div className="h-full w-px bg-black flex mx-auto"></div>
      </div>
      {/* title */}
      <div className="flex justify-between gap-10 items-start w-full">
        <p className="hidden lg:block text-justify uppercase leading-tight text-sm max-w-2xs pl-16">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
          consequuntur tenetur consequatur, explicabo in blanditiis molestias
          dolor impedit distinctio
        </p>
        <div className="w-full flex gap-10 items-center">
          <h2 className="text-3xl text-center md:text-5xl flex font-medium uppercase text-[#655656] md:whitespace-nowrap px-4 sm:px-0">
            fashion for everyone
          </h2>
          <hr className="border-[#655656] flex-grow hidden lg:block" />
        </div>
      </div>

      {/* Desktop view */}
      <>
        {/* Category Menu - left side */}
        <div className="hidden lg:flex flex-col gap-4 mt-56 max-w-4xl">
          {categories.map((_, index) => (
            <div
              key={index}
              className="flex items-center gap-4 group cursor-pointer"
              onMouseEnter={() => setSelectedCategory(categories[index].name)}>
              <div className="relative w-16 h-16">
                {categories[index].name === selectedCategory && (
                  <Image
                    src={menuStar}
                    fill
                    alt="menu-star"
                    className=" bg-white p-2"
                  />
                )}
              </div>
              <p className="text-5xl uppercase whitespace-nowrap">
                {categories[index].name}
              </p>
              <ArrowUpRight className="h-14 w-14 text-gray-100 group-hover:text-black font-bold group-hover:rotate-45 transition" />
              <hr className="flex-grow border-[#AF803C]" />
            </div>
          ))}
        </div>
        {/* 3d card - right side */}
        <div className="absolute hidden lg:block right-0">
          <ThreeDCardDemo />
        </div>
      </>

      {/* Mobile view */}
      <div className="grid lg:hidden grid-cols-1 md:grid-cols-2">
        {categories.map((_, index) => (
          <div className="h-[30rem] relative flex justify-center items-center active:opacity-80">
            <Image
              src={categories[index].images[0]}
              fill
              alt="menu-star"
              className="object-cover object-center"
            />
            <div
              className={`relative text-white px-4 py-20 ${
                categories[index].name === "home & lifestyle"
                  ? "flex-col"
                  : "flex"
              } flex smooth-shadow  w-full text-center justify-center items-center`}>
              <p
                className={`uppercase  ${
                  categories[index].name === "home & lifestyle"
                    ? "text-4xl"
                    : "text-5xl"
                }`}>
                {categories[index].name}
              </p>
              <ArrowUpRight className="h-14 w-14" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
