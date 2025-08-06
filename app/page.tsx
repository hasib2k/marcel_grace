import Hero from './components/Hero';
import About from './components/About';
import FeaturedProjects from './components/FeaturedProjects';
import FeaturedServices from './components/FeaturedAITools';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-950">
      <Hero />
      <About />
      <FeaturedProjects />
      <FeaturedServices />
      <Contact />
    </main>
  );
}
