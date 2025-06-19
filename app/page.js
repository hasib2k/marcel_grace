'use client';

import Hero from './components/Hero';
import Services from './components/Services';
import Experience from './components/Experience';
import OurClients from './components/OurClients';
import Community from './components/Community';
import Blog from './components/Blog';
import CallToAction from './components/CallToAction';

export default function Home() {
  return (    <div className="overflow-hidden">
      <Hero />
      <Services />
      <Experience />
      <OurClients />
      <Community />
      <Blog />
      <div className="bg-gradient-to-r from-primary-500 to-secondary-500">
        <CallToAction />
      </div>
    </div>
  );
}
