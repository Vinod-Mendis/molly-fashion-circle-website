import Branch1 from "./Branch1";
import Branch2 from "./Branch2";
import Branch3 from "./Branch3";

export default function LocationSection() {
  return (
    <div className="max-w-7xl mx-auto container mt-4">
      <div className="flex flex-col gap-8">
        {/* Address Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Branch1 />
          <Branch2 />
          <Branch3 />
        </div>

        {/* Map Section */}
        <div className="w-full">
          <div className="h-[500px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31653.913197601283!2d80.02597502022358!3d7.467598744371462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae32c5daa6a2c75%3A0x777639b5517a55f4!2sKuliyapitiya!5e0!3m2!1sen!2sus!4v1713384057387!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
