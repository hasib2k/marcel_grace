import { Metadata } from 'next';
import { FaBullseye, FaEye, FaHandshake, FaLightbulb, FaCheckCircle, FaUsers, FaShieldAlt, FaCogs, FaShoppingCart, FaHeartbeat, FaUniversity, FaGraduationCap, FaBuilding, FaIndustry, FaTruck, FaFilm, FaReact, FaVuejs, FaAngular, FaPython, FaPhp, FaJava, FaNodeJs, FaMobileAlt, FaCloud, FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiDjango, SiFlutter, SiSwift, SiKotlin, SiMongodb, SiPostgresql, SiMysql, SiGooglecloud } from 'react-icons/si';

export const metadata: Metadata = {
  title: 'About Marcel Grace Infotech - Software Development Experts',
  description: 'Learn about Marcel Grace Infotech, a leading software development company with 5+ years of experience, 150+ successful projects, and expertise in cutting-edge technologies.',
  keywords: ['software development company', 'web development', 'mobile app development', 'Marcel Grace Infotech', 'technology solutions', 'digital transformation'],
  authors: [{ name: 'Marcel Grace Infotech' }],
  creator: 'Marcel Grace Infotech',
  publisher: 'Marcel Grace Infotech',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://marcelgrace.com'),
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Marcel Grace Infotech - Software Development Experts',
    description: 'Learn about Marcel Grace Infotech, a leading software development company with 5+ years of experience, 150+ successful projects, and expertise in cutting-edge technologies.',
    url: '/about',
    siteName: 'Marcel Grace Infotech',
    images: [
      {
        url: '/assets/mg_logo2.png',
        width: 1200,
        height: 630,
        alt: 'Marcel Grace Infotech Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Marcel Grace Infotech - Software Development Experts',
    description: 'Learn about Marcel Grace Infotech, a leading software development company with 5+ years of experience, 150+ successful projects, and expertise in cutting-edge technologies.',
    images: ['/assets/mg_logo2.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function About() {
  return (
    <main className="min-h-screen bg-white relative">
      {/* Futuristic White Background: Subtle SVG line grid pattern, no gradients or blur */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.06 }}>
          <g stroke="#697565" strokeWidth="0.5">
            {Array.from({ length: 19 }).map((_, i) => (
              <line key={'h'+i} x1="0" y1={i*48} x2="1440" y2={i*48} />
            ))}
            {Array.from({ length: 31 }).map((_, i) => (
              <line key={'v'+i} x1={i*48} y1="0" x2={i*48} y2="900" />
            ))}
          </g>
        </svg>
      </div>

      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          {/* Hero Section */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 mt-10 sm:mt-0">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#181C14] mb-4 sm:mb-6 tracking-tight leading-[1.1]">
              About Marcel Grace
            </h1>
            <p className="font-body text-lg sm:text-xl md:text-2xl text-[#3C3D37] max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
              Leading software development company transforming businesses through innovative technology solutions.
            </p>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16">
            {/* Mission */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 shadow-lg p-4 sm:p-5 text-center">
              <div className="mb-3">
                <FaBullseye className="text-3xl sm:text-4xl text-[#697565] mx-auto" />
              </div>
              <h3 className="font-heading text-base sm:text-lg font-bold text-[#181C14] mb-3 tracking-wide">
                Our Mission
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed font-light tracking-wide">
                To revolutionize businesses through innovative software solutions that drive efficiency, growth, and competitive advantage in the digital age.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 shadow-lg p-4 sm:p-5 text-center">
              <div className="mb-3">
                <FaEye className="text-3xl sm:text-4xl text-[#697565] mx-auto" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#181C14] mb-3 tracking-wide">
                Our Vision
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed font-light tracking-wide">
                To become the global leader in software development, recognized for innovation, excellence, and transformative technology solutions.
              </p>
            </div>

            {/* Values */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 shadow-lg p-4 sm:p-5 text-center">
              <div className="mb-3">
                <FaHandshake className="text-3xl sm:text-4xl text-[#697565] mx-auto" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#181C14] mb-3 tracking-wide">
                Our Values
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed font-light tracking-wide">
                Integrity, innovation, excellence, and client-centric approach guide everything we do.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8 sm:mb-12 md:mb-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 shadow-lg p-4 sm:p-6 md:p-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#181C14] text-center mb-6 sm:mb-8 tracking-wide">
              Why Choose Marcel Grace?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <FaLightbulb className="text-2xl sm:text-3xl text-[#697565] mx-auto mb-3" />
                <h3 className="text-base font-semibold text-[#181C14] mb-2 tracking-wide">
                  Innovation Driven
                </h3>
                <p className="text-sm text-gray-700 font-light leading-relaxed">
                  Cutting-edge technologies and creative solutions for modern challenges.
                </p>
              </div>
              
              <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <FaCheckCircle className="text-2xl sm:text-3xl text-[#697565] mx-auto mb-3" />
                <h3 className="text-base font-semibold text-[#181C14] mb-2 tracking-wide">
                  Proven Track Record
                </h3>
                <p className="text-sm text-gray-700 font-light leading-relaxed">
                  150+ successful projects delivered on time with exceptional quality.
                </p>
              </div>
              
              <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <FaUsers className="text-2xl sm:text-3xl text-[#697565] mx-auto mb-3" />
                <h3 className="text-base font-semibold text-[#181C14] mb-2 tracking-wide">
                  Expert Team
                </h3>
                <p className="text-sm text-gray-700 font-light leading-relaxed">
                  Skilled developers and consultants with extensive industry experience.
                </p>
              </div>
              
              <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <FaShieldAlt className="text-2xl sm:text-3xl text-[#697565] mx-auto mb-3" />
                <h3 className="text-base font-semibold text-[#181C14] mb-2 tracking-wide">
                  Security Focused
                </h3>
                <p className="text-sm text-gray-700 font-light leading-relaxed">
                  Enterprise-grade security and comprehensive data protection.
                </p>
              </div>
              
              <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <FaCogs className="text-2xl sm:text-3xl text-[#697565] mx-auto mb-3" />
                <h3 className="text-base font-semibold text-[#181C14] mb-2 tracking-wide">
                  Scalable Solutions
                </h3>
                <p className="text-sm text-gray-700 font-light leading-relaxed">
                  Future-ready architecture designed for growth and scalability.
                </p>
              </div>
              
              <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <FaHandshake className="text-xl sm:text-2xl md:text-3xl text-[#697565] mx-auto mb-2 sm:mb-3" />
                <h3 className="text-sm sm:text-base font-semibold text-[#181C14] mb-2 tracking-wide">
                  Client Partnership
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 tracking-wide">
                  Long-term relationships and ongoing support
                </p>
              </div>
            </div>
          </div>

          {/* Industries We Serve */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#181C14] text-center mb-6 sm:mb-8 tracking-wide">
              Industries We Transform
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <FaShoppingCart className="text-xl sm:text-2xl text-[#697565] mx-auto mb-2" />
                <span className="text-sm font-medium text-[#181C14]">E-commerce</span>
              </div>
              
              <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <FaHeartbeat className="text-xl sm:text-2xl text-[#697565] mx-auto mb-2" />
                <span className="text-sm font-medium text-[#181C14]">Healthcare</span>
              </div>
              
              <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <FaUniversity className="text-xl sm:text-2xl text-[#697565] mx-auto mb-2" />
                <span className="text-sm font-medium text-[#181C14]">Fintech</span>
              </div>
              
              <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <FaGraduationCap className="text-xl sm:text-2xl text-[#697565] mx-auto mb-2" />
                <span className="text-sm font-medium text-[#181C14]">Education</span>
              </div>
              
              <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <FaBuilding className="text-xl sm:text-2xl text-[#697565] mx-auto mb-2" />
                <span className="text-sm font-medium text-[#181C14]">Real Estate</span>
              </div>
              
              <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <FaIndustry className="text-xl sm:text-2xl text-[#697565] mx-auto mb-2" />
                <span className="text-sm font-medium text-[#181C14]">Manufacturing</span>
              </div>
              
              <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <FaTruck className="text-xl sm:text-2xl text-[#697565] mx-auto mb-2" />
                <span className="text-sm font-medium text-[#181C14]">Logistics</span>
              </div>
              
              <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <FaFilm className="text-xl sm:text-2xl text-[#697565] mx-auto mb-2" />
                <span className="text-sm font-medium text-[#181C14]">Media</span>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-8 sm:mb-12 md:mb-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 shadow-lg p-4 sm:p-6 md:p-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#181C14] text-center mb-6 sm:mb-8 tracking-wide">
              Our Technology Expertise
            </h2>
            
            {/* Frontend Technologies */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-semibold text-[#181C14] mb-4 sm:mb-5 tracking-wide text-center">
                Frontend Development
              </h3>
              <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
                <div className="text-center p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <FaReact className="text-xl sm:text-2xl text-blue-500 mx-auto mb-1" />
                  <span className="text-xs font-medium text-[#181C14] block">React</span>
                </div>
                
                <div className="text-center p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <SiNextdotjs className="text-xl sm:text-2xl text-black mx-auto mb-1" />
                  <span className="text-xs font-medium text-[#181C14] block">Next.js</span>
                </div>
                
                <div className="text-center p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <FaVuejs className="text-xl sm:text-2xl text-green-500 mx-auto mb-1" />
                  <span className="text-xs font-medium text-[#181C14] block">Vue.js</span>
                </div>
                
                <div className="text-center p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <FaAngular className="text-xl sm:text-2xl text-red-500 mx-auto mb-1" />
                  <span className="text-xs font-medium text-[#181C14] block">Angular</span>
                </div>
                
                <div className="text-center p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <SiTypescript className="text-xl sm:text-2xl text-blue-600 mx-auto mb-1" />
                  <span className="text-xs font-medium text-[#181C14] block">TypeScript</span>
                </div>
                
                <div className="text-center p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <SiTailwindcss className="text-xl sm:text-2xl text-cyan-500 mx-auto mb-1" />
                  <span className="text-xs font-medium text-[#181C14] block">Tailwind</span>
                </div>
              </div>
            </div>

            {/* Backend Technologies */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-semibold text-[#181C14] mb-4 sm:mb-5 tracking-wide text-center">
                Backend Development
              </h3>
              <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
                <div className="text-center p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <FaNodeJs className="text-xl sm:text-2xl text-green-600 mx-auto mb-1" />
                  <span className="text-xs font-medium text-[#181C14] block">Node.js</span>
                </div>
                
                <div className="text-center p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <SiExpress className="text-xl sm:text-2xl text-gray-700 mx-auto mb-1" />
                  <span className="text-xs font-medium text-[#181C14] block">Express</span>
                </div>
                
                <div className="text-center p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <FaPython className="text-xl sm:text-2xl text-yellow-500 mx-auto mb-1" />
                  <span className="text-xs font-medium text-[#181C14] block">Python</span>
                </div>
                
                <div className="text-center p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <SiDjango className="text-xl sm:text-2xl text-green-700 mx-auto mb-1" />
                  <span className="text-xs font-medium text-[#181C14] block">Django</span>
                </div>
                
                <div className="text-center p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <FaPhp className="text-xl sm:text-2xl text-purple-600 mx-auto mb-1" />
                  <span className="text-xs font-medium text-[#181C14] block">PHP</span>
                </div>
                
                <div className="text-center p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <FaJava className="text-xl sm:text-2xl text-red-600 mx-auto mb-1" />
                  <span className="text-xs font-medium text-[#181C14] block">Java</span>
                </div>
              </div>
            </div>

            {/* Mobile Development */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-semibold text-[#181C14] mb-4 sm:mb-5 tracking-wide text-center">
                Mobile Development
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                <div className="text-center p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <SiFlutter className="text-xl sm:text-2xl text-blue-400 mx-auto mb-1" />
                  <span className="text-xs font-medium text-[#181C14] block">Flutter</span>
                </div>
                
                <div className="text-center p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <FaReact className="text-xl sm:text-2xl text-blue-500 mx-auto mb-1" />
                  <span className="text-xs font-medium text-[#181C14] block">React Native</span>
                </div>
                
                <div className="text-center p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <SiSwift className="text-xl sm:text-2xl text-orange-500 mx-auto mb-1" />
                  <span className="text-xs font-medium text-[#181C14] block">Swift</span>
                </div>
                
                <div className="text-center p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <SiKotlin className="text-xl sm:text-2xl text-purple-500 mx-auto mb-1" />
                  <span className="text-xs font-medium text-[#181C14] block">Kotlin</span>
                </div>
              </div>
            </div>

            {/* Database & Cloud */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#181C14] mb-4 sm:mb-5 tracking-wide text-center">
                Database & Cloud
              </h3>
              <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4">
                <div className="text-center p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <SiMongodb className="text-xl sm:text-2xl text-green-500 mx-auto mb-1" />
                  <span className="text-xs font-medium text-[#181C14] block">MongoDB</span>
                </div>
                
                <div className="text-center p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <SiPostgresql className="text-xl sm:text-2xl text-blue-600 mx-auto mb-1" />
                  <span className="text-xs font-medium text-[#181C14] block">PostgreSQL</span>
                </div>
                
                <div className="text-center p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <SiMysql className="text-xl sm:text-2xl text-blue-500 mx-auto mb-1" />
                  <span className="text-xs font-medium text-[#181C14] block">MySQL</span>
                </div>
                
                <div className="text-center p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <FaAws className="text-xl sm:text-2xl text-orange-500 mx-auto mb-1" />
                  <span className="text-xs font-medium text-[#181C14] block">AWS</span>
                </div>
                
                <div className="text-center p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <SiGooglecloud className="text-xl sm:text-2xl text-blue-500 mx-auto mb-1" />
                  <span className="text-xs font-medium text-[#181C14] block">Google Cloud</span>
                </div>
              </div>
            </div>
          </div>

          {/* Company Stats */}
          <div className="mb-6 sm:mb-8 md:mb-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 shadow-lg p-4 sm:p-6 md:p-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#181C14] text-center mb-6 sm:mb-8 tracking-wide">
              Our Achievements
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#697565] mb-1">150+</div>
                <div className="text-sm font-semibold text-[#181C14] tracking-wide">Projects Completed</div>
              </div>
              
              <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#697565] mb-1">5+</div>
                <div className="text-sm font-semibold text-[#181C14] tracking-wide">Years Experience</div>
              </div>
              
              <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#697565] mb-1">98%</div>
                <div className="text-sm font-semibold text-[#181C14] tracking-wide">Client Satisfaction</div>
              </div>
              
              <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#697565] mb-1">24/7</div>
                <div className="text-sm font-semibold text-[#181C14] tracking-wide">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
