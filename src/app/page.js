import Intro from "./components/Hero/Intro";
import LatestArrivals from "./components/Hero/LatestArrivals";
import Style from "./components/Hero/Style";
import TimeDeals from "./components/Hero/TimeDeals";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen gap-20">
      <Intro />
      <Style />
      <LatestArrivals />
      <TimeDeals />
    </div>
  );
}
