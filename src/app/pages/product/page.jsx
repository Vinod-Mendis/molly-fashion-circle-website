/** @format */
import ProductIntro from "@/app/components/product-view/ProductIntro";
import hero_arrow_head from "../../../../public/Images/home-page/hero-arrow_head.png";
import Image from "next/image";

export default function page() {
  return (
    <div className="max-w-7xl mx-auto mt-20 flex flex-col">
      <ProductIntro />
    </div>
  );
}
