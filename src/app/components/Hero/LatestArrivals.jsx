import Image from "next/image"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import { FaBagShopping } from "react-icons/fa6";

// Product data directly in the component file
const products = [
  {
    id: "1",
    name: "Midnight Vogue Dress",
    price: 4990.0,
    image: "/assets/new_arrivals_1.png",
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
    image: "/placeholder.svg?height=600&width=450",
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
    image: "/placeholder.svg?height=600&width=450",
    colors: [
      { color: "Cream", hex: "#FFFDD0", available: true },
      { color: "Red", hex: "#FF0000", available: true },
    ],
  },
  {
    id: "4",
    name: "Midnight Vogue Dress",
    price: 4990.0,
    image: "/placeholder.svg?height=600&width=450",
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
    image: "/placeholder.svg?height=600&width=450",
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
    image: "/placeholder.svg?height=600&width=450",
    colors: [
      { color: "Red", hex: "#FF0000", available: true },
      { color: "Pink", hex: "#FFC0CB", available: true },
      { color: "Burgundy", hex: "#800020", available: true },
    ],
  },
]

export default function LatestArrivals() {
  return (
    <div className="mx-auto max-w-7xl container py-12">
      {/* Heading Section */}
      <div className="mb-10">
        {/* H2 in the center with line to the left */}
        <div className="items-center justify-center flex space-x-4 mb-2">
          <hr className="border-[#655656] w-[25%]" />
          <h2 className="text-5xl w-[75%] flex font-medium text-[#655656] tracking-wider">
            MEET OUR LATEST ARRIVALS
          </h2>
        </div>

        {/* P with text-right and width control for multiple lines */}
        <div className="text-right max-w-md ml-auto flex items-center">
          <p className="text-gray-500  mr-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A consequuntur tenetur consequatur, explicabo in blanditiis molestias dolor impedit distinctio temporibus natus.
          </p>
          <hr className="flex-1 border-t border-gray-300" />
        </div>
      </div>

      {/* Products Grid */}
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="group relative bg-white rounded-lg border overflow-hidden h-auto">
            {/* Add to Cart Button */}
            <div className="absolute top-2 left-2 z-10">
              <Button size="sm" variant="secondary" className="bg-white hover:bg-gray-100">
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
                className="object-cover w-full"
              />
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
              <div className="mt-1 flex items-center justify-between">
                <p className="text-sm text-gray-500">LKR {product.price.toFixed(2)}</p>
                <div className="flex gap-1">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className={cn(
                        "w-4 h-4 rounded-full border-2 border-white ring-1 ring-gray-200",
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
        ))}
      </div>
    </div>
  )
}
