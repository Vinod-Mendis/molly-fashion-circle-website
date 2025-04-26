/** @format */

import Image from "next/image";
import new_arrivals_img_6 from "../../../../public/Images/home-page/new_arrivals-img_6.png";
import new_arrivals_img_5 from "../../../../public/Images/home-page/new_arrivals-img_5.png";
import new_arrivals_img_4 from "../../../../public/Images/home-page/new_arrivals-img_4.png";
import styles_mobile_image_1 from "../../../../public/Images/home-page/styles-mobile-image_1.png";
import styles_mobile_image_2 from "../../../../public/Images/home-page/styles-mobile-image_2.png";
import styles_mobile_image_3 from "../../../../public/Images/home-page/styles-mobile-image_3.png";
import styles_mobile_shadow_blob from "../../../../public/Images/home-page/styles-mobile-shadow_blob.png";

export default function StylesSection() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 container relative">
        <div className="flex items-center justify-center w-full mb-2 space-x-4">
          <hr className="flex-grow border-t border-[#AF803C] opacity-0 sm:opacity-100" />
          <h2 className="text-3xl md:text-5xl font-medium text-[#655656] whitespace-nowrap">
            ENCHANTING STYLES
          </h2>
          <hr className="flex-grow opacity-0" />
        </div>
      </div>
      <div className="h-14 flex mx-auto max-w-7xl justify-center items-center container my-4">
        <div className="w-px h-full bg-black"></div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden relative flex flex-col w-full px-4 ">
        <div className="">
          <p className="text-4xl uppercase font-semibold">
            Shop the <br />
            Latest Trends
          </p>
        </div>
        <Image
          src={styles_mobile_image_1}
          alt="img1"
          width={120}
          height={120}
          className="absolute right-0 -top-20 z-10"
        />
        <Image
          src={styles_mobile_shadow_blob}
          alt="img1"
          width={600}
          height={600}
          className="absolute -right-30 -top-20 -z-10"
        />
        <div className="h-80 flex mx-auto max-w-7xl justify-center items-center container my-4">
          <div className="w-px h-full bg-black"></div>
        </div>
        <div className="flex justify-center">
          <p className="ml-12 text-4xl uppercase font-light">
            Find Your
            <br />
            Perfect Look
          </p>
        </div>
        <Image
          src={styles_mobile_image_2}
          alt="img1"
          width={120}
          height={120}
          className="absolute left-0 top-30 z-10"
        />
        <Image
          src={styles_mobile_shadow_blob}
          alt="img1"
          width={600}
          height={600}
          className="absolute -left-40 top-50 -z-10"
        />
        <div className="h-52 flex mx-auto max-w-7xl justify-center items-center container my-4">
          <div className="w-px h-full bg-black"></div>
        </div>
        <div className="flex items-start">
          <p className="ml-12 text-4xl text-right uppercase font-semibold">
            Fresh Fits <br />
            Await
          </p>
        </div>
        <Image
          src={styles_mobile_image_3}
          alt="img1"
          width={210}
          height={210}
          className="absolute right-0 bottom-0"
        />
        <Image
          src={styles_mobile_shadow_blob}
          alt="img1"
          width={600}
          height={600}
          className="absolute -right-25 bottom-10 scale-150 -z-10"
        />
        <div className="h-52 flex mx-auto max-w-7xl justify-center items-center container my-4">
          <div className="w-px h-full bg-black"></div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex container h-fit max-w-7xl mx-auto items-end justify-between relative md:gap-4 ">
        {/* absolute row */}
        <div className="absolute top-0 flex justify-between items-center w-full gap-6">
          <div className="h-px w-full"></div>
          <p className="max-w-xs uppercase text-justify  leading-tight text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <div className="h-px bg-black w-full"></div>
        </div>

        {/* col 1 */}
        <div className="flex flex-col gap-4 w-fit h-fit">
          <h1 className="md:text-3xl lg:text-4xl xl:text-5xl font-semibold uppercase px-2">
            Shop the
            <br /> Latest Trends
          </h1>
          <Image
            src={new_arrivals_img_6}
            alt="img1"
            width={560}
            height={650}
            className="border border-black rounded-md"
          />
        </div>

        {/* col 2 */}
        <div className="flex flex-col gap-4 w-fit h-fit">
          <h1 className="md:text-3xl lg:text-4xl xl:text-5xl font-extralight uppercase px-2">
            Find Your
            <br /> Perfect Look
          </h1>
          <Image
            src={new_arrivals_img_4}
            alt="img2"
            width={460}
            height={500}
            className="border border-black rounded-md"
          />
        </div>

        {/* col 3 */}
        <div className="flex flex-col gap-4 w-fit h-fit">
          <h1 className="md:text-3xl lg:text-4xl xl:text-5xl font-semibold uppercase px-2">
            Fresh Fits
            <br /> Await
          </h1>
          <Image
            src={new_arrivals_img_5}
            alt="img3"
            width={340}
            height={400}
            className="border border-black rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
