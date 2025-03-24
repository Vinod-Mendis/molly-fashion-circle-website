import Image from "next/image"

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
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. SED DO EIUSMOD TEMPOR
            </p>
            <p className="uppercase leading-tight text-sm">
              INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM
            </p>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden bg-[#B3C5C7]">
        <div className="absolute inset-0 p-8 z-10 flex flex-col justify-center">
          <div className="flex flex-col items-start">
            <h2 className="text-5xl text-white mb-2">FEMININE, FLOWY</h2>
            <div className="flex items-center gap-4">
              <h2 className="text-5xl text-white">&amp; ON SALE!</h2>
              <div className="inline-block bg-white text-[#AF803C] font-medium px-6 py-2 rounded-full">50% OFF</div>
            </div>
          </div>
          <div className="flex items-center mt-auto pt-8">
            <button className="bg-[#AF803C] text-white px-6 py-3 text-sm rounded cursor-pointer">View all</button>
            <div className="h-px bg-white flex-grow ml-4"></div>
          </div>
        </div>
        <div className="absolute right-0 h-full w-1/2 z-20">
          <Image
            src="/assets/deals-1.png"
            alt="Feminine flowy fashion"
            fill
            className="object-contain object-right"
            priority
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Denim Banner */}
        <div className="relative h-[400px] rounded-lg overflow-hidden bg-[#DCDCDC]">
          <div className="absolute inset-0 p-8 z-10 flex flex-col">
            <div>
              <h2 className="text-5xl text-white mb-2">
                DENIM
                <br />
                REFRESH
              </h2>
              <div className="inline-block bg-white text-[#AF803C] font-medium px-6 py-2 rounded-full">25% OFF</div>
            </div>
            <div className="flex items-center mt-auto">
              <button className="bg-[#AF803C] text-white px-6 py-3 text-sm rounded cursor-pointer">View all</button>
              <div className="h-px bg-white flex-grow ml-4"></div>
            </div>
          </div>
          <div className="absolute right-0 h-full w-[460px] z-20">
            <Image
              src="/assets/deals-2.png"
              alt="Denim refresh collection"
              fill
              className="object-contain object-right-bottom"
            />
          </div>
        </div>

        {/* Cool Styles Banner */}
        <div className="relative h-[400px] rounded-lg overflow-hidden bg-[#CDD9CA]">
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
              <button className="bg-[#AF803C] text-white px-6 py-3  text-sm rounded cursor-pointer  whitespace-nowrap">View all</button>
            </div>
            
            {/* Image takes the full left side */}
            <div className="absolute w-[250px] inset-0 z-20">
              <Image 
                src="/assets/deals-3.png" 
                alt="Cool styles collection" 
                fill 
                className="object-contain object-left-bottom" 
              />
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}