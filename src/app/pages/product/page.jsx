/** @format */
import ProductIntro from "@/app/components/product-view/ProductIntro";
import hero_arrow_head from "../../../../public/Images/home-page/hero-arrow_head.png";
import Image from "next/image";
import ProductRatings from "@/app/components/product-view/ProductRatings";
import ProductDetails from "@/app/components/product-view/ProductDetails";
import ProductViewSeperator from "@/app/components/product-view/ProductViewSeperator";
import ProductVideoPreview from "@/app/components/product-view/ProductVideoPreview";
import SizeChart from "@/app/components/product-view/SizeChart";
import RelevantProducts from "@/app/components/product-view/RelevantProducts";

export default function page() {
  return (
    <div className="mt-20 flex flex-col gap-20 mb-20">
      <ProductIntro />
      <div className="grid md:grid-cols-5 gap-20 md:gap-8 w-full max-w-7xl mx-auto px-4">
        <ProductRatings />
        <ProductDetails />
      </div>
      <ProductViewSeperator />
      <ProductVideoPreview />
      <SizeChart />
      <RelevantProducts />
    </div>
  );
}
