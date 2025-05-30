/** @format */

import ComingSoonComponent from "./components/ComingSoonComponent";
import CategorySection from "./components/home/CategorySection";
import Hero from "./components/home/Hero";
import LatestArrivals from "./components/home/LatestArrivals";
import StylesSection from "./components/home/StylesSection";
import TimeDeals from "./components/home/TimeDeals";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 overflow-hidden">
        {/* <ComingSoonComponent /> */}
      <Hero />
      <StylesSection />
      <LatestArrivals />
      <CategorySection/>
      <TimeDeals />
    </div>
  );
}
