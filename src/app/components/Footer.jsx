import Image from "next/image";
import {Link} from 'next-view-transitions';
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoFacebook } from "react-icons/io";
import Marquee from 'react-fast-marquee';

const Footer = () => {
    return (
      <footer className="bg-[#AC8537] rounded-t-4xl">
        <div className='max-w-7xl mx-auto container h-[300px] pt-5'>
          <div className='h-[20%] flex'>
            <div className="w-[20%]  items-center flex border-r-white border-r border-b border-b-white">
                <Image src="/assets/logo-white.png" alt="logo" height={20} width={200}/>
            </div>
            <div className="w-[80%] border-b border-b-white flex justify-end items-center relative">
                <div className="relative w-auto h-auto">
                    <Image src="/assets/footer-image.png" alt="footer image" 
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-auto h-auto object-contain" />
                </div>
            </div>
          </div>
          <div className='h-[80%] flex'>
            <div className="w-[80%] uppercase text-white mt-4">
                <p className="text-xs block">Lorem ipsum dolor sit amet,consectetur</p>
                <p className="text-xs block"> adipiscing elit.Sed do eiusmod tempor</p>
                <p className="text-xs block"> incididunt ut labore et dolore magna </p>
                <p className="text-xs block">aliqua.Ut enim ad minim veniam.</p>
                <div className="mt-14">
                    <Link href="/" className=" text-white hover:text-amber-600 flex items-center gap-3">
                        <RiInstagramFill className="h-6 w-6" />
                        <p className="text-xs">INSTAGRAM</p>
                    </Link>
                </div>
                <div className="mt-2">
                    <Link href="/" className=" text-white hover:text-amber-600 flex items-center gap-3">
                        <IoLogoFacebook className="h-6 w-6"/>
                        <p className="text-xs">FACEBOOK</p>
                    </Link>
                </div>
            </div>
            <div className="w-[20%] border-l border-l-white pl-4 flex flex-col space-y-2">
                <Link href="/" className=" text-white hover:text-amber-600 mt-4">
                    HOME
                </Link>
                <Link href="/men" className=" text-white hover:text-amber-600">
                    MENS
                </Link>
                <Link href="/women" className=" text-white hover:text-amber-600">
                    WOMENS
                </Link>
                <Link href="/store" className=" text-white hover:text-amber-600">
                    STORE
                </Link>
                <Link href="/new-arrivals" className=" text-white hover:text-amber-600">
                    NEW ARRIVALS
                </Link>
                <Link href="/contact" className=" text-white hover:text-amber-600">
                    CONTACT US
                </Link>
            </div>
          </div>
        </div>
        <div className="h-[20] ml-3 mr-3  bg-white mt-5 rounded-full"></div>
        <div className="w-full text-white py-6 border-t border-t-white mt-5 border-b border-b-white">
                <div className="overflow-hidden">
                <Marquee speed={40} gradient={false} className="overflow-hidden">
                    <span className="inline-flex items-center text-5xl">
                        MOLLY FASHION CIRCLE ✱ MOLLY FASHION CIRCLE ✱ MOLLY FASHION CIRCLE ✱ MOLLY FASHION CIRCLE ✱
                    </span>
                </Marquee>

                </div>
        </div>
        <div className=" text-white py-4 px-4  flex justify-between text-xs">
        <div>
          © MOLLY FASHION CIRCLE 2025. ALL RIGHTS RESERVED
        </div>
        <div className="flex gap-4">
          <a href="/privacy-policy" className="hover:underline">PRIVACY POLICY</a>
          <a href="/terms-conditions" className="hover:underline">TERMS & CONDITIONS</a>
        </div>
      </div>

      </footer>
    );
  };
  
  export default Footer;