"use client";

import { FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

export default function Branch2() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const address = {
    no: "No.64",
    street: "Thissa Mawatha",
    town: "Kuliyapitiya",
    country: "Sri Lanka",
  };

  return (
    <div>
      {/* Branch Header */}
      <div className="flex items-center mb-2 text-[#CDCDCD]">
        <FaMapMarkerAlt className="mr-2" />
        <span className="text-xs uppercase">branch 02</span>
      </div>

      {/* Address Block */}
      <div className="text-black">
        {/* First Line: Number and Street */}
        <div className="flex flex-wrap">
          {/* Number */}
          <div className="relative">
            <p
              className="font-semibold text-xl md:text-2xl mr-1 hover:text-[#D4A66C] hover:cursor-pointer transition duration-300 ease-in-out"
              onMouseEnter={() => setHoveredItem("no")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {address.no},
            </p>
            {hoveredItem === "no" && (
              <div className="absolute -top-8 left-0">
                <div className="bg-[#2671F7] text-white px-4 py-1 rounded text-sm">
                  Number
                </div>
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#2671F7] mx-auto"></div>
              </div>
            )}
          </div>

          {/* Street */}
          <div className="relative">
            <p
              className="font-semibold text-xl md:text-2xl mr-1 hover:text-[#D4A66C] hover:cursor-pointer transition duration-300 ease-in-out"
              onMouseEnter={() => setHoveredItem("street")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {address.street},
            </p>
            {hoveredItem === "street" && (
              <div className="absolute -top-8 left-10">
                <div className="bg-[#2671F7] text-white px-4 py-1 rounded text-sm">
                  Street
                </div>
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#2671F7] mx-auto"></div>
              </div>
            )}
          </div>
        </div>

        {/* Town  */}
        <div className="flex flex-wrap mt-1">
          <div className="relative">
            <p
              className="font-semibold text-xl md:text-2xl mr-1 hover:text-[#D4A66C] hover:cursor-pointer transition duration-300 ease-in-out"
              onMouseEnter={() => setHoveredItem("town")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {address.town},
            </p>
            {hoveredItem === "town" && (
              <div className="absolute -top-8 left-5">
                <div className="bg-[#2671F7] text-white px-4 py-1 rounded text-sm">
                  Town
                </div>
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#2671F7] mx-auto"></div>
              </div>
            )}
          </div>
        </div>

        {/* Country */}
        <div className="flex flex-wrap mt-1">
          <div className="relative">
            <p
              className="font-semibold text-xl md:text-2xl hover:text-[#D4A66C] hover:cursor-pointer transition duration-300 ease-in-out"
              onMouseEnter={() => setHoveredItem("country")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {address.country}
            </p>
            {hoveredItem === "country" && (
              <div className="absolute -top-8 left-2">
                <div className="bg-[#2671F7] text-white px-3 py-1 rounded text-sm">
                  Country
                </div>
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#2671F7] mx-auto"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
