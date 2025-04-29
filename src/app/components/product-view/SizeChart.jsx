/** @format */

import Image from "next/image";
import size_chart from "../../../../public/Images/product-view/size_chart.png";

export default function SizeChart() {
  return (
    <div className="max-w-7xl mx-auto px-4 flex flex-col gap-12">
      <h2 className="text-xl font-semibold">Size Chart</h2>
      <div className="w-full">
        <Image
          src={size_chart}
          alt="sze-chart"
          className="wfull h-full object-cover"
        />
      </div>
    </div>
  );
}
