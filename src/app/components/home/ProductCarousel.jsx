/** @format */

"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProductCarouselCard from "./ProductCarouselCard";
import new_arrivals_img_1 from "../../../../public/Images/home-page/new_arrivals-img_1.png";

// Utility function for conditional class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export default function ProductCarousel({ items = [], defaultItems = 5 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef(null);
  const touchStartTimeRef = useRef(0);

  // Generate dummy items if none provided
  const carouselItems =
    items.length > 0
      ? items
      : Array.from({ length: defaultItems }, (_, i) => ({
          id: i,
          thumbnail: new_arrivals_img_1,
          productName: `Product ${i + 1}`,
          currentPrice: 4990 + i * 100,
          originalPrice: 5990 + i * 100,
          productColorVariants: ["#FF5252", "#3B82F6", "#10B981"],
        }));

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Enhanced touch events for mobile swipe
  const handleTouchStart = (e) => {
    // Store the start time to later determine if this was a quick tap
    touchStartTimeRef.current = Date.now();

    // Get the touch position
    const touchX = e.targetTouches[0].clientX;

    // Get the element width
    const elementWidth = carouselRef.current
      ? carouselRef.current.parentElement.offsetWidth
      : 0;

    // Define edge threshold (e.g., 15% of the width from each edge)
    const edgeThreshold = elementWidth * 0.15;

    // Don't initiate swiping if touch is on the edges
    if (touchX < edgeThreshold || touchX > elementWidth - edgeThreshold) {
      // Touch is on edge - don't initiate swipe
      setIsSwiping(false);
      return;
    }

    // Normal swipe in the center area
    setTouchStart(touchX);
    setTouchEnd(touchX); // Initialize touchEnd to the same value
    setIsSwiping(true);
    setIsDragging(false); // Reset dragging state
  };

  const handleTouchMove = (e) => {
    if (!isSwiping) return;

    const currentTouchX = e.targetTouches[0].clientX;
    setTouchEnd(currentTouchX);

    // Only consider it dragging if moved more than a small threshold
    if (Math.abs(touchStart - currentTouchX) > 10) {
      setIsDragging(true);

      // Calculate swipe distance
      const distance = touchStart - currentTouchX;

      // Apply a transform during the swipe for visual feedback
      if (carouselRef.current) {
        const translateX =
          -currentIndex * 100 -
          (distance / carouselRef.current.offsetWidth) * 100;
        carouselRef.current.style.transform = `translateX(${translateX}%)`;
      }

      e.preventDefault(); // Prevent scrolling while swiping
    }
  };

  const handleTouchEnd = (e) => {
    if (!isSwiping) return;
    setIsSwiping(false);

    // Calculate touch duration
    const touchDuration = Date.now() - touchStartTimeRef.current;

    // Reset the transform to the snap position
    if (carouselRef.current) {
      carouselRef.current.style.transition = "transform 300ms ease-out";
      carouselRef.current.style.transform = `translateX(-${
        currentIndex * 100
      }%)`;
    }

    // If it wasn't a dragging motion or was too quick, treat as a tap/click, not a swipe
    if (!isDragging || touchDuration < 100) {
      return;
    }

    // Only register as a swipe if moved more than 40px
    if (Math.abs(touchStart - touchEnd) < 40) return;

    if (touchStart - touchEnd > 40) {
      // Swipe left
      nextSlide();
    }

    if (touchStart - touchEnd < -40) {
      // Swipe right
      prevSlide();
    }
  };

  // Reset transition after index changes
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transition = "transform 300ms ease-out";
      carouselRef.current.style.transform = `translateX(-${
        currentIndex * 100
      }%)`;

      // Remove transition after animation completes
      const transitionEnd = () => {
        if (!isSwiping && carouselRef.current) {
          carouselRef.current.style.transition = "";
        }
      };

      carouselRef.current.addEventListener("transitionend", transitionEnd);
      return () => {
        if (carouselRef.current) {
          carouselRef.current.removeEventListener(
            "transitionend",
            transitionEnd
          );
        }
      };
    }
  }, [currentIndex, isSwiping]);

  return (
    <div className="relative w-full max-w-full block md:hidden">
      <div
        className="overflow-hidden relative touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}>
        <div
          ref={carouselRef}
          className="flex w-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {carouselItems.map((item) => (
            <div
              key={item.id}
              className="min-w-full w-full flex-shrink-0 px-4 py-6">
              <div className="max-w-lg mx-auto">
                <ProductCarouselCard
                  thumbnail={item.thumbnail}
                  productName={item.productName}
                  productColorVariants={item.productColorVariants}
                  originalPrice={item.originalPrice}
                  currentPrice={item.currentPrice}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full items-center justify-between px-4 mt-4">
        {/* Indicator dots - active dot is wider */}
        <div className="flex justify-center items-center gap-1">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-2 rounded-full transition-all",
                currentIndex === index ? "bg-gray-800 w-4" : "bg-gray-300 w-2"
              )}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Enhanced clickable navigation buttons */}
        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            className={`${currentIndex===0 ? "border-gray-300 text-gray-300":"border-black text-black"} bg-white rounded-full p-3 hover:bg-gray-200 active:bg-gray-100 active:translate-y-0.5 active:shadow-sm transition-all duration-100 border  focus:outline-none `}
            aria-label="Previous slide">
            <ArrowLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="bg-white rounded-full text-black p-3 hover:bg-gray-200 active:bg-gray-100 active:translate-y-0.5 active:shadow-sm transition-all duration-100 border border-black focus:outline-none "
            aria-label="Next slide">
            <ArrowRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
