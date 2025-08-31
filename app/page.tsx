import Hero from './components/Hero';
import About from './components/About_new';
import FeaturedProjects from './components/FeaturedProjects';
import FeaturedServices from './components/FeaturedServices';
import Contact from './components/Contact';


export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <section className="w-full px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 pt-4 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20">
        <Hero />
      </section>
      <section className="w-full px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 pt-4 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20">
        <About />
      </section>
      <section className="w-full px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 pt-4 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20">
        <FeaturedProjects />
      </section>
      <section className="w-full px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 pt-4 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20">
        <FeaturedServices />
      </section>
      <section className="w-full px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 pt-4 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20 pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24">
        <Contact />
      </section>
    </main>
  );
}
