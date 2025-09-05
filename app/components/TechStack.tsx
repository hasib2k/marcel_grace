import React from 'react';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiNodedotjs, 
  SiPython, 
  SiDjango, 
  SiExpress, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql, 
  SiMysql, 
  SiRedis,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGithub,
  SiStripe,
  SiPaypal,
  SiFirebase,
  SiSupabase,
  SiVercel,
  SiNetlify
} from 'react-icons/si';
import { FaVuejs, FaAngular, FaPhp, FaJava, FaReact } from 'react-icons/fa';

const TechStack = () => {
  const techCategories = [
    {
      title: 'Frontend Technologies',
      technologies: [
        { name: 'React', icon: <SiReact className="text-[#61DAFB]" size={24} /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-black" size={24} /> },
        { name: 'Vue.js', icon: <FaVuejs className="text-[#4FC08D]" size={24} /> },
        { name: 'Angular', icon: <FaAngular className="text-[#DD0031]" size={24} /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" size={24} /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" size={24} /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" size={24} /> },
      ]
    },
    {
      title: 'Backend Technologies',
      technologies: [
        { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" size={24} /> },
        { name: 'Python', icon: <SiPython className="text-[#3776AB]" size={24} /> },
        { name: 'Django', icon: <SiDjango className="text-[#092E20]" size={24} /> },
        { name: 'Express.js', icon: <SiExpress className="text-black" size={24} /> },
        { name: 'PHP', icon: <FaPhp className="text-[#777BB4]" size={24} /> },
        { name: 'Java', icon: <FaJava className="text-[#ED8B00]" size={24} /> },
      ]
    },
    {
      title: 'Databases & Storage',
      technologies: [
        { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" size={24} /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#336791]" size={24} /> },
        { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" size={24} /> },
        { name: 'Redis', icon: <SiRedis className="text-[#DC382D]" size={24} /> },
        { name: 'Firebase', icon: <SiFirebase className="text-[#FFCA28]" size={24} /> },
        { name: 'Supabase', icon: <SiSupabase className="text-[#3ECF8E]" size={24} /> },
      ]
    },
    {
      title: 'Cloud & DevOps',
      technologies: [
        { name: 'Google Cloud', icon: <SiGooglecloud className="text-[#4285F4]" size={24} /> },
        { name: 'Docker', icon: <SiDocker className="text-[#2496ED]" size={24} /> },
        { name: 'Kubernetes', icon: <SiKubernetes className="text-[#326CE5]" size={24} /> },
        { name: 'Vercel', icon: <SiVercel className="text-black" size={24} /> },
        { name: 'Netlify', icon: <SiNetlify className="text-[#00C7B7]" size={24} /> },
      ]
    },
    {
      title: 'Tools & Integrations',
      technologies: [
        { name: 'Git', icon: <SiGit className="text-[#F05032]" size={24} /> },
        { name: 'GitHub', icon: <SiGithub className="text-black" size={24} /> },
        { name: 'Stripe', icon: <SiStripe className="text-[#635BFF]" size={24} /> },
        { name: 'PayPal', icon: <SiPaypal className="text-[#00457C]" size={24} /> },
      ]
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 md:p-8">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black mb-2 sm:mb-3 tracking-wider uppercase">
          Tech Stack & Integrations
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto tracking-wide">
          We work with cutting-edge technologies and tools to deliver robust, scalable solutions that meet modern business needs.
        </p>
      </div>

      {/* Tech Categories Grid */}
      <div className="space-y-6 sm:space-y-8">
        {techCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 shadow-lg p-4 sm:p-5">
            <h3 className="text-base sm:text-lg md:text-xl font-black text-black mb-3 sm:mb-4 tracking-wider uppercase text-center">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-3 sm:gap-4">
              {category.technologies.map((tech, techIndex) => (
                <div 
                  key={techIndex}
                  className="bg-white rounded-xl border border-gray-200 shadow-md p-3 sm:p-4 flex flex-col items-center gap-2 hover:shadow-lg transition-shadow duration-200 group"
                >
                  <div className="group-hover:scale-110 transition-transform duration-200">
                    {tech.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-black text-black text-center tracking-wider uppercase">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-6 sm:mt-8">
        <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 tracking-wide">
          Need a technology not listed here? We're always exploring new tools and frameworks.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white px-4 sm:px-6 py-2 sm:py-3 font-black text-xs sm:text-sm rounded-xl shadow-lg tracking-wider uppercase hover:shadow-xl transition-shadow duration-200"
        >
          Discuss Your Tech Stack
        </a>
      </div>
    </div>
  );
};

export default TechStack;
