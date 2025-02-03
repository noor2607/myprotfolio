export default function About() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-16 lg:px-36 py-12">
        
        {/* Heading */}
        <h1 className="text-[24px] sm:text-[30px] underline uppercase text-[#5A2848] text-center font-serif">
          My Journey into Coding
        </h1>
  
        {/* Paragraph */}
        <p className="text-[#4D4D4D] text-[14px] sm:text-[16px] leading-7 pt-6 font-sans text-center sm:text-left max-w-3xl">
          "In February 2023, I set out on an exciting path to become a web developer—a journey that’s been as challenging as it is rewarding. Driven by a curiosity to understand how the web works, I dove into learning programming languages, immersing myself in the basics of HTML, CSS, and JavaScript. Each day brought new discoveries, from understanding the logic of coding to seeing my ideas come to life on a webpage. As I built projects and expanded my skills, my passion for web development only grew stronger. This journey isn’t just about learning to code; it’s about mastering a craft that combines creativity and problem-solving, shaping me into a developer who’s ready to bring ideas to life online. And though there's much more to learn, I’m excited for every step ahead!"
        </p>
  
        {/* Education Section */}
        <div className="mt-12 w-full max-w-3xl">
          <h1 className="text-[24px] sm:text-[30px] underline border-dotted uppercase text-[#5A2848] font-serif text-center sm:text-left">
            Education
          </h1>
  
          <ul className="mt-6 list-disc text-[#5A2848] leading-6 pl-5 sm:pl-8">
            <li>SSC From Elite English High School Larkana.</li>
            <li>HSC From Govt Girls Degree College Larkana.</li>
            <li>Graduation From Shah Abdul Latif University Khairpur.</li>
            <li>Doing Artificial Intelligence, Web 3.0 Metaverse from Governor Sindh IT Initiative.</li>
          </ul>
        </div>
  
      </div>
    );
  }
  