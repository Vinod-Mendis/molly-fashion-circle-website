/** @format */

import Image from "next/image";
import deals_img_1 from "../../../../public/Images/home-page/deals-img_1.png";
import deals_img_2 from "../../../../public/Images/home-page/deals-img_2.png";
import deals_img_3 from "../../../../public/Images/home-page/deals-img_3.png";
import { Button } from "../ui/button";

export default function TimeDeals() {
  return (
    <div className="container max-w-7xl mx-auto md:px-4 mb-20">
      <div className="mb-10">
        {/* H2  */}
        <div className="items-center justify-center flex mb-2">
          <div className="flex-grow hidden md:block"></div>
          <h2 className="text-3xl md:text-5xl text-center font-medium text-[#655656] mx-4">
            LIMITED-TIME DEALS
          </h2>
          <div className="h-px bg-black flex-grow hidden md:block"></div>
        </div>

        {/* P  */}
        <div className="text-justify mt-4 items-center hidden md:flex">
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
      <div className="pr-4 sm:pr-0">
        <div className="relative w-full h-[280px] sm:h-[320px] mb-4 rounded-r-md sm:rounded-lg  bg-[#B3C5C7] group">
          <div className="absolute inset-0 p-8 z-10 flex flex-col justify-center">
            <div className="flex flex-col items-start">
              <h2 className="text-4xl sm:text-5xl text-white mb-2">
                FEMININE, <br className="sm:hidden"/>FLOWY
              </h2>
              <div className="flex items-center gap-4">
                <h2 className="text-5xl text-white hidden sm:block">
                  &amp; ON SALE!
                </h2>
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
              className="pt-5 absolute bottom-0 right-0 sm:right-20 group-hover:scale-150 group-hover:translate-y-[-4.9rem] transition-transform duration-700"
              priority
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Denim Banner */}
        <div className="pl-4 sm:pl-0">
          <div className="relative h-[280px] sm:h-[400px] rounded-l-md sm:rounded-lg bg-[#DCDCDC] group">
            <div className="absolute h-full w-full right-0 text-right sm:text-left sm:inset-0 p-8 z-10 flex flex-col">
              <div>
                <h2 className="text-4xl sm:text-5xl text-white mb-2">
                  DENIM
                  <br />
                  REFRESH
                </h2>
                <div className="inline-block bg-white text-[#AF803C] font-medium px-6 py-2 rounded-full">
                  25% OFF
                </div>
              </div>
              <div className="flex sm:flex-row flex-row-reverse  items-center mt-auto">
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
                className="pt-5 absolute bottom-0 right-50 sm:right-0 group-hover:scale-125 group-hover:translate-y-[-3.4rem] transition-transform duration-700 w-64 sm:w-[300px]"
              />
            </div>
          </div>
        </div>

        {/* Cool Styles Banner */}
        <div className="pr-4 sm:pr-0">
          <div className="relative h-[280px] sm:h-[400px] rounded-r-md sm:rounded-lg group bg-[#CDD9CA]">
            <div className="absolute inset-0 z-10">
              <div className="absolute top-0 left-0 sm:right-0 p-8 z-30 flex flex-col items-end">
                <h2 className="text-4xl sm:text-5xl text-white mb-2 text-left sm:text-right">
                  COOL
                  <br />
                  STYLES!
                </h2>
                <div className="inline-block bg-white text-[#AF803C] font-medium px-6 py-2 rounded-full">
                  25% OFF
                </div>
              </div>
              <div className="absolute bottom-8 right-0 left-0 px-8  flex items-center flex-row-reverse sm:flex-row">
                <div className="h-px bg-white flex-grow mr-4 ml-4 "></div>
                <Button>View all</Button>
              </div>

              {/* Image takes the full left side */}
              <div className="absolute w-[280px] bottom-0 right-0 sm:inset-0 z-20">
                <Image
                  src={deals_img_3}
                  alt="Cool styles collection"
                  width={400}
                  height={400}
                  className="pt-5 absolute bottom-0 right-0 group-hover:scale-125 group-hover:translate-y-[-3.2rem] transition-transform duration-700 sm:ml-10 w-60 sm:w-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
