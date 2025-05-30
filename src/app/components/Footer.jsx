/** @format */
"use client";

import Image from "next/image";
import { Link } from "next-view-transitions";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoFacebook } from "react-icons/io";
import Marquee from "react-fast-marquee";
import footer_payment_methods from "../../../public/Images/nav-and-footer/footer-payment_methods.png";
import footer_molly_logo from "../../../public/Images/nav-and-footer/footer-molly_logo.png";
import { useEffect, useState } from "react";

const Footer = () => {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Check if the current URL contains /pages/coming-soon
    const currentUrl = window.location.href;
    if (currentUrl.includes("/pages/coming-soon")) {
      setShouldRender(false);
    } else {
      setShouldRender(true);
    }
  }, []);

  // Return null if on the coming-soon page
  if (!shouldRender) {
    return null;
  }
  return (
    <footer className="bg-[#AC8537] rounded-t-4xl">
      {/* Desktop View */}
      <div className="hidden md:block max-w-7xl mx-auto container h-[350] pt-5 md:px-4">

        <div className="h-[30%] flex">
          <div className="w-[20%] items-center flex border-r-white border-r border-b border-b-white">
            <Image src={footer_molly_logo} alt="logo" height={20} width={200} />
          </div>
          <div className="w-[80%] border-b border-b-white flex justify-end items-center relative">
            <div className="relative">
              <Image
                src={footer_payment_methods}
                alt="footer image"
                width={250}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className="h-[80%] flex">
          <div className="w-[80%] uppercase text-white mt-4">
            <p className="text-xs block">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <p className="text-xs block">
              {" "}
              adipiscing elit. Sed do eiusmod tempor
            </p>
            <p className="text-xs block">
              {" "}
              incididunt ut labore et dolore magna{" "}
            </p>
            <p className="text-xs block">aliqua. Ut enim ad minim veniam.</p>
            <div className="mt-14 w-fit ">
              <Link
                href="/"
                className="text-white hover:text-[#201b11] transition flex items-center gap-3"
              >
                <RiInstagramFill className="h-6 w-6" />
                <p className="text-xs">INSTAGRAM</p>
              </Link>
            </div>
            <div className="mt-4 w-fit ">
              <Link
                href="/"
                className="text-white hover:text-[#201b11] transition flex items-center gap-3"
              >
                <IoLogoFacebook className="h-6 w-6" />
                <p className="text-xs">FACEBOOK</p>
              </Link>
            </div>
          </div>
          <div className="w-[20%] border-l border-l-white pl-8 flex flex-col space-y-4">
            <Link href="/" className="text-white hover:text-[#201b11] mt-4">
              HOME
            </Link>
            <Link href="/men" className="text-white hover:text-[#201b11]">
              MENS
            </Link>
            <Link href="/women" className="text-white hover:text-[#201b11]">
              WOMENS
            </Link>
            <Link href="/store" className="text-white hover:text-[#201b11]">
              STORE
            </Link>
            <Link
              href="/new-arrivals"
              className="text-white hover:text-[#201b11]"
            >
              NEW ARRIVALS
            </Link>
            <Link href="/contact" className="text-white hover:text-[#201b11]">
              CONTACT US
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile  View */}
      <div className="md:hidden w-full flex flex-col items-center text-white px-4 pt-6">
        {/* Logo */}
        <div className="w-full flex justify-center border-b border-white pb-4">
          <Image src={footer_molly_logo} alt="logo" height={20} width={180} />
        </div>

        {/* Navigation Links */}
        <div className="w-full flex flex-col items-center space-y-3 mt-6 border-b border-white pb-6">
          <Link href="/" className="text-white hover:text-[#201b11]">
            HOME
          </Link>
          <Link href="/men" className="text-white hover:text-[#201b11]">
            MENS
          </Link>
          <Link href="/women" className="text-white hover:text-[#201b11]">
            WOMENS
          </Link>
          <Link href="/store" className="text-white hover:text-[#201b11]">
            STORE
          </Link>
          <Link
            href="/new-arrivals"
            className="text-white hover:text-[#201b11]"
          >
            NEW ARRIVALS
          </Link>
          <Link href="/contact" className="text-white hover:text-[#201b11]">
            CONTACT US
          </Link>
        </div>

        {/* Social Media */}
        <div className="flex justify-center space-x-6 my-4">
          <Link href="/" className="text-white hover:text-[#201b11]">
            <RiInstagramFill className="h-8 w-8" />
          </Link>
          <div className="border-r border-white"></div>
          <Link href="/" className="text-white hover:text-[#201b11]">
            <IoLogoFacebook className="h-8 w-8" />
          </Link>
        </div>
      </div>

      <div className="hidden md:block h-[20] px-24 mx-3 bg-white mt-6 rounded-full"></div>

      {/*  marquee */}
      <div className="w-full text-white py-6 border-t border-t-white mt-4 md:mt-10 border-b border-b-white">
        <div className="overflow-hidden">
          <Marquee speed={40} gradient={false} className="overflow-hidden py-2">
            <span className="inline-flex items-center text-3xl md:text-5xl">
              MOLLY FASHION CIRCLE ✱ MOLLY FASHION CIRCLE ✱ MOLLY FASHION CIRCLE
              ✱ MOLLY FASHION CIRCLE ✱
            </span>
          </Marquee>
        </div>
      </div>

      <div className="md:hidden flex justify-center my-4">
        <Image
          src={footer_payment_methods}
          alt="payment methods"
          width={200}
          height={80}
        />
      </div>

      {/* Copyright & Links */}
      <div className="text-white py-4 px-4 flex flex-col md:flex-row md:justify-between text-center md:text-left text-xs">
        <div className="mb-2 md:mb-0">
          © MOLLY FASHION CIRCLE 2025. ALL RIGHTS RESERVED
        </div>
        <div className="flex justify-center md:justify-end gap-4">
          <a href="/privacy-policy" className="hover:underline">
            PRIVACY POLICY
          </a>
          <a href="/terms-conditions" className="hover:underline">
            TERMS & CONDITIONS
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
