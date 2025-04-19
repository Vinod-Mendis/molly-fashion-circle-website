/** @format */

import Image from "next/image";
import ContactUsHero from "../../components/contact-us/ContactUsHero";
import LocationSection from "../../components/contact-us/LocationSection";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      <ContactUsHero />
      <div className="absolute -left-44 2xl:-left-200 top-[730px]  2xl:w-[2000px] 2xl:h-[1000px] w-[800px] h-[800px] lg:z-10 2xl:z-0 rotate-180">
                  <Image
                    src="/images/contact-us-page/Ellipse 8.png"
                    alt="Form background shadow"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="absolute -right-35 top-[50px] w-[850px] h-[1000px] z-10">
                  <Image
                    src="/images/contact-us-page/Ellipse 8.png"
                    alt="Form background shadow"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="absolute -right-38 xl:-right-65 bottom-[400px] w-[600px] h-[650px] 2xl:w-[800px] 2xl:h-[800px] z-10">
                  <Image
                    src="/images/contact-us-page/Ellipse 8.png"
                    alt="Form background shadow"
                    fill
                    className="object-contain"
                    priority
                  />
                </div> 
      <LocationSection />
    </div>
  );
}
