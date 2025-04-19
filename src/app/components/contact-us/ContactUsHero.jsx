import Image from "next/image";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Card, CardContent } from "../ui/card";

export default function ContactUsHero() {
  return (
    <div className="mx-auto max-w-7xl container md:px-4 relative">
      {/* Model image positioned at the top right */}
      <div className="absolute top-24 right-0 w-[45%] h-full z-20">
        <Image
          src="/images/contact-us-page/model-2.png"
          alt="Fashion model"
          height={550}
          width={450}
          className="object-contain border border-transparent"
          style={{
            position: "absolute",
            top: "0",
            right: "0",
          }}
          priority
        />
      </div>

      {/* Heading */}
      <div className="flex flex-row mt-32 relative z-10">
        <div className="w-[40%]">
          <h1 className="uppercase text-7xl">contact us</h1>
        </div>
        <div className="flex w-[60%] items-center">
          <hr className="border-[#888888] border-1 w-full relative z-10" />
        </div>
      </div>

      {/* Content and form */}
      <div className="flex">
        <div className="w-[60%] relative z-10">
          {/* content-para*/}
          <div className="mt-2 w-[80%]">
            <p className="uppercase text-xs max-w-md text-[#888888]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>

          {/* contact info */}
          <div className="mt-20 relative pl-8">
            {/* Phone section */}
            <div className="flex relative">
              <div className="absolute -left-8">
                <Image
                  src="/images/contact-us-page/phone.png"
                  alt="phone"
                  height={20}
                  width={20}
                />
              </div>
              <div>
                <div className="uppercase text-xs text-[#A27D2A] mb-1">
                  PHONE
                </div>
                <div className="text-lg">0912345678</div>
                <div className="text-lg">0917654321</div>
              </div>
              {/* Vertical line */}
              <div className="absolute left-4 -translate-x-10 top-7 h-20 border-l border-[#DDDDDD]"></div>
            </div>

            {/* Gap between phone and email */}
            <div className="h-12"></div>

            {/* Email section */}
            <div className="flex relative">
              <div className="absolute -left-8">
                <Image
                  src="/images/contact-us-page/email.png"
                  alt="email"
                  height={20}
                  width={20}
                />
              </div>
              <div>
                <div className="uppercase text-xs text-[#A27D2A] mb-1">
                  EMAIL
                </div>
                <div className="text-lg">mollyfashioncircle@gmail.com</div>
              </div>
              {/* Vertical line */}
              <div className="absolute left-4 -translate-x-10 top-7 h-20 border-l border-[#DDDDDD]"></div>
            </div>

            {/* Gap between email and fax */}
            <div className="h-20"></div>

            {/* Fax section */}
            <div className="flex relative">
              <div className="absolute -left-8">
                <Image
                  src="/images/contact-us-page/fax.png"
                  alt="fax"
                  height={22}
                  width={22}
                />
              </div>
              <div>
                <div className="uppercase text-xs text-[#A27D2A] mb-1">FAX</div>
                <div className="text-lg">0912345678</div>
                <div className="text-lg">0912345678</div>
              </div>
            </div>
          </div>

          {/* Question section */}
          <div className="mt-20 pb-16">
            <h2 className="text-5xl">Got Style Questions?</h2>
            <h2 className="text-5xl mb-6">Drop Us a Hello!</h2>

            <Card className="max-w-md mt-16 border-0 shadow-none">
              <CardContent className="p-0 space-y-6">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs uppercase">
                      Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      className="bg-gray-100 border-2 border-gray-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs uppercase">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      className="bg-gray-100 border-2 border-gray-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-xs uppercase">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      className="bg-gray-100 border-2 border-gray-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-xs uppercase">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      className="bg-gray-100 border-2 border-gray-200 h-32"
                    />
                  </div>

                  <Button>Send</Button>
                  <div className="relative">
                    <div className="absolute left-10 h-24 border-l border-[#DDDDDD]"></div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
