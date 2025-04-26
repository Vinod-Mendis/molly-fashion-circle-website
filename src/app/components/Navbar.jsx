"use client";

import { useState } from "react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { Search, ShoppingBag, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";
import navbar_molly_logo from "../../../public/Images/nav-and-footer/navbar-molly_logo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/men", label: "MENS" },
    { href: "/women", label: "WOMENS" },
    { href: "/store", label: "STORE" },
    { href: "/new-arrivals", label: "NEW ARRIVALS" },
    { href: "/pages/contact", label: "CONTACT US" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-gradient-to-b from-white to-white/0 py-4">
      <div className="max-w-7xl mx-auto container px-4">
        {/* Mobile*/}
        <div className="flex justify-between items-center lg:hidden px-4">
          {/* Logo */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center">
              <Image
                src={navbar_molly_logo}
                alt="logo"
                height={30}
                width={120}
              />
            </Link>
          </div>

          {/* Search and Cart Icons  */}
          <div className="flex items-center space-x-2">
            <button className="p-1 text-gray-700 hover:text-[#AC8537]">
              <Search className="h-5 w-5" />
            </button>
            <Link
              href="/cart"
              className="p-1 text-gray-700 hover:text-[#AC8537] relative"
            >
              <ShoppingBag className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex justify-between items-center">
          {/* Logo - Left Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src={navbar_molly_logo}
                alt="logo"
                height={40}
                width={168}
              />
            </Link>
          </div>

          {/* Navigation Items - Middle Section */}
          <div className="flex items-center justify-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 px-3 hover:text-[#AC8537]"
              >
                {link.label}
              </Link>
            ))}
          </div>

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
            <Link
              href="/cart"
              className="p-1 text-gray-700 hover:text-[#AC8537] relative"
            >
              <ShoppingBag className="h-5 w-5" />
            </Link>

            {/* Login Button */}
            <Button>Login</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
