/** @format */

"use client";

import { useState, useRef } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ChevronDown, ChevronUp, Filter } from "lucide-react";

export default function ProductFilter() {
  // Category options
  const categories = [
    { id: "mens", label: "Men's" },
    { id: "womens", label: "Women's" },
    { id: "kids", label: "Kid's" },
  ];

  // Offer options
  const offers = [
    { id: "new-arrivals", label: "New Arrivals" },
    { id: "sale", label: "Sale" },
    { id: "discount", label: "Discount" },
  ];

  // State for selected filters
  const [selectedCategory, setSelectedCategory] = useState("womens");
  const [selectedOffer, setSelectedOffer] = useState("new-arrivals");
  const [minPrice, setMinPrice] = useState("3000.00");
  const [maxPrice, setMaxPrice] = useState("4500.00");

  // State for mobile accordion
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  // Refs for accordion content heights
  const categoryContentRef = useRef(null);
  const offersContentRef = useRef(null);
  const priceContentRef = useRef(null);

  // Handle category selection
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  // Handle offer selection
  const handleOfferSelect = (offerId) => {
    setSelectedOffer(offerId);
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedOffer("");
    setMinPrice("");
    setMaxPrice("");
  };

  // Toggle accordion section
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Mobile Filter Button */}
      <div className="md:hidden mb-4">
        <Button
          variant="clearFilter"
          className="w-full flex justify-between items-center active:scale-100 active:opacity-70"
          onClick={() => setMobileFilterOpen(!mobileFilterOpen)}>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span>Filters</span>
          </div>
          {mobileFilterOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Mobile Accordion Filters with smooth animation */}
      <div
        className={`md:hidden border rounded-md mb-4 divide-y overflow-hidden transition-all duration-300 ease-in-out ${
          mobileFilterOpen
            ? "max-h-[1000px] opacity-100"
            : "max-h-0 opacity-0 border-0"
        }`}>
        {/* Category Accordion */}
        <div className="border-b">
          <button
            className="w-full p-4 flex justify-between items-center text-left active:opacity-70"
            onClick={() => toggleSection("category")}>
            <span className="font-medium">Category</span>
            {openSection === "category" ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openSection === "category"
                ? "max-h-[200px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
            ref={categoryContentRef}>
            <div className="p-4 pt-0">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={
                      selectedCategory === category.id
                        ? "filterDefault"
                        : "filterOutline"
                    }
                    className={`px-4 py-2 h-auto ${
                      selectedCategory === category.id
                        ? "bg-blue-500 hover:bg-blue-600"
                        : ""
                    }`}
                    onClick={() => handleCategorySelect(category.id)}>
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Offers Accordion */}
        <div className="border-b">
          <button
            className="w-full p-4 flex justify-between items-center text-left active:opacity-70"
            onClick={() => toggleSection("offers")}>
            <span className="font-medium">Offers</span>
            {openSection === "offers" ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openSection === "offers"
                ? "max-h-[200px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
            ref={offersContentRef}>
            <div className="p-4 pt-0">
              <div className="flex flex-wrap gap-2">
                {offers.map((offer) => (
                  <Button
                    key={offer.id}
                    variant={
                      selectedOffer === offer.id
                        ? "filterDefault"
                        : "filterOutline"
                    }
                    className={`px-4 py-2 h-auto ${
                      selectedOffer === offer.id
                        ? "bg-blue-500 hover:bg-blue-600"
                        : ""
                    }`}
                    onClick={() => handleOfferSelect(offer.id)}>
                    {offer.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Price Accordion */}
        <div>
          <button
            className="w-full p-4 flex justify-between items-center text-left active:opacity-70"
            onClick={() => toggleSection("price")}>
            <span className="font-medium">Price ( LKR )</span>
            {openSection === "price" ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openSection === "price"
                ? "max-h-[200px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
            ref={priceContentRef}>
            <div className="p-4 pt-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm">From</span>
                <Input
                  type="text"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="w-28"
                  placeholder="Min price"
                />
                <span className="text-sm">—</span>
                <span className="text-sm">To</span>
                <Input
                  type="text"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-28"
                  placeholder="Max price"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Clear Filters Button */}
      <div
        className={`md:hidden flex justify-end transition-all duration-300 ease-in-out ${
          mobileFilterOpen
            ? "opacity-100 max-h-[50px]"
            : "opacity-0 max-h-0 overflow-hidden"
        }`}>
        <Button
          variant="clearFilter"
          onClick={clearFilters}
          className="whitespace-nowrap">
          Clear Filters
        </Button>
      </div>

      {/* Desktop Filters */}
      <div className="hidden md:flex flex-col md:flex-row gap-6 md:gap-10 flex-wrap items-end">
        {/* Category Filter */}
        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-500">Category</span>
          <div className="flex gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id
                    ? "filterDefault"
                    : "filterOutline"
                }
                className={`px-4 py-2 h-auto ${
                  selectedCategory === category.id
                    ? "bg-blue-500 hover:bg-blue-600"
                    : ""
                }`}
                onClick={() => handleCategorySelect(category.id)}>
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Offers Filter */}
        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-500">Offers</span>
          <div className="flex gap-2">
            {offers.map((offer) => (
              <Button
                key={offer.id}
                variant={
                  selectedOffer === offer.id ? "filterDefault" : "filterOutline"
                }
                className={`px-4 py-2 h-auto ${
                  selectedOffer === offer.id
                    ? "bg-blue-500 hover:bg-blue-600"
                    : ""
                }`}
                onClick={() => handleOfferSelect(offer.id)}>
                {offer.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-500">Price ( LKR )</span>
          <div className="flex items-center gap-2">
            <span className="text-sm">From</span>
            <Input
              type="text"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-28"
              placeholder="Min price"
            />
            <span className="text-sm">—</span>
            <span className="text-sm">To</span>
            <Input
              type="text"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-28"
              placeholder="Max price"
            />
          </div>
        </div>

        {/* Clear Filters - aligned with other filter buttons */}
        <div className="flex ml-auto">
          <Button
            variant="clearFilter"
            onClick={clearFilters}
            className="whitespace-nowrap">
            Clear Filters
          </Button>
        </div>
      </div>
    </div>
  );
}
