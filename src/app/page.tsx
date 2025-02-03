"use client";
import About from './About/page'; 
import ContactUs from './Contact-us/page'; 
import Skills from './Skills/page'; 

export default function Home() {
  return (
    <div>
    
      <div className="h-screen flex items-center justify-center home-gradient-bg p-4 sm:p-8">
        
  
        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between max-w-5xl w-full gap-16">
          

          <div className="text-center sm:text-left sm:w-1/2">
            <h1 className="mb-6 text-[20px] sm:text-[30px] uppercase text-[#5A2848] animate-bounce font-title">
              Turn Visions into Reality with Lareb Noor
            </h1>
            <p className="text-[#4D4D4D] leading-6 sm:leading-8 text-[14px] sm:text-[16px] w-full">
              Hello! I’m a UI/UX designer who values collaboration and continuous learning. I believe in working closely with clients, developers, and users to create designs that meet real needs. My approach is iterative, constantly evolving through feedback and testing to ensure the best possible user experience. Let’s work together to bring your vision to life with designs that are both effective and delightful.
            </p>
            <a 
              href="https://www.linkedin.com/in/lareb-noor-9778a92b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
              target="_blank"
            >
              <button className="bg-[#002147] w-28 sm:w-32 h-10 mt-6 text-white text-[16px] sm:text-[20px] rounded hover:scale-110 font-mono"> 
                Hire Me
              </button>
            </a>
          </div>


          <div className="flex justify-center sm:w-1/2">
            <img 
              src="/hero.jpg" 
              alt="Lareb Noor" 
              className="h-40 w-40 sm:h-80 sm:w-80 rounded-full object-cover bg-slate-50 shadow-lg"
            />
          </div>

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
