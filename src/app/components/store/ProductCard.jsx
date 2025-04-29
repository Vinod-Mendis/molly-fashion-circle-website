/** @format */
"use client";

import Image from "next/image";
import React, { useState } from "react";
import ProductThumbail from "../../../../public/Images/home-page/new_arrivals-img_1.png";
import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";

export default function ProductCard({
  thumbnail,
  productName,
  productColorVariants,
  originalPrice,
  currentPrice,
}) {
  // Dummy data for the product card
  const product = {
    name: "Midnight Vogue Dress",
    imageUrl: ProductThumbail, // Replace with your actual image path
    colors: ["#FF5252", "#FF7676", "#FF9E9E"], // Red color variants - just for display
    currentPrice: 4990.0,
    originalPrice: 5990.0,
  };

  return (
    <div className="w-full max-w-xs flex flex-col border-b border-b-black pb-2">
      {/* Product Image Container */}
      <div className="relative bg-gray-200 rounded overflow-hidden h-64 sm:h-96 mb-3 border border-black group">
        <Image
          src={thumbnail}
          alt={productName}
          fill
          className="object-cover group-hover:scale-110 transition duration-300"
          sizes="(max-width: 768px) 100vw, 300px"
        />
        <Button variant="cart" className="absolute bottom-0 left-0 m-2 active:scale-95">
          Add to Cart
          <ShoppingCart />
        </Button>
      </div>

      {/* Product Details */}
      <h3 className=" text-sm md:text-base font-medium text-gray-800 mb-2">{productName}</h3>

      {/* Color Options - Static display only */}
      <div className="flex space-x-1 md:space-x-2 mb-3">
        {productColorVariants.map((color) => (
          <div
            key={color}
            className="w-3 h-3 md:w-5 md:h-5 rounded-full"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      {/* Price Information */}
      <div className="flex items-center space-x-4">
        <span className="font-semibold text-lg">LKR {currentPrice}.00</span>
        {originalPrice && (
          <span className="text-gray-400 line-through text-sm md:text-base">
            {originalPrice}
          </span>
        )}
      </div>
    </div>
  );
}
