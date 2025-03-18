import Image from "next/image";
import img1 from "../../../../public/assets/new_arrivals_6.png"; // Replace with actual path
import img2 from "../../../../public/assets/new_arrivals_4.png"; // Replace with actual path
import img3 from "../../../../public/assets/new_arrivals_5.png"; // Replace with actual path

export default function Style() {
  return (
  
    <>
    <div className="max-w-7xl mx-auto container">
      {/* Heading Section */}
      <div className="">
        {/* H2 in the center with line to the left */}
        <div className="items-center justify-center flex space-x-4">
          <hr className="border-[#655656] w-[25%]" />
          <h2 className="text-5xl w-[75%] flex font-medium text-[#655656] uppercase text-center">
            Enchanting Styles
          </h2>
        </div>
        <div className="flex h-16 mt-4">
      <div className="w-[50%] border-r border-r-black"></div>
      <div className="w-[50%]"></div>
    </div>
    </div>
    </div>

    
    <div className="container  h-screen w-full mx-auto flex items-end justify-between relative md:gap-4">
      {/* absolute row */}
      <div className="absolute  top-0 flex justify-between items-center w-full gap-10">
        <div className="h-px  w-full "></div>
        <div className="h-px bg-black w-full"></div>
      </div>
      {/* col 1 */}
      <div className="flex flex-col gap-4  w-fit h-fit">
        <h1 className="text-5xl font-semibold uppercase px-2">
          Shop the
          <br /> Latest Trends
        </h1>
        <Image src={img1} alt="img1" width={560} height={560} className="border border-black rounded-md"/>
      </div>
      {/* col 2 */}
      <div className="flex flex-col gap-4  w-fit h-fit">
        <h1 className="text-5xl font-extralight uppercase px-2">
          Find Your
          <br /> Perfect Look
        </h1>
        <Image src={img2} alt="img1" width={460} height={460} className="border border-black rounded-md" />
      </div>
      {/* col 3 */}
      <div className="flex flex-col gap-4  w-fit h-fit">
        <h1 className="text-5xl font-semibold uppercase px-2">
          Fresh Fits
          <br /> Await
        </h1>
        <Image src={img3} alt="img1" width={440} height={440} className="border border-black rounded-md" />
      </div>
    </div>
    </>
  );
}
