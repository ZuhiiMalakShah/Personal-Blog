"use client"
import { FormEvent, useState } from "react";
import Image from "next/image";
import img from "@/app/images/ecomo.png";
import { SiVercel } from "react-icons/si";  
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Ecomo() {
    
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
                            <h1 className="text-4xl font-bold text-[#FFB200]">My Journey in Building a Fake E-commerce Website with React.js</h1>
                            <p className="text-xl">
                            Embarking on my React.js project for a Fake E-commerce Website has been an incredibly fulfilling experience. Having worked with Next.js in the past, I was already familiar with the React.js framework. However, creating a feature-rich e-commerce platform allowed me to further deepen my understanding of React&apos;s core capabilities and witness its true potential firsthand. 😎 </p>

                            <h2 className="text-3xl mt-6 font-bold text-[#FFB200]">Dynamic Shopping Experience with Add to Cart and Product Details 🛒</h2>
                            <p className="text-xl">
                            A significant aspect of this project involved creating an interactive shopping experience. This included developing features like a detailed product page and an &quot;Add to Cart&quot; functionality, essential for any modern e-commerce platform. </p>

                            <p className="text-xl">
                             Using React’s component-driven architecture, I could efficiently manage these features:
                             <br />
                             <strong>Product Details:</strong> Each product page dynamically fetches and displays the item’s name, price, description, and an image, offering users a comprehensive overview before making a purchase decision.
                             <br />
                             <strong>Add to Cart:</strong> Users can easily add items to their cart, with the cart dynamically updating in real time to reflect the selected products and their quantities.</p>

                            <h2 className="text-3xl mt-6 font-bold text-[#FFB200]">Why React.js for This Project? 🚀</h2>
                            <p className="text-xl">
                             Although I have extensively used Next.js, React.js provided the perfect foundation for building this e-commerce website. Here&apos;s why:

                              Component Reusability: React&apos;s ability to divide the interface into reusable components made it easy to build features like product grids, item cards, and the shopping cart.
                              State Management: React&apos;s state and context APIs enabled real-time updates to the shopping cart and other dynamic sections, ensuring the interface responded instantly to user actions.
                              Developer-Friendly Ecosystem: React&apos;s ecosystem provided access to numerous libraries and tools for handling routing, API fetching, and state management, making development efficient and enjoyable. </p>

                            <ul className="text-xl list-disc list-inside mt-4">
                                <li><strong>Dynamic Product Listing:</strong> The website dynamically displays products fetched from a mock API, allowing easy scalability for larger inventories.</li>
                                <li><strong>Interactive User Interface:</strong> React&apos;s virtual DOM ensures a highly responsive and dynamic shopping experience.</li>
                                <li><strong>Modern UI Design: </strong>Tailwind CSS was used to create a sleek, responsive design that enhances user engagement.</li>
                            </ul>

                            <h2 className="text-3xl mt-6 text-[#FFB200]">Key Features of the E-Commerce Website</h2>
                            <p className="text-xl">
                                Here are a few standout features that make this platform both functional and user-friendly:
                            </p>

                            <ul className="text-xl list-disc list-inside mt-4">
                            <li>**Real-Time Data Updates:** Fetching live data from market APIs ensures users are always updated with the latest market trends.</li>
                                <li>**Dynamic Interface:** The use of React component-driven architecture allows for a highly dynamic and responsive user interface.</li>
                                <li>**Smooth Performance:** By using React state management and modern JavaScript, I have optimized the performance for a fast and reliable experience.</li>
                            </ul>

                            <h2 className="text-3xl mt-6 font-bold text-[#FFB200]">From Next.js to React.js: A Natural Transition</h2>
                            <p className="text-xl">
                            While Next.js offers server-side rendering and API routes, building this project in React.js allowed me to focus entirely on the client-side aspects of development. It felt natural to transition from Next.js to React.js, as I could leverage my prior knowledge of React&apos;s declarative approach to building dynamic interfaces while gaining deeper insights into its core features.
                            </p>

                            <h2 className="text-3xl mt-6 font-bold text-[#FFB200]">Looking Ahead 🔮</h2>
                            <p className="text-xl">
                            Developing this Fake E-commerce Website has been an exciting and educational journey. It taught me not only how to fetch data dynamically but also how to implement core e-commerce functionalities like &quot;Add to Cart&quot; and &quot;Product Details.&quot; As I continue to enhance the platform, I look forward to exploring advanced features such as a payment gateway, user authentication, and a review system. I might even integrate Web3 capabilities for a cutting-edge shopping experience!</p>

                            <p className="text-xl mt-4">
                            This project is another step forward in my journey as a React.js developer, and I’m eager to see what comes next! 🚀
                            </p>
                        </div>

                        <div className="flex justify-center space-x-8 bg-[#FFB200] p-3 rounded-lg shadow-lg">
                        <p className="text-2xl font-bold text-black">Check :</p> 
                            <Link href="https://milestone3-fake-store.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <SiVercel className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md transition duration-300 ease-in-out" />
                            </Link>
                            <Link href="https://github.com/SikandarTahir23/Milestone3-Fake-Store" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-black text-3xl hover:text-gray-600 bg-gray-100 p-2 rounded-md transition duration-300 ease-in-out" />
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
