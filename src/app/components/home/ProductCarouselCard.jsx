/** @format */
"use client";

import Image from "next/image";
import { ShoppingBasket } from "lucide-react";
import { Button } from "../ui/button";

export default function ProductCarouselCard({
  thumbnail,
  productName,
  productColorVariants = [],
  originalPrice,
  currentPrice,
}) {
  return (
    <div className="w-full max-w-lg flex flex-col border-b border-b-black pb-2 mx-auto">
      {/* Product Image Container */}
      <div className="relative bg-gray-200 rounded-lg overflow-hidden h-[30rem] mb-3 border border-black group">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={productName || "Product image"}
            fill
            className="object-cover group-hover:scale-110 transition duration-300"
            sizes="(max-width: 768px) 100vw, 300px"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <span className="text-gray-400">No image available</span>
          </div>
        )}
        <Button
          variant="cart"
          className="mb-3 mr-3 p-2 absolute flex justify-center items-center bottom-0 right-0 rounded-full shadow-2xl bg-white h-14 w-14 border">
          <ShoppingBasket className="m-0 p-0 h-8 w-8" />
        </Button>
      </div>

      {/* Product Details */}
      <h3 className="font-medium text-gray-800 mb-2">
        {productName || "Product Name"}
      </h3>

      {/* Price Information */}
      <div className="flex items-center justify-between space-x-4">
        <div className="flex gap-4 items-center">
        <p className="font-semibold text-2xl">
          {currentPrice ? `LKR ${currentPrice}.00` : "Price unavailable"}
        </p>
        {originalPrice && (
          <p className="text-gray-400 line-through text-base">
            LKR {originalPrice}.00
          </p>
        )}
        </div>
        <div className="w-px h-8 bg-black"></div>
        {/* Color Options */}
        {productColorVariants && productColorVariants.length > 0 && (
          <div className="flex space-x-2">
            {productColorVariants.map((color, index) => (
              <div
                key={index}
                className="w-6 h-6 rounded-full border border-gray-200"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
