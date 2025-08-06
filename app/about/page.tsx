import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Marcel Grace Infotech',
  description: 'Learn about Marcel Grace Infotech - Leading software development company providing innovative solutions.',
};

export default function About() {
  return (
    <main className="min-h-screen bg-dark-950 pt-20 lg:pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">
          About Marcel Grace Infotech
        </h1>
        
        <div className="glass-card p-8 space-y-6 text-gray-300 leading-relaxed">
          <p className="text-lg">
            Marcel Grace Infotech is a leading software development company dedicated to transforming 
            businesses through innovative technology solutions. Founded with a vision to bridge the gap 
            between complex business challenges and cutting-edge technology, we have established ourselves 
            as a trusted partner for organizations worldwide.
          </p>
          
          <p className="text-lg">
            With over 5 years of experience in the industry, our team of expert developers, designers, 
            and consultants has successfully delivered 150+ projects across various industries. We 
            specialize in custom software development, web applications, mobile apps, and cloud solutions 
            that drive growth and operational efficiency.
          </p>
          
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
            <p className="text-lg">
              To empower businesses with innovative software solutions that drive growth, enhance 
              efficiency, and create competitive advantages in the digital landscape. We are committed 
              to delivering exceptional quality while building long-term partnerships with our clients.
            </p>
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Our Vision</h2>
            <p className="text-lg">
              To be the global leader in software innovation, known for our technical excellence, 
              creative problem-solving, and unwavering commitment to client success. We envision 
              a future where technology seamlessly integrates with business processes to unlock 
              unlimited potential.
            </p>
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Why Choose Us</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Proven track record with 150+ successful projects</li>
              <li>Expert team of certified developers and designers</li>
              <li>Agile development methodology for faster delivery</li>
              <li>24/7 support and maintenance services</li>
              <li>Competitive pricing with transparent billing</li>
              <li>Cutting-edge technology stack and best practices</li>
              <li>Strong focus on security and scalability</li>
            </ul>
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-4">
                <h3 className="gradient-text font-semibold mb-2">Innovation</h3>
                <p>Constantly exploring new technologies and methodologies to deliver cutting-edge solutions.</p>
              </div>
              <div className="glass-card p-4">
                <h3 className="gradient-text font-semibold mb-2">Quality</h3>
                <p>Maintaining the highest standards in code quality, testing, and project delivery.</p>
              </div>
              <div className="glass-card p-4">
                <h3 className="gradient-text font-semibold mb-2">Collaboration</h3>
                <p>Working closely with clients as partners to achieve shared success and goals.</p>
              </div>
              <div className="glass-card p-4">
                <h3 className="gradient-text font-semibold mb-2">Integrity</h3>
                <p>Conducting business with honesty, transparency, and ethical practices.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
