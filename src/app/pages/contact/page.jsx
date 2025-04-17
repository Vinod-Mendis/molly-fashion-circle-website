/** @format */

import ContactUsHero from "../../components/contact-us/ContactUsHero";
import LocationSection from "../../components/contact-us/LocationSection";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen gap-20">
      <ContactUsHero />
      <LocationSection />
    </div>
  );
}
