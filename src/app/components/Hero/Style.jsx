
import Image from "next/image";
import img1 from "../../../../public/assets/new_arrivals_6.png";
import img2 from "../../../../public/assets/new_arrivals_4.png";
import img3 from "../../../../public/assets/new_arrivals_5.png";

export default function Style() {
  return (
    <>
    <div className="mx-auto max-w-7xl container md:px-4">
        <div className="items-center justify-center flex space-x-4 mb-2">
            <hr className="border-[#655656] w-[25%]" />
            <h2 className="text-5xl w-[75%] flex font-medium text-[#655656]">
              ENCHANTING STYLES
            </h2>
        </div>
        {/* <div className="h-10 w-[1px] bg-[#655656] mx-auto"></div> */}
    </div>
    
    <div className="container h-fit max-w-7xl mx-auto flex items-end justify-between relative md:gap-4 md:px-4">
      {/* absolute row */}
      <div className="absolute top-0 flex justify-between items-center w-full gap-10">
        <div className="h-px w-full"></div>
        <div className="h-px bg-black w-full"></div>
      </div>
      
      {/* col 1 */}
      <div className="flex flex-col gap-4 w-fit h-fit">
        <h1 className="md:text-3xl lg:text-4xl xl:text-5xl font-semibold uppercase px-2">
          Shop the
          <br /> Latest Trends
        </h1>
        <Image
          src={img1}
          alt="img1"
          width={560} 
          height={560}
          className="border border-black rounded-md 
                     
                     md:w-[400px] md:h-[400px] 
                     lg:w-[560px] lg:h-[560px]" 
        />
      </div>

      {/* col 2 */}
      <div className="flex flex-col gap-4 w-fit h-fit">
        <h1 className="md:text-3xl lg:text-4xl xl:text-5xl font-extralight uppercase px-2">
          Find Your
          <br /> Perfect Look
        </h1>
        <Image
          src={img2}
          alt="img2"
          width={460}
          height={460}
          className="border border-black rounded-md
                     md:w-[300px] md:h-[300px] 
                     lg:w-[460px] lg:h-[460px]"
        />
      </div>

      {/* col 3 */}
      <div className="flex flex-col gap-4 w-fit h-fit">
        <h1 className="md:text-3xl lg:text-4xl xl:text-5xl font-semibold uppercase px-2">
          Fresh Fits
          <br /> Await
        </h1>
        <Image
          src={img3}
          alt="img3"
          width={340}
          height={340}
          className="border border-black rounded-md 
                     md:w-[300px] md:h-[300px] 
                     lg:w-[340px] lg:h-[340px]"
        />
      </div>
    </div>
    
    </>
    
  );
}
