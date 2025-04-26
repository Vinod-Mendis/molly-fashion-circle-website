/** @format */

"use client";

import { Link } from "next-view-transitions";
import Image from "next/image";
import { Search, ShoppingBag, Menu } from "lucide-react";
import { Button } from "../components/ui/button";
import { useState } from "react";
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
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo - Left Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src={navbar_molly_logo}
                alt="logo"
                height={40}
                width={140}
                className="max-w-[120px] sm:max-w-full"
              />
            </Link>
          </div>

          {/* Navigation Items - Middle Section (Desktop only) */}
          <div className="hidden lg:flex items-center justify-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 px-2 text-sm lg:text-base hover:text-[#AC8537]">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section - Search, Cart, Login */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Search Icon */}
            <button className="p-1 text-gray-700 hover:text-[#AC8537]">
              <Search className="h-5 w-5" />
            </button>

            {/* Shopping Bag */}
            <Link
              href="/cart"
              className="p-1 text-gray-700 hover:text-[#AC8537] relative">
              <ShoppingBag className="h-5 w-5" />
            </Link>

            {/* Login Button - Hide on smallest screens */}
            <Button className="hidden sm:flex text-xs sm:text-sm">Login</Button>

            {/* Mobile Menu Button - Only show on mobile */}
            <button
              className="p-1 lg:hidden text-gray-700 hover:text-[#AC8537]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu - Only visible when open */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 py-2 bg-white rounded-md shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 px-4 hover:bg-gray-100 hover:text-[#AC8537]"
                onClick={() => setMobileMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
