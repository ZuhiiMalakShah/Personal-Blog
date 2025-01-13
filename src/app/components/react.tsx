import Image from "next/image";
import trading from "@/app/images/ecomo.png";
import movie from "@/app/images/movie-app.png";
import Link from "next/link";
import { FaEye, FaCommentDots, FaArrowRight, FaFilm , FaShoppingBag } from "react-icons/fa";

export default function React() {
  return (
    <>
      <section className="text-gray-100 bg-[#0B192C] body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">

          
            <div className="p-4 md:w-1/3">
              <div className="h-full bg-[#1E3E62] border-2 border-[#FFB200] rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-500">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg transition-transform duration-500 ease-in-out hover:scale-110"
                  src={trading}
                  alt="Trading"
                />
                <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 flex items-center">
                    <FaEye className="mr-1 text-indigo-400" /> E-como
                  </h2>
                  <div className="flex items-center mb-1">
                 
                    <FaShoppingBag className="mr-2 text-[#FFB200] text-2xl" /> 
                    <h1 className="title-font text-2xl font-bold text-[#FFB200]">E-commerce App</h1>
                  </div>
                 
                  <p className="leading-relaxed mb-3">
                  Embarking on my React.js project for a Fake E-commerce Website has been an incredibly fulfilling experience. Having worked with Next.js in the past, I was already familiar with the React...</p>
                  <div className="flex items-center justify-center">
                    <Link
                      href="/ecomo"
                      className="bg-[#FFB200] text-white px-3 py-2 rounded-full shadow-lg inline-flex items-center text-lg hover:bg-[#c48900] transition-colors duration-300"
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
                  src={movie}
                  alt="Movie App"
                />
                <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 flex items-center">
                    <FaEye className="mr-1 text-indigo-400" /> Movie Guide
                  </h2>
                  <div className="flex items-center mb-1">
                    <FaFilm className="mr-2 text-[#FFB200] text-2xl" />
                    <h1 className="title-font text-2xl font-bold text-[#FFB200]">Movie Guide App</h1>
                  </div>
                  
                  <p className="leading-relaxed mb-3">
                  Step into our vibrant movie world, crafted with love using Next.js and Tailwind CSS! Imagine a place ...                  </p>
                  <div className="flex items-center justify-center">
                    <Link
                      href="/movie"
                      className="bg-[#FFB200] text-white px-3 py-2 rounded-full shadow-lg inline-flex items-center text-lg hover:bg-[#c48900] transition-colors duration-300"
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
