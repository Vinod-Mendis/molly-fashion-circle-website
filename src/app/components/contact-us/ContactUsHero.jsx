/** @format */

import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaFax } from "react-icons/fa";
import Image from "next/image";

export default function ContactUsHero() {
  return (
    <div className="mx-auto max-w-7xl container md:px-4 relative">
      {/* Right image section  */}
      <div className="absolute right-0 top-0 w-[40%] h-full z-20">
        <div className="relative w-full h-full">
          <Image
            src="/assets/contactus.png"
            alt="Fashion model"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "top right",
            }}
            priority
          />
        </div>
      </div>

      {/* Heading */}
      <div className="flex flex-row mt-14 relative z-10">
        <div className="w-[40%]">
          <h1 className="uppercase text-7xl">contact us</h1>
        </div>
        <div className="flex w-[60%] items-center">
          <hr className="border-[#888888] border-1 w-full relative z-10" />
        </div>
      </div>

      {/* Content and form */}
      <div className="flex">
        <div className="w-[60%]  relative z-10">
          {/* content-para*/}
          <div className="mt-2 w-[80%]">
            <p className="uppercase text-xs max-w-md text-[#888888]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          {/* contact info */}
          <div className="mt-20 relative pl-8">
            {/* Phone section */}
            <div className="flex relative">
              <div className="absolute -left-8">
                <ImPhone size={15} color="#A27D2A" />
              </div>
              <div>
                <div className="uppercase text-xs text-[#A27D2A] mb-1">
                  PHONE
                </div>
                <div className="text-sm">0912345678</div>
                <div className="text-sm">0917654321</div>
              </div>
              {/* Vertical line */}
              <div className="absolute left-2.5 -translate-x-10 top-7 h-20 border-l border-[#DDDDDD]"></div>
            </div>

            {/* Gap between phone and email */}
            <div className="h-15"></div>

            {/* Email section */}
            <div className="flex relative">
              <div className="absolute -left-8">
                <MdEmail size={15} color="#A27D2A" />
              </div>
              <div>
                <div className="uppercase text-xs text-[#A27D2A] mb-1">
                  EMAIL
                </div>
                <div className="text-sm">mollyfashioncircle@gmail.com</div>
              </div>
              {/* Vertical line */}
              <div className="absolute left-2.5 -translate-x-10 top-7 h-20 border-l border-[#DDDDDD]"></div>
            </div>

            {/* Gap between email and fax */}
            <div className="h-20"></div>

            {/* Fax section */}
            <div className="flex relative">
              <div className="absolute -left-8">
                <FaFax size={15} color="#A27D2A" />
              </div>
              <div>
                <div className="uppercase text-xs text-[#A27D2A] mb-1">FAX</div>
                <div className="text-sm">0912345678</div>
                <div className="text-sm">0912345678</div>
              </div>
            </div>
          </div>
          {/*Question section*/}
          <div className="mt-20 pb-16">
            <h2 className="text-5xl">Got Style Questions?</h2>
            <h2 className="text-5xl mb-6">Drop Us a Hello!</h2>

            <form className="space-y-4 max-w-md mt-20">
              <div>
                <label className="block text-xs uppercase mb-1">Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-100  border-2 border-gray-200 p-2 rounded"
                />
              </div>
              <div>
                <label className="block text-xs uppercase mb-1">Email</label>
                <input
                  type="email"
                  className="w-full bg-gray-100 border-2 border-gray-200 p-2 rounded"
                />
              </div>
              <div>
                <label className="block text-xs uppercase mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full bg-gray-100 border-2 border-gray-200 p-2 rounded"
                />
              </div>
              <div>
                <label className="block text-xs uppercase mb-1">Message</label>
                <textarea className="w-full bg-gray-100 p-2 border-2 border-gray-200 rounded h-24"></textarea>
              </div>
              <button className="bg-[#AF803C] text-white px-8 py-3 text-sm rounded cursor-pointer whitespace-nowrap">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
