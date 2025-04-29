/** @format */
"use client";

import React, { useState } from "react";
import ProductCard from "../store/ProductCard";
import ProductThumbail from "../../../../public/Images/home-page/new_arrivals-img_1.png";

export default function RelevantProducts() {
  const [productsData, setProductsData] = useState({
    name: "Midnight Vogue Dress",
    imageUrl: ProductThumbail, // Replace with your actual image path
    colors: ["#FF5252", "#FF7676", "#FF9E9E"], // Red color variants - just for display
    currentPrice: 4990.0,
    originalPrice: 5990.0,
    currency: "LKR",
  });
  return (
    <div className="max-w-7xl w-full mx-auto px-4 flex flex-col gap-20">
      <div className="flex flex-col">
        {/* title */}
        <div className="w-full flex flex-col">
          <div className="flex items-center justify-center gap-8 w-full">
            <hr className="hidden md:block flex-grow border-black" />
            <h1 className="whitespace-nowrap text-center text-3xl md:text-5xl">YOU MIGHT ALSO LIKE</h1>
            <hr className="hidden md:block flex-grow opacity-0" />
          </div>
        </div>
        {/* Description */}
        <div className="hidden md:flex items-center justify-center w-full mt-4 space-x-4">
          <hr className="w-[50%] opacity-0" />
          <p className="text-justify uppercase leading-tight text-sm max-w-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
            consequuntur tenetur consequatur, explicabo in blanditiis molestias
            dolor impedit distinctio temporibus natus.
          </p>
          <hr className="flex-grow border-[#AF803C]" />
        </div>
      </div>
      {/* Relevant products */}
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {[...Array(4)].map((_, index) => (
          <ProductCard
            key={index}
            thumbnail={productsData.imageUrl}
            productName={productsData.name}
            productColorVariants={productsData.colors}
            originalPrice={productsData.originalPrice}
            currentPrice={productsData.currentPrice}
          />
        ))}
      </div>
    </div>
  );
}
