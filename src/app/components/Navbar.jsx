/** @format */

"use client";

import { useEffect, useState } from "react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { Search, ShoppingBag, ChevronDown, Menu, X } from "lucide-react";

import { Button } from "../components/ui/button";
import navbar_molly_logo from "../../../public/Images/nav-and-footer/navbar-molly_logo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsVisible(true);
      }

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/men", label: "MENS" },
    { href: "/women", label: "WOMENS" },
    { href: "/store", label: "STORE" },
    { href: "/new-arrivals", label: "NEW ARRIVALS" },
    { href: "/pages/contact", label: "CONTACT US" },
  ];

  return (
    <nav
      className={`fixed top-0 h-20 lg:h-32 z-[100] w-full ${
        mobileMenuOpen
          ? "bg-white"
          : "bg-gradient-to-b from-white via-white via-20% to-white/0"
      }  py-4 ${
        isVisible ? "transform-none" : "-translate-y-full"
      } transition-transform duration-300 ease-in-out`}>
      <div className="max-w-7xl mx-auto container px-4">
        {/* Mobile*/}
        <div className="flex justify-between items-center lg:hidden px-4">
          {/* Hamburger Menu */}
          <button
            className="p-1 text-gray-700 hover:text-[#AC8537]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Logo */}
          <div className="flex-1 flex justify-center">
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
              className="p-1 text-gray-700 hover:text-[#AC8537] relative">
              <ShoppingBag className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className={`lg:hidden bg-white absolute top-16 left-0 right-0 z-[101] shadow-lg border-t ${
              isVisible ? "transform-none" : "-translate-y-full"
            } transition-transform duration-300 ease-in-out`}>
            <div className="flex flex-col py-4 px-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-2 text-gray-800 hover:text-[#AC8537] border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Desktop View  */}
        <div className="hidden lg:flex justify-between items-center">
          {/* Logo  */}

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

          {/* Navigation Items  */}
          <div className="flex items-center justify-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 px-3 hover:text-[#AC8537]">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-center space-x-4">
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
        {/* {mobileMenuOpen && (
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
        )} */}
      </div>
    </nav>
  );
};

export default Navbar;
