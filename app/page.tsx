import Hero from './components/Hero';
import About from './components/About_new';
import FeaturedProjects from './components/FeaturedProjects';
import FeaturedServices from './components/FeaturedServices';
import TechStack from './components/TechStack';
import Contact from './components/Contact';


export default function Home() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden flex flex-col">
      {/* Tech Circuit Pattern Background - Same as Footer */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <pattern id="tech-circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect width="20" height="20" fill="none" stroke="#697565" strokeWidth="0.2"/>
              <circle cx="5" cy="5" r="1" fill="#697565"/>
              <circle cx="15" cy="15" r="1" fill="#697565"/>
              <line x1="5" y1="5" x2="15" y2="5" stroke="#697565" strokeWidth="0.2"/>
              <line x1="15" y1="5" x2="15" y2="15" stroke="#697565" strokeWidth="0.2"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#tech-circuit)"/>
          </svg>
        </div>
      </div>
      
      <section className="relative w-full px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 pt-4 sm:pt-6 md:pt-8 lg:pt-10">
        <Hero />
      </section>
      <section className="relative w-full px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 pt-6 sm:pt-8 md:pt-10 lg:pt-12">
        <About />
      </section>
      <section className="relative w-full px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 pt-6 sm:pt-8 md:pt-10 lg:pt-12">
        <FeaturedProjects />
      </section>
      <section className="relative w-full px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 pt-6 sm:pt-8 md:pt-10 lg:pt-12">
        <FeaturedServices />
      </section>
      <section className="relative w-full px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 pt-6 sm:pt-8 md:pt-10 lg:pt-12">
        <TechStack />
      </section>
      <section className="relative w-full px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-8 sm:pb-10 md:pb-12 lg:pb-16">
        <Contact />
      </section>
    </main>
  );
}
