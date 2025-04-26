/** @format */

import ComingSoonComponent from "./components/ComingSoonComponent";
import Hero from "./components/home/Hero";
import LatestArrivals from "./components/home/LatestArrivals";
import StylesSection from "./components/home/StylesSection";
import TimeDeals from "./components/home/TimeDeals";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen gap-20  overflow-hidden">
      <div className="absolute w-full min-h-screen z-50 overflow-hidden">
        <ComingSoonComponent />
      </div>
      {/* <Hero />
      <StylesSection />
      <LatestArrivals />
      <TimeDeals /> */}
    </div>
  );
}
