/** @format */

import Image from "next/image";
import ContactUsHero from "../../components/contact-us/ContactUsHero";
import LocationSection from "../../components/contact-us/LocationSection";
import ellipse from '../../../../public//images/contact-us-page/Ellipse 8.png'

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen relative px-4 lg:px-0 mb-20">
      <Image
        src={ellipse}
        alt="Form background shadow"
        width={800}
        height={800}
        className="absolute -top-50 right-0"
      />

      <Image
        src={ellipse}
        alt="Form background shadow"
        width={600}
        height={600}
        className="rotate-180 absolute left-0 top-150"
        priority
      />

      <Image
        src={ellipse}
        alt="Form background shadow"
        width={500}
        height={500}
        className="absolute bottom-50 right-0 hidden lg:block"
      />

      <ContactUsHero />
      <div className="relative z-50">
        <LocationSection />
      </div>
    </div>
  );
}
