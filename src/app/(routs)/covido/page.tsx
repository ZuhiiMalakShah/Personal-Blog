"use client"
import { FormEvent, useState } from "react";

import Image from "next/image";
import img from "@/app/images/covido.png";
import { SiVercel } from "react-icons/si";
import { FaGithub, } from "react-icons/fa";
import Link from "next/link";

export default function Covido() {

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
      <section className="text-gray-200 body-font bg-black min-h-screen">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Image
            className="lg:w-4/6 md:w-3/6 w-5/6 lg:h-[400px] mb-10  object-cover object-center rounded-lg shadow-lg border-4 border-[#FFB200] hover:scale-105 transition-transform duration-300 ease-in-out"
            alt="hero"
            src={img}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-[#FFB200]">
            Stay Informed and Stay Safe! 🌍✨
            </h1>
            <div className="mb-8 leading-relaxed text-lg text-gray-300">
              <h2 className="text-4xl font-bold text-[#FFB200] mb-4">
              Introducing My Newly Designed Coronavirus Awareness Website

              </h2>
              <p className="text-xl mb-4">
              Get the latest insights and updates about COVID-19 through an immersive design powered by HTML | CSS | Tailwind CSS. Crafted with care to spread awareness and knowledge, this platform combines visually appealing design with interactive features.
              </p>

              <h2 className="text-3xl font-semibold mb-2 text-[#FFB200]">How It Works 🤔</h2>
              <p className="text-xl mb-4">
              Explore comprehensive information about COVID-19, its symptoms, prevention tips, global statistics, and more. With our Dialogflow-powered AI chatbot, receive personalized answers to your questions in real-time.
              </p>

              <h2 className="text-3xl font-semibold mb-2 text-[#FFB200]">Key Features 🌟</h2>
              <ul className="list-disc text-left mx-auto mb-4">
                <li className="text-2xl font-semibold mb-1">Stunning Design</li>
                <p className="text-xl mb-4">
                A modern and engaging interface designed with Tailwind CSS, ensuring a seamless and responsive experience.
                </p>

                <li className="text-2xl font-semibold mb-1">AI Chatbot Integration</li>
                <p className="text-xl mb-4">
                Get instant answers to your queries about COVID-19 with our intelligent AI chatbot, making the platform interactive and informative.
                </p>

                <li className="text-2xl font-semibold mb-1">Real-Time Updates
                </li>
                <p className="text-xl mb-4">
                Stay updated with the latest statistics, guidelines, and safety measures to protect yourself and your loved ones.
                </p>
              </ul>

              <h2 className="text-3xl font-semibold mb-2 text-[#FFB200]">Learning Experience 📚</h2>
              <p className="text-xl mb-4">
                This project was a valuable experience in responsive design with
                Tailwind CSS and AI chatbot integration.
              </p>

              <h2 className="text-3xl font-semibold mb-2 text-[#FFB200]">Conclusion 🚀</h2>
              <p className="text-xl mb-4">
              A must-visit platform for everyone looking to stay informed about COVID-19. It blends visual appeal with real-time information to promote awareness and safety.
              </p>

              <p className="text-xl mb-4">
                Stay tuned for more projects, and feel free to share your
                feedback! 💬😊
              </p>
            </div>

            <div className="flex justify-center space-x-8 bg-[#FFB200] p-3 rounded-lg shadow-lg">
              <p className="text-2xl font-bold text-black">Check :</p>
              <Link
                href="https://smit-hackathon-omega.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiVercel className="text-black text-3xl hover:text-gray-800 bg-white p-2 rounded-md transition-transform duration-300 hover:scale-110" />
              </Link>
              <Link
                href="https://github.com/SikandarTahir23/SMIT-Hackathon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-black text-3xl hover:text-gray-800 bg-white p-2 rounded-md transition-transform duration-300 hover:scale-110" />
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
