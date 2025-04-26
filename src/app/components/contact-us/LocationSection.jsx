"use client";

import { useState, useEffect } from "react";
import Addressblock from "./Addressblock";
import { FaMapMarkerAlt } from "react-icons/fa";

//  AddressDisplay component for mobile view
function MobileAddressDisplay({ no, street, town }) {
  return (
    <div className="flex flex-col items-center justify-center py-4">
      <div className="mb-3">
        <FaMapMarkerAlt className="text-gray-400 text-2xl" />
      </div>
      <div className="text-center">
        <p className="font-semibold text-xl">
          {no}, {street},
        </p>
        <p className="font-semibold text-xl">{town}, Sri Lanka</p>
      </div>
    </div>
  );
}

export default function LocationSection() {
  const branches = [
    {
      id: 1,
      branchNumber: "01",
      no: "No.64",
      street: "Thissa Mawatha",
      town: "Kuliyapitiya",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31653.913197601283!2d80.02597502022358!3d7.467598744371462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae32c5daa6a2c75%3A0x777639b5517a55f4!2sKuliyapitiya!5e0!3m2!1sen!2sus!4v1713384057387!5m2!1sen!2sus",
    },
    {
      id: 2,
      branchNumber: "02",
      no: "No.64",
      street: "Thissa Mawatha",
      town: "Kuliyapitiya",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.80549624506!2d79.82144362449093!3d6.921837070105396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1713384057387!5m2!1sen!2sus",
    },
    {
      id: 3,
      branchNumber: "03",
      no: "No.64",
      street: "Thissa Mawatha",
      town: "Kuliyapitiya",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31686.098196129207!2d80.61021196810652!3d7.293790934787464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae366266498acd3%3A0x411a3818a1e03c35!2sKandy%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1713384057387!5m2!1sen!2sus",
    },
  ];

  const [currentMapUrl, setCurrentMapUrl] = useState(branches[0].mapUrl);
  const [activeBranch, setActiveBranch] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const handleBranchChange = (id) => {
    setActiveBranch(id);
    const branch = branches.find((branch) => branch.id === id);
    setCurrentMapUrl(branch.mapUrl);
  };

  const activeBranchData = branches.find(
    (branch) => branch.id === activeBranch
  );

  return (
    <div className="max-w-7xl mx-auto container mt-4">
      {/* Mobile View */}
      {isMobile ? (
        <div>
          <div className="flex flex-col items-center px-4">
            {/* Branch Selector */}
            <div className="bg-gray-200 rounded-full p-1 flex justify-between w-full">
              {branches.map((branch) => (
                <button
                  key={branch.id}
                  onClick={() => handleBranchChange(branch.id)}
                  className={`py-2 px-4 text-sm rounded-full transition-all duration-300 ${
                    activeBranch === branch.id
                      ? "bg-white text-[#2671F7]"
                      : "text-gray-600"
                  }`}
                >
                  Branch {branch.branchNumber}
                </button>
              ))}
            </div>

            {/* First Vertical Divider */}
            <div className="h-18 mt-2 border-l border-gray-300"></div>

            {/* Address Display */}
            <MobileAddressDisplay
              no={activeBranchData.no}
              street={activeBranchData.street}
              town={activeBranchData.town}
            />

            {/* Second Vertical Divider */}
            <div className="h-18 border-l mb-2 border-gray-300"></div>

            {/* Map Display */}
            <div className="w-full">
              <div className="h-[400px] rounded-lg overflow-hidden border shadow-md">
                <iframe
                  src={currentMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Desktop View  */
        <div className="flex flex-col gap-8">
          {/* Address Section */}
          <div className="flex flex-col md:flex-row justify-between w-full gap-4">
            {branches.map((branch) => (
              <div
                key={branch.id}
                className="cursor-pointer"
                onMouseEnter={() => setCurrentMapUrl(branch.mapUrl)}
              >
                <Addressblock
                  branchNumber={branch.branchNumber}
                  no={branch.no}
                  street={branch.street}
                  town={branch.town}
                />
              </div>
            ))}
          </div>

          {/* Map Section */}
          <div className="w-full">
            <div className="h-[500px] rounded-lg overflow-hidden border shadow-md">
              <iframe
                src={currentMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
