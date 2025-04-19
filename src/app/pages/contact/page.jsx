/** @format */

import Image from "next/image";
import ContactUsHero from "../../components/contact-us/ContactUsHero";
import LocationSection from "../../components/contact-us/LocationSection";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Image
        src="/images/contact-us-page/Ellipse 8.png"
        alt="Form background shadow"
        width={800}
        height={800}
        className="absolute -top-50 right-0"
      />

      <Image
        src="/images/contact-us-page/Ellipse 8.png"
        alt="Form background shadow"
        width={600}
        height={600}
        className="rotate-180 absolute left-0 top-150"
        priority
      />

      <Image
        src="/images/contact-us-page/Ellipse 8.png"
        alt="Form background shadow"
        width={500}
        height={500}
        className="absolute bottom-50 right-0"
      />
      <ContactUsHero />
      <div className="relative z-20">
        <LocationSection />
      </div>
    </div>
  );
}
