"use client";

import { useState } from "react";

// Component for individual address items with hover tooltip
export default function Hovereffect({ text, dialogueText, comma = true }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <p
        className="font-semibold text-xl md:text-2xl mr-1 hover:text-[#D4A66C] hover:cursor-pointer transition duration-300 ease-in-out"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {text}{comma ? "," : ""}
      </p>
      {isHovered && (
        <div className="absolute -top-8 left-2">
          <div className="bg-[#2671F7] text-white px-3 py-1 rounded text-sm">
            {dialogueText}
          </div>
          <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#2671F7] mx-auto"></div>
        </div>
      )}
    </div>
  );
}