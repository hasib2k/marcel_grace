import React from 'react';
import { Metadata } from 'next';
import { FaBullseye, FaEye, FaHandshake, FaLightbulb, FaCheckCircle, FaUsers, FaShieldAlt, FaCogs, FaShoppingCart, FaHeartbeat, FaUniversity, FaGraduationCap, FaBuilding, FaIndustry, FaTruck, FaFilm, FaReact, FaVuejs, FaAngular, FaPython, FaPhp, FaJava, FaNodeJs, FaMobileAlt, FaCloud, FaAws, FaDatabase } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiDjango, SiFlutter, SiSwift, SiKotlin, SiMongodb, SiPostgresql, SiMysql, SiGooglecloud } from 'react-icons/si';

export const metadata: Metadata = {
  title: 'About Marcel Grace Infotech - Software Development Experts',
  description: 'Learn about Marcel Grace Infotech - Leading software development company with 5+ years experience, 150+ successful projects. Expert team delivering innovative digital solutions.',
  keywords: [
    'about marcel grace infotech',
    'software development company',
    'web development experts',
    'mobile app developers',
    'digital transformation',
    'technology solutions'
  ],
  openGraph: {
    title: 'About Marcel Grace Infotech - Software Development Experts',
    description: 'Learn about Marcel Grace Infotech - Leading software development company with 5+ years experience, 150+ successful projects.',
    url: 'https://marcelgrace.com/about',
    type: 'website',
    images: [
      {
        url: '/assets/mg_logo2.png',
        width: 1200,
        height: 630,
        alt: 'About Marcel Grace Infotech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Marcel Grace Infotech - Software Development Experts',
    description: 'Learn about Marcel Grace Infotech - Leading software development company with 5+ years experience, 150+ successful projects.',
  },
  alternates: {
    canonical: '/about',
  },
};

export default function About() {
  return (
  <main className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="pt-16 sm:pt-20 md:pt-24 pb-4 sm:pb-8 md:pb-12 bg-white">
      <div className="max-w-4xl mx-auto px-2 sm:px-4 md:px-8 text-center">
        <h1 className="text-xs sm:text-sm md:text-lg font-bold text-[#181C14] mb-1 mt-2 md:mt-0">
          About <span className="text-[#181C14]">Marcel Grace Infotech</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-[#3C3D37] max-w-xl mx-auto mb-1">
          Leading software development company transforming businesses through innovative technology solutions
        </p>
      </div>
    </section>

    {/* Main Content */}
    <section className="py-6 sm:py-10 md:py-14">
      <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-8 lg:px-12 xl:px-20">
        {/* Introduction */}
        <div className="p-2 sm:p-4 mb-4 bg-white">
          <div className="max-w-5xl mx-auto space-y-2 text-gray-800 leading-relaxed">
            <p className="text-[10px] sm:text-xs md:text-sm mb-1">
              Marcel Grace Infotech is a leading software development company at the forefront of digital transformation, committed to empowering organizations of all sizes to thrive in an ever-evolving technological landscape. Since our inception, we have been driven by a singular vision: to bridge the gap between complex business challenges and the limitless possibilities of cutting-edge technology. Our journey began with a passion for innovation and a deep understanding of the unique hurdles faced by modern enterprises. Over the years, we have cultivated a reputation for excellence, reliability, and partnership, becoming a trusted technology ally for organizations across the globe. Our approach is rooted in collaboration, transparency, and a relentless pursuit of quality, ensuring that every solution we deliver is tailored to the specific needs and aspirations of our clients. Whether working with startups or established enterprises, we are dedicated to building long-term relationships founded on trust, integrity, and shared success.
            </p>
            <p className="text-[10px] sm:text-xs md:text-sm mb-0">
              With over 5 years of industry experience, Marcel Grace Infotech boasts a dynamic team of expert developers, creative designers, and strategic consultants who bring a wealth of knowledge and passion to every project. Our portfolio spans 150+ successful projects delivered across a diverse range of industries, including e-commerce, healthcare, finance, education, real estate, manufacturing, logistics, and entertainment. We specialize in crafting bespoke software solutions, robust web applications, intuitive mobile apps, and scalable cloud platforms that drive measurable growth and operational efficiency for our clients. Our commitment to staying ahead of technological trends enables us to offer innovative, future-ready solutions that not only address current business needs but also anticipate tomorrow’s opportunities. At Marcel Grace Infotech, we believe in the power of technology to transform businesses, unlock new revenue streams, and create lasting competitive advantages in the digital age.
            </p>
          </div>
        </div>

        {/* Mission, Vision, Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mb-8">
          <div className="p-3 bg-white flex flex-col items-center text-center">
            <FaBullseye className="text-[#697565] w-7 h-7 mb-1" />
            <h2 className="text-xs sm:text-sm md:text-base font-bold text-[#181C14] mb-1">Our Mission</h2>
            <p className="text-[10px] sm:text-xs md:text-sm text-[#3C3D37] leading-relaxed">
              To empower businesses with innovative software solutions that drive growth, enhance 
              efficiency, and create competitive advantages in the digital landscape. We are committed 
              to delivering exceptional quality while building long-term partnerships with our clients.
            </p>
            </div>

            <div className="p-3 bg-white flex flex-col items-center text-center">
              <FaEye className="text-[#697565] w-7 h-7 mb-1" />
              <h2 className="text-xs md:text-base font-bold text-[#181C14] mb-1">Our Vision</h2>
              <p className="text-[10px] text-[#3C3D37] leading-relaxed">
                To be the global leader in software innovation, known for our technical excellence, 
                creative problem-solving, and unwavering commitment to client success. We envision 
                a future where technology seamlessly integrates with business processes to unlock 
                unlimited potential.
              </p>
            </div>

            <div className="p-3 bg-white flex flex-col items-center text-center">
              <FaHandshake className="text-[#697565] w-7 h-7 mb-1" />
              <h2 className="text-xs md:text-base font-bold text-[#181C14] mb-1">Why Choose Us</h2>
              <ul className="list-none space-y-1 text-[10px] text-[#3C3D37] text-left">
                <li className="flex items-center gap-2"><FaCheckCircle className="text-[#697565] w-4 h-4" />150+ successful projects</li>
                <li className="flex items-center gap-2"><FaUsers className="text-[#697565] w-4 h-4" />Expert certified team</li>
                <li className="flex items-center gap-2"><FaCogs className="text-[#697565] w-4 h-4" />Agile methodology</li>
                <li className="flex items-center gap-2"><FaShieldAlt className="text-[#697565] w-4 h-4" />24/7 support services</li>
                <li className="flex items-center gap-2"><FaLightbulb className="text-[#697565] w-4 h-4" />Cutting-edge technology</li>
              </ul>
            </div>
          </div>

          {/* Company Stats */}
      <div className="p-4 mb-8 bg-white">
    <h2 className="text-xs md:text-base font-bold text-center text-[#181C14] mb-4">Company Stats</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center border border-[#ECDFCC] bg-white p-2 rounded-none">
        <div className="text-sm md:text-base font-bold text-black mb-1">150+</div>
                <div className="text-[10px] text-gray-700">Projects Completed</div>
              </div>
              <div className="text-center border border-[#ECDFCC] bg-white p-2 rounded-none">
        <div className="text-sm md:text-base font-bold text-black mb-1">5+</div>
                <div className="text-[10px] text-gray-700">Years Experience</div>
              </div>
              <div className="text-center border border-[#ECDFCC] bg-white p-2 rounded-none">
        <div className="text-sm md:text-base font-bold text-black mb-1">100+</div>
                <div className="text-[10px] text-gray-700">Happy Clients</div>
              </div>
              <div className="text-center border border-[#ECDFCC] bg-white p-2 rounded-none">
        <div className="text-sm md:text-base font-bold text-black mb-1">24/7</div>
                <div className="text-[10px] text-gray-700">Support Available</div>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-8">
      <h2 className="text-xs md:text-base font-bold text-center text-[#181C14] mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
              <div className="p-3 text-center bg-white flex flex-col items-center">
                <FaLightbulb className="text-[#697565] w-6 h-6 mb-1" />
                <h3 className="text-[#181C14] font-semibold text-[10px] md:text-xs mb-1">Innovation</h3>
                <p className="text-[10px] text-[#3C3D37]">Constantly exploring new technologies and methodologies to deliver cutting-edge solutions.</p>
              </div>
              <div className="p-3 text-center bg-white flex flex-col items-center">
                <FaCheckCircle className="text-[#697565] w-6 h-6 mb-1" />
                <h3 className="text-[#181C14] font-semibold text-[10px] md:text-xs mb-1">Quality</h3>
                <p className="text-[10px] text-[#3C3D37]">Maintaining the highest standards in code quality, testing, and project delivery.</p>
              </div>
              <div className="p-3 text-center bg-white flex flex-col items-center">
                <FaUsers className="text-[#697565] w-6 h-6 mb-1" />
                <h3 className="text-[#181C14] font-semibold text-[10px] md:text-xs mb-1">Collaboration</h3>
                <p className="text-[10px] text-[#3C3D37]">Working closely with clients as partners to achieve shared success and goals.</p>
              </div>
              <div className="p-3 text-center bg-white flex flex-col items-center">
                <FaShieldAlt className="text-[#697565] w-6 h-6 mb-1" />
                <h3 className="text-[#181C14] font-semibold text-[10px] md:text-xs mb-1">Integrity</h3>
                <p className="text-[10px] text-[#3C3D37]">Conducting business with honesty, transparency, and ethical practices.</p>
              </div>
            </div>
          </div>

          {/* Our Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="p-6 bg-white">
    <h2 className="text-xs md:text-base font-bold text-black mb-6">Our Story</h2>
              <p className="text-[10px] text-gray-700 leading-relaxed mb-4">
                Marcel Grace Infotech was born from a simple yet powerful idea: to make technology accessible 
                and transformative for businesses of all sizes. Our journey began when our founder, passionate 
                about solving complex problems through code, recognized the gap between business needs and 
                technical solutions.
              </p>
              <p className="text-[10px] text-gray-700 leading-relaxed">
                What started as a small team of dedicated developers has grown into a comprehensive technology 
                partner, serving clients across the globe. Through years of evolution, we've maintained our 
                core commitment to excellence while expanding our expertise across emerging technologies.
              </p>
            </div>

            <div className="p-6 bg-white">
    <h2 className="text-xs md:text-base font-bold text-black mb-6">Our Approach</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold text-sm">1</span>
                  </div>
                  <div>
          <h3 className="text-black font-semibold text-[10px] md:text-xs mb-1">Discovery & Planning</h3>
                    <p className="text-[10px] text-gray-700">Understanding your business, goals, and challenges to create a tailored strategy.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold text-sm">2</span>
                  </div>
                  <div>
          <h3 className="text-black font-semibold text-[10px] md:text-xs mb-1">Development & Testing</h3>
                    <p className="text-[10px] text-gray-700">Agile development process with continuous testing and quality assurance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold text-sm">3</span>
                  </div>
                  <div>
          <h3 className="text-black font-semibold text-[10px] md:text-xs mb-1">Launch & Support</h3>
                    <p className="text-[10px] text-gray-700">Deployment and ongoing support for optimal performance and growth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Industries We Serve */}
          <div className="mb-8">
    <h2 className="text-xs md:text-base font-bold text-center text-[#181C14] mb-4">Industries We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-1">
              {[
                { name: 'E-commerce', icon: <FaShoppingCart className="mx-auto text-[#697565] w-6 h-6 mb-1" /> },
                { name: 'Healthcare', icon: <FaHeartbeat className="mx-auto text-[#697565] w-6 h-6 mb-1" /> },
                { name: 'FinTech', icon: <FaUniversity className="mx-auto text-[#697565] w-6 h-6 mb-1" /> },
                { name: 'Education', icon: <FaGraduationCap className="mx-auto text-[#697565] w-6 h-6 mb-1" /> },
                { name: 'Real Estate', icon: <FaBuilding className="mx-auto text-[#697565] w-6 h-6 mb-1" /> },
                { name: 'Manufacturing', icon: <FaIndustry className="mx-auto text-[#697565] w-6 h-6 mb-1" /> },
                { name: 'Logistics', icon: <FaTruck className="mx-auto text-[#697565] w-6 h-6 mb-1" /> },
                { name: 'Entertainment', icon: <FaFilm className="mx-auto text-[#697565] w-6 h-6 mb-1" /> },
              ].map(({ name, icon }) => (
                <div key={name} className="p-1 text-center bg-white flex flex-col items-center">
                  {icon}
                  <div className="text-[#181C14] font-semibold text-xs md:text-sm">{name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Tech Stack */}
      <div className="p-4 bg-white">
    <h2 className="text-xs md:text-base font-bold text-center text-[#181C14] mb-4">Our Tech Stack</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
        <h3 className="text-black font-semibold text-xs md:text-sm mb-2">Frontend Technologies</h3>
                <div className="flex flex-wrap gap-1 mb-3">
                  {[
                    { name: 'React.js', icon: <FaReact className="text-[#697565] w-4 h-4 mr-1" /> },
                    { name: 'Next.js', icon: <SiNextdotjs className="text-[#697565] w-4 h-4 mr-1" /> },
                    { name: 'Vue.js', icon: <FaVuejs className="text-[#697565] w-4 h-4 mr-1" /> },
                    { name: 'Angular', icon: <FaAngular className="text-[#697565] w-4 h-4 mr-1" /> },
                    { name: 'TypeScript', icon: <SiTypescript className="text-[#697565] w-4 h-4 mr-1" /> },
                    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#697565] w-4 h-4 mr-1" /> },
                  ].map(({ name, icon }) => (
                    <span key={name} className="flex items-center px-2 py-1 text-xs text-[#181C14] bg-white">
                      {icon}{name}
                    </span>
                  ))}
                </div>
                
        <h3 className="text-black font-semibold text-xs md:text-sm mb-2">Backend Technologies</h3>
                <div className="flex flex-wrap gap-1">
                  {[
                    { name: 'Node.js', icon: <FaNodeJs className="text-[#697565] w-4 h-4 mr-1" /> },
                    { name: 'Python', icon: <FaPython className="text-[#697565] w-4 h-4 mr-1" /> },
                    { name: 'PHP', icon: <FaPhp className="text-[#697565] w-4 h-4 mr-1" /> },
                    { name: 'Java', icon: <FaJava className="text-[#697565] w-4 h-4 mr-1" /> },
                    { name: 'Express.js', icon: <SiExpress className="text-[#697565] w-4 h-4 mr-1" /> },
                    { name: 'Django', icon: <SiDjango className="text-[#697565] w-4 h-4 mr-1" /> },
                  ].map(({ name, icon }) => (
                    <span key={name} className="flex items-center px-2 py-1 text-xs text-[#3C3D37] bg-white">
                      {icon}{name}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
        <h3 className="text-black font-semibold text-xs md:text-sm mb-2">Mobile Development</h3>
                <div className="flex flex-wrap gap-1 mb-3">
                  {[
                    { name: 'React Native', icon: <FaReact className="text-[#697565] w-4 h-4 mr-1" /> },
                    { name: 'Flutter', icon: <SiFlutter className="text-[#697565] w-4 h-4 mr-1" /> },
                    { name: 'iOS (Swift)', icon: <SiSwift className="text-[#697565] w-4 h-4 mr-1" /> },
                    { name: 'Android (Kotlin)', icon: <SiKotlin className="text-[#697565] w-4 h-4 mr-1" /> },
                    { name: 'Xamarin', icon: <FaMobileAlt className="text-[#697565] w-4 h-4 mr-1" /> },
                  ].map(({ name, icon }) => (
                    <span key={name} className="flex items-center px-2 py-1 text-xs text-[#3C3D37] bg-white">
                      {icon}{name}
                    </span>
                  ))}
                </div>
                
        <h3 className="text-black font-semibold text-xs md:text-sm mb-2">Databases & Cloud</h3>
                <div className="flex flex-wrap gap-1">
                  {[
                    { name: 'MongoDB', icon: <SiMongodb className="text-[#697565] w-4 h-4 mr-1" /> },
                    { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#697565] w-4 h-4 mr-1" /> },
                    { name: 'MySQL', icon: <SiMysql className="text-[#697565] w-4 h-4 mr-1" /> },
                    { name: 'AWS', icon: <FaAws className="text-[#697565] w-4 h-4 mr-1" /> },
                    { name: 'Google Cloud', icon: <SiGooglecloud className="text-[#697565] w-4 h-4 mr-1" /> },
                    { name: 'Microsoft Azure', icon: <FaCloud className="text-[#697565] w-4 h-4 mr-1" /> },
                  ].map(({ name, icon }) => (
                    <span key={name} className="flex items-center px-2 py-1 text-xs text-[#3C3D37] bg-white">
                      {icon}{name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
