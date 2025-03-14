import Intro from "./components/Hero/Intro";
import Style from "./components/Hero/Style";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen gap-20">
      <Intro />
      <Style />
    </div>
  );
}
