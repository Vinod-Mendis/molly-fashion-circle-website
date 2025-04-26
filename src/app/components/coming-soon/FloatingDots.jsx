/** @format */

import React from "react";

const FloatingDots = () => {
  // Define keyframes animation style
  const keyframesStyle = `
    @keyframes floating {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-8px);
      }
      100% {
        transform: translateY(0px);
      }
    }
  `;

  return (
    <div className="flex items-center justify-center">
      <style>{keyframesStyle}</style>

      <div className="flex items-center gap-5  p-5">
        <div
          className="w-2 h-2  rounded-full bg-[#D4A66C] shadow-md"
          style={{ animation: "floating 1.5s ease-in-out infinite" }}></div>
        <div
          className="w-2 h-2  rounded-full bg-[#D4A66C] shadow-md"
          style={{
            animation: "floating 1.5s ease-in-out infinite",
            animationDelay: "0.3s",
          }}></div>
        <div
          className="w-2 h-2  rounded-full bg-[#D4A66C] shadow-md"
          style={{
            animation: "floating 1.5s ease-in-out infinite",
            animationDelay: "0.6s",
          }}></div>
      </div>
    </div>
  );
};

export default FloatingDots;
