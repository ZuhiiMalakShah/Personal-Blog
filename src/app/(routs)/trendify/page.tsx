"use client"
import { FormEvent, useState } from "react";
import Image from "next/image";
import img from "@/app/images/trendify.png";
import { SiVercel } from "react-icons/si";  
import { FaGithub } from "react-icons/fa"; 
import Link from "next/link";

export default function Trendify() {
    
 const [comments, setComments] = useState<string[]>([]);
 const [comment, setComment] = useState<string>('');

 const addComment = (e: FormEvent) => {
   e.preventDefault();
   if (comment.trim()) {
     setComments([...comments, comment]); 
     setComment(''); 
   }
 };

    return (
        <>
            <section className="bg-black text-gray-200 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <Image
            className="lg:w-4/6 md:w-3/6 w-5/6 lg:h-[400px] mb-10 object-cover object-center rounded-lg shadow-lg border-4 border-[#FFB200] hover:scale-105 transition-transform duration-300 ease-in-out"
            alt="hero"
                        src={img}
                    />
                    <div className="text-center lg:w-2/3 w-full">

                        <div className="mb-8 leading-relaxed">
                            <h1 className="text-3xl font-bold mb-4 text-[#FFB200]">
                            Welcome to the Trendify Shopping Store! 🛍️✨
                            </h1>
                            <p className="text-xl mb-6">
                            I’m thrilled to showcase the Trendify Shopping Store, a modern and dynamic e-commerce platform crafted using Next.js, TypeScript, and Tailwind CSS! This project highlights smooth animations, a sleek design, and user-centric features to enhance your shopping experience. Let’s dive into the details and discover what makes this store stand out!</p>

                            <h1 className="text-3xl font-bold mb-4 text-[#FFB200]">Built with a Modern Tech Stack 💻</h1>
                            <p className="text-xl mb-6">
                            The Trendify Shopping Store leverages the power of Next.js for performance, TypeScript for scalable code, and Tailwind CSS for responsive, utility-first styling. Together, these technologies ensure a seamless, high-performance shopping experience across all devices. </p>

                            <h1 className="text-3xl font-bold mb-4 text-[#FFB200]">Key Features of the Trendify Shopping Store 🛒</h1>

                            <h2 className="text-3xl font-semibold mb-4">✨ AOS Animation for an Engaging Experience</h2>
                            <p className="text-xl mb-6">
                            The website incorporates AOS (Animate On Scroll) animations, making every scroll through the store visually delightful. From smooth transitions to eye-catching effects, the animations breathe life into the browsing experience, turning shopping into a captivating journey.</p>

                            <h2 className="text-3xl font-semibold mb-4">✨ Responsive and User-Friendly Interface:</h2>
                            <p className="text-xl mb-6">
                            The store’s layout is designed with users in mind, ensuring intuitive navigation and effortless exploration of products. The clean, responsive design adapts seamlessly to all screen sizes, whether you’re shopping on a desktop, tablet, or smartphone.</p>

                            <h2 className="text-3xl font-semibold mb-4">✨ Enhanced Product Browsing</h2>
                            <p className="text-xl mb-6">
                            Explore a diverse range of products with detailed descriptions and high-quality images. The well-structured layout ensures you can find what you’re looking for quickly and efficiently.</p>

                            <h2 className="text-3xl font-semibold mb-4">✨ Modern Shopping Features</h2>
                            <p className="text-xl mb-6">
                            From product filtering to a user-friendly cart system, the store offers all the essential features for a hassle-free online shopping experience. Every detail is crafted to enhance functionality while maintaining a modern aesthetic.
                            </p>

                            <h1 className="text-3xl font-bold mb-4 text-[#FFB200]">A Seamless Shopping Experience Awaits 🛍️</h1>
                            <p className="text-xl mb-6">
                            Building the Trendify Shopping Store has been a rewarding challenge, combining technology with creativity to deliver an engaging online marketplace. I’m excited for you to explore this project and would love to hear your feedback as I continue refining and innovating in web development.

                                        </p>

                            <p className="text-xl mb-6">
                            Thank you for visiting Trendify Shopping Store—your next favorite shopping destination! 🚀</p>
                        </div>

                        <div className="flex justify-center space-x-8 bg-[#FFB200] p-3 rounded-lg shadow-lg">
                        <p className="text-2xl font-bold text-black">Check :</p> 
                            <Link href="https://trendify-temp.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <SiVercel className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md transition-colors duration-300" />
                            </Link>
                            <Link href="https://github.com/SikandarTahir23/trendify-template" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md transition-colors duration-300" />
                            </Link>
                        </div>
                        
 <div className="flex flex-col items-center bg-gray-black p-6">
      <div className="bg-[#0B192C] p-6 rounded-lg shadow-lg lg:w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4 text-center text-[#FFB200]">Comments Section</h1>

        <form onSubmit={addComment} className="mb-6">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a comment..."
            className="w-full p-3 border border-gray-300 bg-[#1E3E62] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full mt-4 bg-[#FFB200] text-white py-2 rounded-lg hover:bg-[#c48900] transition duration-200"
          >
            Add Comment
          </button>
        </form>

        <div className="space-y-4">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="p-4 bg-[#1E3E62] rounded-lg shadow-sm">
                <p className="text-gray-100">{comment}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-100">No comments yet. Be the first to comment!</p>
          )}
        </div>
      </div>
    </div>
                    </div>
                </div>
            </section>
        </>
    );
}
