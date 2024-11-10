import { IoPersonSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function Contactus() {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <h1 className="text-center md:text-left md:ml-52 text-[30px] uppercase text-[#5A2848] font-title">
        Contact Us
      </h1>

      <div className="flex flex-col md:flex-row md:ml-28 mt-6 items-center md:items-start">
        <form action="" className="flex flex-col items-center md:items-start">
          <div className="relative w-full mb-4">
            <IoPersonSharp className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Name" 
              className="h-14 bg-white w-full md:w-96 rounded-full text-xl pl-10 shadow-2xl" 
            />
          </div>
          <div className="relative w-full mb-4">
            <MdEmail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="email" 
              placeholder="Email" 
              className="h-14 bg-white w-full md:w-96 rounded-full shadow-2xl text-xl pl-10" 
            />
          </div>
          <div className="relative w-full mb-4">
            <textarea 
              placeholder="Message" 
              className="h-32 bg-white w-full md:w-96 rounded-3xl shadow-2xl text-xl pl-4 pb-20" 
            />
          </div>
          <button className="h-14 w-full md:w-96 bg-blue-400 rounded-full text-xl text-white">
            Send
          </button>
        </form>

        <div className="mt-8 md:mt-0 md:ml-16  w-full md:w-[350px] text-start md:text-left">
          <p className="text-[#4D4D4D] text-2xl leading-10 relative left-44 top-6" >
            We’d love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel free to drop us a message. Let's connect and create something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
}
