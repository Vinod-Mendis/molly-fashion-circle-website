/** @format */
"use client";

import ProductCard from "@/app/components/store/ProductCard";
import React, { useState } from "react";
import ProductThumbail from "../../../../public/Images/home-page/new_arrivals-img_1.png";
import ProductsFilter from "@/app/components/store/ProductsFilter";
import BannerSection from "@/app/components/store/BannerSection";
import banner_image from "../../../../public/Images/store/banner_image.png";

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
      <BannerSection category="womens" />

      <div className="max-w-7xl px-4 mx-auto flex flex-col w-full gap-10">
        {/* Filter panel */}
        <div className="w-full">
          <ProductsFilter />
        </div>

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
