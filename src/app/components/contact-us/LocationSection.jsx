import { FaMapMarkerAlt } from "react-icons/fa";

export default function LocationSection() {
  const branches = [
    {
      id: 0,
      name: "branch 01",
      address: {
        line1: "No.64, Thissa Mawatha,",
        line2: "Kuliyapitiya,",
        line3: "Sri Lanka",
      },
    },
    {
      id: 1,
      name: "branch 02",
      address: {
        line1: "No.64, Thissa Mawatha,",
        line2: "Kuliyapitiya,",
        line3: "Sri Lanka",
      },
    },
    {
      id: 2,
      name: "branch 03",
      address: {
        line1: "No.64, Thissa Mawatha,",
        line2: "Kuliyapitiya,",
        line3: "Sri Lanka",
      },
    },
  ];

  return (
    <div className="max-w-7xl mx-auto container mt-4">
      <div className="flex flex-col gap-8">
        {/* Address Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {branches.map((branch) => (
            <div key={branch.id} className="">
              {/* Branch Header */}
              <div className="flex items-center mb-2 text-[#CDCDCD]">
                <FaMapMarkerAlt className="mr-2" />
                <span className="text-xs uppercase">{branch.name}</span>
              </div>

              {/* Address Block */}
              <div className="text-black">
                <p className="font-semibold text-xl md:text-2xl">
                  {branch.address.line1}
                </p>
                <p className="font-semibold text-xl md:text-2xl">
                  {branch.address.line2}
                </p>
                <p className="font-semibold text-xl md:text-2xl">
                  {branch.address.line3}
                </p>
              </div>
            </div>
          ))}
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
