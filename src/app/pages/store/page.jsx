/** @format */
"use client";

import ProductCard from "@/app/components/store/ProductCard";
import React, { useState } from "react";
import ProductThumbail from "../../../../public/Images/home-page/new_arrivals-img_1.png";

export default function Store() {
  const [productsData, setProductsData] = useState({
    name: "Midnight Vogue Dress",
    imageUrl: ProductThumbail, // Replace with your actual image path
    colors: ["#FF5252", "#FF7676", "#FF9E9E"], // Red color variants - just for display
    currentPrice: 4990.0,
    originalPrice: 5990.0,
    currency: "LKR",
  });
  return (
    <div className="flex flex-col gap-10">
      {/* Banner Header  */}
      <div className="w-full bg-red-400 h-[50vh] rounded-b-3xl"></div>

      <div className="max-w-7xl mx-auto flex flex-col w-full gap-10">
        {/* Filter panel */}
        <div className="w-full bg-green-200 h-20">Filter</div>

        {/* All/Filtered Products */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {[...Array(10)].map((_, index) => (
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
    </div>
  );
}
