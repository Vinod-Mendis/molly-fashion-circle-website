/** @format */

import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { FaBagShopping } from "react-icons/fa6";
import new_arrivals_img_6 from "../../../../public/Images/home-page/new_arrivals-img_6.png";
import new_arrivals_img_5 from "../../../../public/Images/home-page/new_arrivals-img_5.png";
import new_arrivals_img_4 from "../../../../public/Images/home-page/new_arrivals-img_4.png";
import new_arrivals_img_3 from "../../../../public/Images/home-page/new_arrivals-img_3.png";
import new_arrivals_img_2 from "../../../../public/Images/home-page/new_arrivals-img_2.png";
import new_arrivals_img_1 from "../../../../public/Images/home-page/new_arrivals-img_1.png";

const products = [
  {
    id: "1",
    name: "Midnight Vogue Dress",
    price: 4990.0,
    originalPrice: 5990.0,
    image: new_arrivals_img_1,
    colors: [
      { color: "Beige", hex: "#F5F5DC", available: true },
      { color: "Orange", hex: "#FFA500", available: true },
      { color: "Brown", hex: "#8B4513", available: true },
    ],
  },
  {
    id: "2",
    name: "Midnight Vogue Dress",
    price: 4990.0,
    originalPrice: 5990.0,
    image: new_arrivals_img_2,
    colors: [
      { color: "Dark Green", hex: "#006400", available: true },
      { color: "Black", hex: "#000000", available: true },
      { color: "Gray", hex: "#808080", available: true },
    ],
  },
  {
    id: "3",
    name: "Midnight Vogue Dress",
    price: 4990.0,
    originalPrice: 5990.0,
    image: new_arrivals_img_3,
    colors: [
      { color: "Cream", hex: "#FFFDD0", available: true },
      { color: "Red", hex: "#FF0000", available: true },
    ],
  },
  {
    id: "4",
    name: "Midnight Vogue Dress",
    price: 4990.0,
    originalPrice: 5990.0,
    image: new_arrivals_img_4,
    colors: [
      { color: "Turquoise", hex: "#40E0D0", available: true },
      { color: "Blue", hex: "#0000FF", available: true },
      { color: "Teal", hex: "#008080", available: true },
    ],
  },
  {
    id: "5",
    name: "Midnight Vogue Dress",
    price: 4990.0,
    originalPrice: 5990.0,
    image: new_arrivals_img_5,
    colors: [
      { color: "Orange", hex: "#FFA500", available: true },
      { color: "Red", hex: "#FF0000", available: true },
      { color: "Brown", hex: "#8B4513", available: true },
    ],
  },
  {
    id: "6",
    name: "Midnight Vogue Dress",
    price: 4990.0,
    originalPrice: 5990.0,
    image: new_arrivals_img_6,
    colors: [
      { color: "Red", hex: "#FF0000", available: true },
      { color: "Pink", hex: "#FFC0CB", available: true },
      { color: "Burgundy", hex: "#800020", available: true },
    ],
  },
];

export default function LatestArrivals() {
  return (
    <div className="mx-auto max-w-7xl container py-12 md:px-4">
      {/* Heading Section */}
      <div className="mb-10">
        {/* H2 in the center with line to the left */}
        <div className="flex items-center justify-center w-full space-x-4 mb-2">
          <hr className="border-[#655656] flex-grow hidden md:block" />
          <h2 className="text-3xl text-center md:text-5xl flex font-medium text-[#655656] md:whitespace-nowrap">
            MEET OUR LATEST ARRIVALS
          </h2>
          <hr className="opacity-0 flex-grow hidden md:block" />
        </div>

        {/* P with text-right and width control for multiple lines */}
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

      {/* Products Grid */}
      <div className="hidden md:grid mt-10 grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white border-b border-b-black overflow-hidden h-auto">
            {/* Add to Cart Button */}
            <div className="absolute top-2 left-2 z-10">
              <Button
                size="sm"
                variant="secondary"
                className="bg-white hover:bg-gray-100 cursor-pointer">
                Add to Cart
                <FaBagShopping className="ml-2" />
              </Button>
            </div>

            {/* Product Image */}
            <div className="relative overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={450}
                height={500}
                className="w-full h-[500px] object-cover border border-black rounded-md"
              />
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-sm text-gray-900">{product.name}</h3>
              <div className="mt-1 flex items-center justify-between">
                <div className="flex items-center justify-center space-x-4">
                  <p className="text-lg font-semibold text-black">
                    LKR {product.price.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-400 line-through ">
                    {product.originalPrice.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-px h-6 bg-black mx-4"></div>{" "}
                  {/* Vertical line */}
                  <div className="flex gap-3">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className={cn(
                          "w-4 h-4 rounded-full",
                          !color.available && "opacity-50"
                        )}
                        style={{ backgroundColor: color.hex }}
                        title={color.color}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="justify-center flex items-center mt-12">
        <Button variant="outline">View all</Button>
      </div>
    </div>
  );
}
