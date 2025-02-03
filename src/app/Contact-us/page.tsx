import { IoPersonSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function Contactus() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-16 lg:px-36 py-12">
      
      {/* Heading */}
      <h1 className="text-center text-[24px] sm:text-[30px] uppercase text-[#5A2848] font-title mb-6">
        Contact Us
      </h1>

      {/* Form & Text Container */}
      <div className="flex flex-col md:flex-row items-center md:items-start w-full max-w-4xl">

        {/* Contact Form */}
        <form action="" className="flex flex-col w-full md:w-1/2 items-center md:items-start">
          <div className="relative w-full mb-4">
            <IoPersonSharp className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Name" 
              className="h-14 bg-white w-full rounded-full text-lg pl-10 shadow-md border border-gray-300 focus:ring-2 focus:ring-blue-400" 
            />
          </div>

          <div className="relative w-full mb-4">
            <MdEmail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="email" 
              placeholder="Email" 
              className="h-14 bg-white w-full rounded-full text-lg pl-10 shadow-md border border-gray-300 focus:ring-2 focus:ring-blue-400" 
            />
          </div>

          <div className="relative w-full mb-4">
            <textarea 
              placeholder="Message" 
              className="h-32 bg-white w-full rounded-3xl text-lg p-4 shadow-md border border-gray-300 focus:ring-2 focus:ring-blue-400 resize-none" 
            />
          </div>

          <button className="h-14 w-full bg-blue-500 hover:bg-blue-600 rounded-full text-lg text-white transition">
            Send
          </button>
        </form>

        {/* Contact Info Text */}
        <div className="mt-8 md:mt-0 md:ml-12 w-full md:w-1/2 text-center md:text-left">
          <p className="text-[#4D4D4D] text-lg leading-7">
            We’d love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel free to drop us a message. Let's connect and create something amazing together!
          </p>
        </div>

      </div>
    </div>
  );
}
