'use client';

import Hero from './components/Hero';
import Experience from './components/Experience';
import OurClients from './components/OurClients';
import Community from './components/Community';
import Blog from './components/Blog';
import CallToAction from './components/CallToAction';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Experience Section with animate-on-scroll */}
      <section className="section">
        <Experience />
      </section>

      {/* Clients Section */}
      <section className="section bg-neutral-50">
        <OurClients />
      </section>

      {/* Community Section */}
      <section className="section bg-neutral-50">
        <Community />
      </section>

      {/* Blog Section */}
      <section className="section">
        <Blog />
      </section>

      {/* Call to Action */}
      <section className="section bg-gradient-to-r from-primary-500 to-secondary-500">
        <CallToAction />
      </section>
    </div>
  );
}
