import portfolio from "@/app/images/portfolio.png";
import bike_web from "@/app/images/bike-website.png";
import ice_cream_web from "@/app/images/Governor web.png";
import plant_web from "@/app/images/trendify.png";
import Image from "next/image";
import Link from "next/link";
import { FaEye, FaCommentDots, FaArrowRight, FaClipboardList, FaBicycle, FaShopify, FaClone } from "react-icons/fa"; // Import necessary icons

export default function Nextjs() {
  return (
    <>
      <section className="text-gray-100 bg-[#0B192C] body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
        
            <div className="p-4 md:w-1/3">
              <div className="h-full bg-[#1E3E62] border-2 border-[#FFB200] rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-500">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg transition-transform duration-500 ease-in-out hover:scale-110"
                  src={portfolio}
                  alt="Portfolio"
                />
                <div className="p-6">
                  <h2 className="flex items-center tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    <FaClipboardList className="mr-2 text-indigo-400" /> 
                    portfolio
                  </h2>
                  <h1 className="flex items-center title-font text-2xl font-bold text-[#FFB200] mb-3">
                    <FaClipboardList className="mr-2 text-[#FFB200]" /> 
                    Portfolio
                  </h1>
                  <p className="leading-relaxed mb-3">
                  my latest portfolio, marking a significant achievement in my web development journey! ...                  </p>
                  <div className="flex items-center justify-center">
                    <Link
                      href="/portfolio"
                      className="bg-[#FFB200] text-white px-3 py-2 rounded-full shadow-lg inline-flex items-center text-lg hover:bg-bg-[#c48900] transition-colors duration-300"
                    >
                      Read More
                      <FaArrowRight className="ml-2 transition-transform duration-300 hover:translate-x-1" />
                    </Link>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <FaEye className="mr-1" /> 1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <FaCommentDots className="mr-1" /> 6
                    </span>
                  </div>
                </div>
              </div>
            </div>

      
            <div className="p-4 md:w-1/3">
              <div className="h-full bg-[#1E3E62] border-2 border-[#FFB200] rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-500">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg transition-transform duration-500 ease-in-out hover:scale-110"
                  src={bike_web}
                  alt="Bike Website"
                />
                <div className="p-6">
                  <h2 className="flex items-center tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    <FaBicycle className="mr-2 text-indigo-400" /> 
                    bike web
                  </h2>
                  <h1 className="flex items-center title-font text-2xl font-bold text-[#FFB200] mb-3">
                    <FaBicycle className="mr-2" />
                    Bike Website
                  </h1>
                  <p className="leading-relaxed mb-3">
                  an amazing bike website crafted with Next.js and Tailwind CSS! This project has been an incredible journey ...                  </p>
                  <div className="flex items-center justify-center">
                    <Link
                      href="/bike-web"
                      className="bg-[#FFB200] text-white px-3 py-2 rounded-full shadow-lg inline-flex items-center text-lg hover:bg-bg-[#c48900] transition-colors duration-300"
                    >
                      Read More
                      <FaArrowRight className="ml-2 transition-transform duration-300 hover:translate-x-1" />
                    </Link>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <FaEye className="mr-1" /> 1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <FaCommentDots className="mr-1" /> 6
                    </span>
                  </div>
                </div>
              </div>
            </div>

    
            <div className="p-4 md:w-1/3">
              <div className="h-full bg-[#1E3E62] border-2 border-[#FFB200] rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-500">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg transition-transform duration-500 ease-in-out hover:scale-110"
                  src={ice_cream_web}
                  alt="Ice Cream Website"
                />
                <div className="p-6">
                  <h2 className="flex items-center tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    <FaClone className="mr-2 text-indigo-400" /> 
                    Governor Sindh CLone web
                  </h2>
                  <h1 className="flex items-center title-font text-2xl font-bold text-[#FFB200] mb-3">
                    <FaClone className="mr-2 text-[#FFB200]" /> 
                    Governor House Website
                  </h1>
                  <p className="leading-relaxed mb-3">
                  Step into a digital experience of governance, crafted meticulously with Next.js and Tailwind CSS!...                  </p>
                  <div className="flex items-center justify-center">
                    <Link
                      href="/governor-web"
                      className="bg-[#FFB200] text-white px-3 py-2 rounded-full shadow-lg inline-flex items-center text-lg hover:bg-bg-[#c48900] transition-colors duration-300"
                    >
                      Read More
                      <FaArrowRight className="ml-2 transition-transform duration-300 hover:translate-x-1" />
                    </Link>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <FaEye className="mr-1" /> 1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <FaCommentDots className="mr-1" /> 6
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-full bg-[#1E3E62] border-2 border-[#FFB200] rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-500">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg transition-transform duration-500 ease-in-out hover:scale-110"
                  src={plant_web}
                  alt="Plant Website"
                />
                <div className="p-6">
                  <h2 className="flex items-center tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    <FaShopify className="mr-2 text-indigo-400" />
                    Trendify.pk 
                  </h2>
                  <h1 className="flex items-center title-font text-2xl font-bold text-[#FFB200] mb-3">
                    <FaShopify className="mr-2 text-[#FFB200]" />
                    Trendify Website
                  </h1>
                  <p className="leading-relaxed mb-3">
                  I’m thrilled to showcase the Trendify Shopping Store, a modern and dynamic e-commerce platform crafted using Next.js, TypeScript, and Tailwind CSS! ...                  </p>
                  <div className="flex items-center justify-center">
                    <Link
                      href="/trendify"
                      className="bg-[#FFB200] text-white px-3 py-2 rounded-full shadow-lg inline-flex items-center text-lg hover:bg-bg-[#c48900] transition-colors duration-300"
                    >
                      Read More
                      <FaArrowRight className="ml-2 transition-transform duration-300 hover:translate-x-1" />
                    </Link>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <FaEye className="mr-1" /> 1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <FaCommentDots className="mr-1" /> 6
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  );
}
