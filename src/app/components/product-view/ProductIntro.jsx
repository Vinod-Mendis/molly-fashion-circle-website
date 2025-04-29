/** @format */

"use client";

import { useState } from "react";
import Image from "next/image";
import main_image from "../../../../public/Images/product-view/product_main_image.png";
import sub_image_1 from "../../../../public/Images/product-view/product_sub_image_1.png";
import sub_image_2 from "../../../../public/Images/product-view/product_sub_image_2.png";
import sub_image_3 from "../../../../public/Images/product-view/product_sub_image_3.png";
import sub_image_4 from "../../../../public/Images/product-view/product_sub_image_4.png";
import { ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("pink");

  const sizes = [
    { label: "S", value: "S" },
    { label: "M", value: "M" },
    { label: "L", value: "L" },
    { label: "XL", value: "XL" },
    { label: "XXL", value: "XXL" },
  ];

  const colors = [
    { name: "Pink", value: "pink", class: "bg-pink-200" },
    { name: "Coral", value: "coral", class: "bg-orange-400" },
    { name: "Red-Orange", value: "red-orange", class: "bg-red-500" },
  ];

  const thumbnails = [sub_image_1, sub_image_2, sub_image_3, sub_image_4];

  return (
    <div className="max-w-7xl w-full mt-5 mx-auto px-4 sm:px-4">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Left Column - Product Images */}
        <div className="space-y-4 md:col-span-3">
          <div className="relative aspect-[3/4] md:aspect-[3/2] overflow-hidden rounded-sm bg-gray-100">
            <Image
              src={main_image}
              alt="Pink Dye Dress - Main View"
              layout="fill"
              objectFit="cover"
              priority
              className="w-full h-full object-top object-cover"
            />
          </div>

          <div className="grid grid-cols-4 gap-4">
            {thumbnails.map((thumbnail, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-sm bg-gray-100">
                <Image
                  src={thumbnail}
                  alt={`Pink Dye Dress - View ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-top object-cover cursor-pointer hover:opacity-75"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div className="flex flex-col md:col-span-2 md:gap-6">
          <div className="flex md:flex-col w-full gap-2 items-center md:items-start justify-between">
            <h1 className="text-xl md:text-3xl font-semibold text-gray-900">
              Pink Dye Dress
            </h1>

            <div className="hidden sm:flex gap-4">
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <svg
                      key={rating}
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 15.585l-6.557 3.453 1.25-7.29L.196 7.318l7.306-1.063L10 0l2.498 6.255 7.306 1.063-4.497 4.43 1.25 7.29z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <p className="ml-2 text-sm text-gray-500">
                  (4.5 stars • 56 reviews)
                </p>
              </div>
            </div>
            <div className="flex md:hidden gap-2 items-center">
              <p className="text-gray-500">4.5</p>
              <svg
                className="h-5 w-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 15.585l-6.557 3.453 1.25-7.29L.196 7.318l7.306-1.063L10 0l2.498 6.255 7.306 1.063-4.497 4.43 1.25 7.29z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div className="py-2 md:py-4">
            <p className="text-2xl md:text-3xl font-medium text-gray-500">
              LKR 3500.00
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-8">
            {/* Size Selector */}
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium text-gray-400">Select Size</h3>
              <div className="flex flex-wrap gap-2 md:gap-6 mt-2">
                {sizes.map((size) => (
                  <button
                    key={size.value}
                    type="button"
                    className={`flex items-center justify-center text-xs h-10 w-10 rounded-full border ${
                      selectedSize === size.value
                        ? "bg-black text-white"
                        : "bg-white text-gray-900 border-gray-300"
                    }`}
                    onClick={() => setSelectedSize(size.value)}>
                    {size.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selector */}
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium text-gray-400">
                Select Color
              </h3>
              <div className="flex gap-6 mt-2">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    type="button"
                    className={`h-8 w-8 rounded-full ${color.class} ${
                      selectedColor === color.value
                        ? "ring-2 ring-offset-2 ring-gray-800"
                        : ""
                    }`}
                    onClick={() => setSelectedColor(color.value)}
                    aria-label={`Color: ${color.name}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="hidden md:flex flex-col">
            <h3 className="text-lg font-medium text-gray-900">Description</h3>
            <div className="mt-2 prose prose-sm text-gray-500">
              <p>
                Elevate your style with this chic and elegant dress! Featuring a
                flattering fit and modern design, it’s perfect for any occasion.
                Shop now!Elevate your style with this chic and elegant dress!
                Featuring a flattering fit and modern design, it’s perfect for
                any occasion. Shop now!
              </p>
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button variant="addToCart" className="py-8 text-base mt-6">
            Add to Cart <ShoppingBag />
          </Button>
        </div>
      </div>
    </div>
  );
}
