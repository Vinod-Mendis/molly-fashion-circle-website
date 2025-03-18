

import Image from "next/image"

export default function TimeDeals() {
  return (
    <div className="container max-w-7xl mx-auto md:px-4">
         <div className="mb-10">
        {/* H2 in the center with line to the left */}
        <div className="items-center justify-center flex mb-2">
        <div className="flex-grow hidden md:block"></div>
        <h2 className="text-5xl font-medium text-[#655656] mx-4">
            LIMITED-TIME DEALS
          </h2>
          <div className="h-px bg-black flex-grow"></div>
          
        </div>

        {/* P with text-right and width control for multiple lines */}
        <div className="text-justify mt-4 flex items-center">
        <div className="w-20 h-px bg-[#AC8537] mr-4"></div>
          <p className=" max-w-md uppercase leading-tight text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A consequuntur tenetur consequatur, explicabo in blanditiis molestias dolor impedit distinctio temporibus natus.
          </p>
        </div>
      </div>
      {/* Hero Banner */}
      <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden bg-[#B3C5C7]">
        <div className="absolute inset-0 flex flex-col justify-center p-8 z-10">
          <h2 className="text-5xl text-white mb-2">FEMININE, FLOWY</h2>
          <div className="flex space-x-2 items-center  gap-4">
            <h2 className="text-5xl text-white mb-2">& ON SALE!</h2>
            <div className="inline-block bg-white text-[#AF803C] font-medium px-6 py-2 rounded-full">50% OFF</div>
          </div>
          <div className="flex items-center gap-4 mt-7">
            <button className="bg-[#AF803C] text-white px-6 py-3 text-sm rounded">View all</button>
            <div className="h-px bg-white flex-grow"></div>
          </div>
        </div>
        <Image
          src="/assets/deals-1.png"
          alt="Feminine flowy fashion"
          fill
          className="object-contain object-right z-20"
          priority
        />
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Denim Banner */}
        <div className="relative h-[350px] rounded-lg overflow-hidden bg-[#DCDCDC]">
          <div className="absolute inset-0 flex flex-col justify-center p-8 z-10">
            <h2 className="text-5xl text-white mb-2">
              DENIM
              <br />
              REFRESH
            </h2>
            <div className="inline-block bg-white text-[#AF803C] font-medium px-6 py-2 rounded-full w-fit">25% OFF</div>
            <div className="flex items-center gap-4 mt-10">
              <button className="bg-[#AF803C] text-white px-6 py-3 text-sm rounded">View all</button>
              <div className="h-px bg-white flex-grow"></div>
            </div>
          </div>
          <Image
            src="/assets/deals-2.png"
            alt="Denim refresh collection"
            fill
            className="object-contain object-right z-20"
          />
        </div>

        {/* Cool Styles Banner */}
        <div className="relative h-[350px] rounded-lg overflow-hidden bg-[#CDD9CA]">
          <div className="absolute inset-0 flex z-10">
            {/* Image container on the left */}
            <div className="relative w-1/2 h-full z-20">
              <Image src="/assets/deals-3.png" alt="Cool styles collection" fill className="object-contain" />
            </div>
            {/* Content container on the right */}
            <div className="w-1/2 flex flex-col justify-center p-8">
              <h2 className="text-5xl text-white mb-2 text-right">
                COOL
                <br />
                STYLES!
              </h2>
              <div className="inline-block bg-white text-[#AF803C] font-medium px-6 py-2 rounded-full w-fit ml-auto">
                25% OFF
              </div>
              <div className="flex items-center gap-4 mt-10">
                <div className="h-px bg-white flex-grow"></div>
                <button className="bg-[#AF803C] text-white px-6 py-3 text-sm rounded">View all</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

