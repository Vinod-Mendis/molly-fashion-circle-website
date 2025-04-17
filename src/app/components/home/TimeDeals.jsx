/** @format */

import Image from "next/image";
import deals_img_1 from "../../../../public/Images/home-page/deals-img_1.png";
import deals_img_2 from "../../../../public/Images/home-page/deals-img_2.png";
import deals_img_3 from "../../../../public/Images/home-page/deals-img_3.png";
import { Button } from "../ui/button";

export default function TimeDeals() {
  return (
    <div className="container max-w-7xl mx-auto md:px-4">
      <div className="mb-10">
        {/* H2  */}
        <div className="items-center justify-center flex mb-2">
          <div className="flex-grow hidden md:block"></div>
          <h2 className="text-5xl font-medium text-[#655656] mx-4">
            LIMITED-TIME DEALS
          </h2>
          <div className="h-px bg-black flex-grow"></div>
        </div>

        {/* P  */}
        <div className="text-justify mt-4 flex items-center">
          <div className="w-20 h-px bg-[#AC8537] mr-4"></div>
          <div className="grid grid-rows-2 w-full">
            <p className="uppercase leading-tight text-sm">
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. SED DO
              EIUSMOD TEMPOR
            </p>
            <p className="uppercase leading-tight text-sm">
              INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM
              VENIAM
            </p>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative w-full h-[320px] mb-6 rounded-lg  bg-[#B3C5C7] group">
        <div className="absolute inset-0 p-8 z-10 flex flex-col justify-center">
          <div className="flex flex-col items-start">
            <h2 className="text-5xl text-white mb-2">FEMININE, FLOWY</h2>
            <div className="flex items-center gap-4">
              <h2 className="text-5xl text-white">&amp; ON SALE!</h2>
              <div className="inline-block bg-white text-[#AF803C] font-medium px-6 py-2 rounded-full">
                50% OFF
              </div>
            </div>
          </div>
          <div className="flex items-center mt-auto pt-8">
            <Button>View all</Button>
            <div className="h-px bg-white flex-grow ml-4"></div>
          </div>
        </div>
        <div className="absolute right-0 h-full w-1/2 z-20">
          <Image
            src={deals_img_1}
            alt="Feminine flowy fashion"
            width={220}
            height={220}
            className="pt-5 absolute bottom-0 right-20 group-hover:scale-150 group-hover:translate-y-[-4.9rem] transition-transform duration-700"
            priority
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Denim Banner */}
        <div className="relative h-[400px] rounded-lg bg-[#DCDCDC] group">
          <div className="absolute inset-0 p-8 z-10 flex flex-col">
            <div>
              <h2 className="text-5xl text-white mb-2">
                DENIM
                <br />
                REFRESH
              </h2>
              <div className="inline-block bg-white text-[#AF803C] font-medium px-6 py-2 rounded-full">
                25% OFF
              </div>
            </div>
            <div className="flex items-center mt-auto">
              <Button>View all</Button>
              <div className="h-px bg-white flex-grow ml-4"></div>
            </div>
          </div>
          <div className="absolute right-0 h-full w-[460px] z-20">
            <Image
              src={deals_img_2}
              alt="Denim refresh collection"
              width={300}
              height={300}
              className="pt-5 absolute bottom-0 right-0 group-hover:scale-125 group-hover:translate-y-[-3.4rem] transition-transform duration-700"
            />
          </div>
        </div>

        {/* Cool Styles Banner */}
        <div className="relative h-[400px] rounded-lg group bg-[#CDD9CA]">
          <div className="absolute inset-0 z-10">
            <div className="absolute top-0 right-0 p-8 z-30 flex flex-col items-end">
              <h2 className="text-5xl text-white mb-2 text-right">
                COOL
                <br />
                STYLES!
              </h2>
              <div className="inline-block bg-white text-[#AF803C] font-medium px-6 py-2 rounded-full">
                25% OFF
              </div>
            </div>
            <div className="absolute bottom-8 right-0 left-0 pr-8  flex items-center ">
              <div className="h-px bg-white flex-grow mr-4 ml-4 "></div>
              <Button>View all</Button>
            </div>

            {/* Image takes the full left side */}
            <div className="absolute w-[280px] inset-0 z-20">
              <Image
                src={deals_img_3}
                alt="Cool styles collection"
                width={400}
                height={400}
                className="pt-5 absolute bottom-0 group-hover:scale-125 group-hover:translate-y-[-3.2rem] transition-transform duration-700 ml-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
