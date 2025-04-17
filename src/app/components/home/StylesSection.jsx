/** @format */

import Image from "next/image";
import new_arrivals_img_6 from "../../../../public/Images/home-page/new_arrivals-img_6.png";
import new_arrivals_img_5 from "../../../../public/Images/home-page/new_arrivals-img_5.png";
import new_arrivals_img_4 from "../../../../public/Images/home-page/new_arrivals-img_4.png";

export default function StylesSection() {
  return (
    <div>
      <div className="mx-auto max-w-7xl container ">
        <div className="flex items-center justify-center w-full mb-2 space-x-4">
          <hr className="flex-grow border-t border-[#AF803C]" />
          <h2 className="text-5xl font-medium text-[#655656] whitespace-nowrap">
            ENCHANTING STYLES
          </h2>
          <hr className="flex-grow opacity-0" />
        </div>
      </div>
      <div className="h-20 flex mx-auto max-w-7xl justify-center items-center container my-4">
        <div className="w-px h-full bg-black"></div>
      </div>

      <div className="container h-fit max-w-7xl mx-auto flex items-end justify-between relative md:gap-4 ">
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
            className="border border-black rounded-md md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[650px]"
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
            className="border border-black rounded-md md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[550px]"
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
            className="border border-black rounded-md md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[450px]"
          />
        </div>
      </div>
    </div>
  );
}
