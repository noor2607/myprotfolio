
import Image from 'next/image';

const skills = [
  {
    name: 'HTML',
    description: 'Markup language for structuring web content.',
    image: '/html.logo.png', 
  },
  {
    name: 'CSS',
    description: 'Style sheet language for designing the web.',
    image: '/css2.png', 
  },
  {
    name: 'JavaScript',
    description: 'Programming language for web development.',
    image: '/javacript.png', 
  },
  {
    name: 'TypeScript',
    description: 'JavaScript with static typing.',
    image: '/ts.png',
  },
  {
    name: 'Figma',
    description: 'Collaborative interface design tool.',
    image: '/figma.png', 
  },
  {
    name: 'GitHub',
    description: 'Platform for version control and collaboration.',
    image: '/github.png', 
  },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen  py-16">
      <h1 className="text-[30px] underline border-dotted uppercase text-[#5A2848] text- text-center mb-6">My Skills</h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center transition-transform transform hover:scale-105"
          >
            <div className="w-20 h-20 mb-4">
              <Image
                src={skill.image}
                alt={skill.name}
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <h2 className="text-2xl font-semibold text-gray-700">{skill.name}</h2>
            <p className="text-gray-600 mt-2">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 


