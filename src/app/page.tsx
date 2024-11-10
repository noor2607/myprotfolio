"use client";
import About from './About/page'; 
import ContactUs from './Contact-us/page'; 
import Skills from './Skills/page'; 
export default function Home() {
  return (
      <div className="">
          <div className="h-full min-w-full home-gradient-bg p-4 sm:p-8">
              <img 
                  src="/home2.png" 
                  alt="logo" 
                  className="h-52 w-52 sm:h-80 sm:w-80 rounded-full relative left-1/2 sm:left-[870px] top-20 sm:top-36 bg-slate-50 transform -translate-x-1/2 sm:translate-x-0"
              />
              <div className="flex flex-col items-center sm:items-start ml-4 sm:ml-28 relative bottom-20 sm:bottom-40">
                  <h1 className="mb-6 text-[20px] sm:text-[30px] uppercase text-[#5A2848] animate-bounce font-title text-center sm:text-left">
                      Turn Visions into Reality with Lareb Noor
                  </h1>
                  <p className="text-[#4D4D4D] w-full sm:w-[550px] text-center sm:text-start leading-6 sm:leading-8 text-[14px] sm:text-[16px] text-shadow">
                      Hello! I’m a UI/UX designer who values collaboration and continuous learning. I believe in working closely with clients, developers, and users to create designs that meet real needs. My approach is iterative, constantly evolving through feedback and testing to ensure the best possible user experience. Let’s work together to bring your vision to life with designs that are both effective and delightful.
                  </p>
                  <a href="https://www.linkedin.com/in/lareb-noor-9778a92b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
                      <button className="bg-[#002147] w-28 sm:w-32 h-10 mt-6 text-white text-[16px] sm:text-[20px] rounded hover:scale-110 font-mono"> 
                          Hire Me
                      </button>
                  </a>
              </div>
          </div>

          <div className="mt-12">
        <About />
        <Skills />
        <ContactUs />
      </div>
      </div>
  );
}
