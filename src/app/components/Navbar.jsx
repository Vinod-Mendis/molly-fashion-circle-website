"use client"

import {Link} from 'next-view-transitions'
import Image from "next/image"
import { Search, ShoppingBag, ChevronDown } from "lucide-react"
import { Button } from "../components/ui/button"

const Navbar = () => {
  return (
    <nav className="">
      <div className="max-w-7xl mx-auto container md:px-4">
        <div className="flex justify-between items-center h-16 ">
          {/* Logo - Left Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/assets/logo (2).png" alt="logo" height={40} width={168} />
            </Link>
          </div>

          {/* Navigation Items - Middle Section */}
          <div className="flex items-center justify-center  space-x-1">
            <Link href="/" className="py-2 px-3 text-gray-700 hover:text-[#AC8537] font-medium">
              HOME
            </Link>
            <Link href="/men" className="py-2 px-3 text-gray-700 hover:text-[#AC8537] font-medium">
              MENS
            </Link>
            <Link href="/women" className="py-2 px-3 text-gray-700 hover:text-[#AC8537] font-medium">
              WOMENS
            </Link>
            <Link href="/store" className="py-2 px-3 text-gray-700 hover:text-[#AC8537] font-medium">
              STORE
            </Link>
            <Link href="/new-arrivals" className="py-2 px-3 text-gray-700 hover:text-[#AC8537] font-medium">
              NEW ARRIVALS
            </Link>
            <Link href="/contact" className="py-2 px-3 text-gray-700 hover:text-[#AC8537] font-medium">
              CONTACT US
            </Link>
          </div>

          {/* Right Section - Search, Language, Cart, Login */}
          <div className="flex items-center justify-center space-x-4">
            {/* Search Icon */}
            <button className="p-1 text-gray-700 hover:text-[#AC8537]">
              <Search className="h-5 w-5" />
            </button>

            {/* Language Selector */}
            <div className="flex items-center text-gray-700">
              <span className="text-sm">US</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </div>

            {/* Shopping Bag */}
            <Link href="/cart" className="p-1 text-gray-700 hover:text-[#AC8537] relative">
              <ShoppingBag className="h-5 w-5" />
            </Link>

            {/* Login Button */}
            <Button  className="bg-[#AC8537]   hover:bg-amber-700 text-white">
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

