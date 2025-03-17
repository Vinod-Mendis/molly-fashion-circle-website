import Image from "next/image"

export default function FashionLayout() {
  return (
    <div className="max-w-7xl mx-auto container">
      {/* Header with line to the left */}
      <div className="flex items-center justify-center mb-8">
        <div className="w-24 h-px bg-gray-300 mr-4"></div>
        <h1 className="text-5xl font-light text-gray-700 tracking-wider">ENCHANTING STYLES</h1>
        <div className="w-24 h-px bg-gray-300 ml-4 hidden"></div>
      </div>
      <div className="flex justify-center">
        <div className="w-0.5 h-12 bg-gray-300"></div>
      </div>

      {/* Main Content Grid - Desktop focused */}
      <div className="grid grid-cols-3 gap-4">
        {/* Left Section */}
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold mb-4">
            SHOP THE
            <br />
            LATEST TRENDS
          </h2>
          <div className="rounded-lg overflow-hidden border border-gray-200">
            <div className="relative h-[400px] w-full">
              <Image
                src="/placeholder.svg?height=600&width=400"
                alt="Model in red fluffy coat"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="lg:col-span-1">
          <div className="h-full flex flex-col">
            <div className="mb-2">
              <p className="text-xs text-gray-500 max-w-xs">
                LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET
                DOLORE MAGNA ALIQUA
              </p>
            </div>
            <h2 className="text-2xl font-light text-gray-700 mb-4">
              FIND YOUR
              <br />
              PERFECT LOOK
            </h2>
            <div className="flex-grow rounded-lg overflow-hidden border border-gray-200 mt-2">
              <div className="relative h-[300px] w-full">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Model in teal sweater"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-1">
          <div className="h-full flex flex-col">
            <div className="mb-4">
              <div className="w-0.5 h-12 bg-gray-300 ml-auto mr-4"></div>
            </div>
            <h2 className="text-2xl font-bold mb-4">
              FRESH FITS
              <br />
              AWAIT
            </h2>
            <div className="flex-grow rounded-lg overflow-hidden border border-gray-200 mt-2">
              <div className="relative h-[300px] w-full">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Model in striped orange dress"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

