import Image from "next/image";

export default function Intro() {
  return (
    <div className="w-screen h-screen relative">
      {/* Background Image */}
      <Image
        src="/assets/hero-bg.png"
        alt="hero"
        fill
        className="object-cover "
      />
      
      {/* Text Overlay - Centered in page */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Top row */}
          <div className="flex mb-2">
            <div className="flex-shrink-0 mr-8">
              <h1 className="text-5xl  whitespace-nowrap">SHOP HASSLE-FREE</h1>
            </div>
            <div className="flex-grow">
              <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labo</p>
            </div>
          </div>
          
          {/* Bottom row */}
          <div className="flex">
            <div className="flex-grow mr-8">
              <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
            <div className="flex-shrink-0">
              <h1 className="text-5xl  whitespace-nowrap">LOOK STUNNING</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}