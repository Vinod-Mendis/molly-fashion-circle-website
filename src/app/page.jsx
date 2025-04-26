/** @format */

import Hero from "./components/home/Hero";
import LatestArrivals from "./components/home/LatestArrivals";
import StylesSection from "./components/home/StylesSection";
import TimeDeals from "./components/home/TimeDeals";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/pages/coming-soon");
  return (
    <div className="flex flex-col min-h-screen gap-20">
      <Hero />
      <StylesSection />
      <LatestArrivals />
      <TimeDeals />
    </div>
  );
}
