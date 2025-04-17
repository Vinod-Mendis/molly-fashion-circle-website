import ContactIntro from "../components/Contact Us/ContactIntro";
import Map from "../components/Contact Us/Map";

export default function Page() {
    return (
      <div className="flex flex-col min-h-screen gap-20">
        
        <ContactIntro />
        <Map />
        
          
        
      </div>
    );
  }