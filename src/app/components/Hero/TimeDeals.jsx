import Image from 'next/image';
import Link from 'next/link';

const TimeDeals = () => {
  return (
    <div className="max-w-7xl mx-auto container">
      {/* Top Banner - Feminine & Flowy */}
      <div className="relative mb-6 bg-blue-100 rounded-lg overflow-hidden">
        <div className="p-8 flex items-center justify-between">
          <div className="z-10">
            <h2 className="text-4xl font-bold text-white mb-2">
              FEMININE, FLOWY<br />
              & ON SALE!
            </h2>
            <div className="inline-block bg-white text-black font-medium px-4 py-1 rounded-full mb-4">
              50% OFF
            </div>
            <div>
              <Link href="/view-all">
                <button className="bg-amber-700 text-white px-4 py-2 text-sm rounded">View all</button>
              </Link>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 h-full">
            <Image 
              src="/feminine-model.jpg" 
              alt="Woman in orange flowy outfit" 
              width={300} 
              height={400}
              className="h-full w-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom Grid - Two Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Denim Refresh Card */}
        <div className="relative bg-gray-200 rounded-lg overflow-hidden">
          <div className="p-8 flex items-center justify-between">
            <div className="z-10">
              <h2 className="text-4xl font-bold text-white mb-2">
                DENIM<br />
                REFRESH
              </h2>
              <div className="inline-block bg-white text-black font-medium px-4 py-1 rounded-full mb-4">
                25% OFF
              </div>
              <div>
                <Link href="/view-all">
                  <button className="bg-amber-700 text-white px-4 py-2 text-sm rounded">View all</button>
                </Link>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 h-full">
              <Image 
                src="/denim-model.jpg" 
                alt="Person in denim outfit" 
                width={250} 
                height={350}
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Cool Styles Card */}
        <div className="relative bg-green-50 rounded-lg overflow-hidden">
          <div className="p-8 flex items-center justify-between">
            <div className="z-10">
              <h2 className="text-4xl font-bold text-white mb-2 ml-auto text-right">
                COOL<br />
                STYLES!
              </h2>
              <div className="inline-block bg-white text-black font-medium px-4 py-1 rounded-full mb-4 float-right">
                25% OFF
              </div>
              <div className="clear-both flex justify-end">
                <Link href="/view-all">
                  <button className="bg-amber-700 text-white px-4 py-2 text-sm rounded">View all</button>
                </Link>
              </div>
            </div>
            <div className="absolute left-0 bottom-0 h-full">
              <Image 
                src="/cool-style-model.jpg" 
                alt="Person in green outfit with cap" 
                width={250} 
                height={350}
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeDeals;