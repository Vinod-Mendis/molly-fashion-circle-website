/** @format */

import Image from "next/image";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Card, CardContent } from "../ui/card";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFax } from "react-icons/fa";

export default function ContactUsHero() {
  return (
    <div className="mx-auto max-w-7xl container px-4 relative z-40">
      {/* Model image positioned at the top right */}
      <div className="absolute top-24 right-0 w-[45%] h-full z-20 hidden lg:block">
        <Image
          src="https://res.cloudinary.com/vccpsacloud/image/upload/v1745920806/model-2_ztprvs.png"
          alt="Fashion model"
          height={550}
          width={450}
          className="object-contain border border-transparent"
          style={{
            position: "absolute",
            top: "0",
            right: "0",
          }}
        />
      </div>

      {/* Heading */}
      <div className="flex flex-row lg:mt-32 mt-20 relative z-10">
        <div className="w-full lg:w-[40%]">
          <h1 className="uppercase text-4xl sm:text-5xl lg:text-7xl">
            contact us
          </h1>
        </div>
        <div className="hidden lg:flex w-[60%] items-center">
          <hr className="border-[#888888] border-1 w-full relative z-10" />
        </div>
      </div>

      {/* Content and form */}
      <div className="flex">
        <div className="w-full lg:w-[60%] relative z-10">
          {/* content-para*/}
          <div className="mt-2 lg:w-[80%] w-full">
            <p className="uppercase hidden lg:block text-xs max-w-md text-[#888888]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <p className="uppercase block lg:hidden text-xs max-w-md text-[#888888]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod
            </p>
          </div>

          {/* contact info */}
          <div className="mt-20 relative pl-8">
            {/* Phone section */}
            <div className="flex relative">
              <div className="absolute -left-8">
                <FaPhone className="rotate-90 text-[#A27D2A]" />
              </div>
              <div>
                <div className="uppercase text-xs text-[#A27D2A] mb-1">
                  PHONE
                </div>
                <div className="text-lg">0912345678</div>
                <div className="text-lg">0917654321</div>
              </div>
              {/* Vertical line */}
              <div className="absolute left-4 -translate-x-10 top-7 h-32 border-l border-[#DDDDDD]"></div>
            </div>

            {/* Gap between phone and email */}
            <div className="h-24"></div>

            {/* Email section */}
            <div className="flex relative">
              <div className="absolute -left-8">
                <MdEmail className="text-[#A27D2A]" />
              </div>
              <div>
                <div className="uppercase text-xs text-[#A27D2A] mb-1">
                  EMAIL
                </div>
                <div className="text-lg">mollyfashioncircle@gmail.com</div>
              </div>
              {/* Vertical line */}
              <div className="absolute left-4 -translate-x-10 top-7 h-32 border-l border-[#DDDDDD]"></div>
            </div>

            {/* Gap between email and fax */}
            <div className="h-28"></div>

            {/* Fax section */}
            <div className="flex relative mt-1">
              <div className="absolute -left-8">
                <FaFax className="text-[#A27D2A]" />
              </div>
              <div>
                <div className="uppercase text-xs text-[#A27D2A] mb-1">FAX</div>
                <div className="text-lg">0912345678</div>
                <div className="text-lg">0912345678</div>
              </div>
            </div>
          </div>

          {/* Question section  */}
          <div className="mt-20 pb-16">
            <h2 className="text-3xl lg:text-5xl">Got Style Questions?</h2>
            <h2 className="text-3xl lg:text-5xl mb-6">Drop Us a Hello!</h2>

            <div className="lg:mt-16 mt-10">
              <Card className="max-w-md border-0 lg:shadow-none">
                <CardContent className="p-0 space-y-6">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-xs uppercase font-medium">
                        NAME
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        className="bg-gray-100 border-2"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-xs uppercase font-medium">
                        EMAIL
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        className="bg-gray-100 border-2"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="text-xs uppercase font-medium">
                        PHONE NUMBER
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        className="bg-gray-100 border-2"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-xs uppercase font-medium">
                        MESSAGE
                      </Label>
                      <Textarea
                        id="message"
                        className="bg-gray-100 border-2 h-32"
                      />
                    </div>

                    <Button>Send</Button>

                    {/* Vertical line only on desktop */}
                    <div className="relative hidden lg:block">
                      <div className="absolute left-10 h-24 border-l border-[#DDDDDD]"></div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
