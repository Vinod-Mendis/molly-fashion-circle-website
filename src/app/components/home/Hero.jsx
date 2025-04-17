/** @format */

import Image from "next/image";
import hero_arrow_head from "../../../../public/Images/home-page/hero-arrow_head.png";

export default function Hero() {
  return (
    <div className="h-[100svh] relative overflow-hidden rounded-b-4xl">
      {/* Background Image */}
      {/* <Image src={heroBg} alt="hero" fill className="object-cover " /> */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover">
        <source
          src="https://res.cloudinary.com/vccpsacloud/video/upload/v1744904277/dzq60wvulaf7xrbzsjs7.mp4"
          type="video/mp4"
        />
      </video>

      {/* Text Overlay - Centered in page */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <div className="max-w-[60rem] mx-auto">
          {/* Top row */}
          <div className="flex mb-2">
            <div className="flex-shrink-0 mr-8">
              <h1 className="text-6xl  whitespace-nowrap">SHOP HASSLE-FREE</h1>
            </div>
            <div className="flex-grow">
              <p className="text-sm text-justify uppercase font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labo
              </p>
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex">
            <div className="flex-grow mr-8">
              <p className="text-sm text-justify uppercase font-light ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <div className="flex-shrink-0">
              <h1 className="text-6xl  whitespace-nowrap">LOOK STUNNING</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full flex flex-col gap-1 items-center justify-center text-center text-white pb-2">
        <p>Shop our New Arrivals</p>
        <Image
          src={hero_arrow_head}
          alt="hero-arrow-head"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
}
