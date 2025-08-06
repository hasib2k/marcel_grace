import { Metadata } from 'next';

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
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 mt-8 md:mt-0">
            About <span className="gradient-text">Marcel Grace Infotech</span>
          </h1>
          <div className="overflow-hidden md:overflow-visible">
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-scroll-mobile md:animate-none whitespace-nowrap md:whitespace-normal">
              Leading software development company transforming businesses through innovative technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="glass-card p-8 lg:p-12 mb-16">
            <div className="max-w-4xl mx-auto space-y-6 text-gray-300 leading-relaxed">
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
            </div>
          </div>

          {/* Mission, Vision, Why Choose Us */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold gradient-text mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To empower businesses with innovative software solutions that drive growth, enhance 
                efficiency, and create competitive advantages in the digital landscape. We are committed 
                to delivering exceptional quality while building long-term partnerships with our clients.
              </p>
            </div>

            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold gradient-text mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                To be the global leader in software innovation, known for our technical excellence, 
                creative problem-solving, and unwavering commitment to client success. We envision 
                a future where technology seamlessly integrates with business processes to unlock 
                unlimited potential.
              </p>
            </div>

            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold gradient-text mb-4">Why Choose Us</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>150+ successful projects</li>
                <li>Expert certified team</li>
                <li>Agile methodology</li>
                <li>24/7 support services</li>
                <li>Competitive pricing</li>
                <li>Cutting-edge technology</li>
                <li>Security & scalability focus</li>
              </ul>
            </div>
          </div>

          {/* Company Stats */}
          <div className="glass-card p-8 lg:p-12 mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Company Stats</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">150+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">5+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">100+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-gray-400">Support Available</div>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-card p-6 text-center">
                <h3 className="gradient-text font-semibold text-xl mb-3">Innovation</h3>
                <p className="text-gray-300">Constantly exploring new technologies and methodologies to deliver cutting-edge solutions.</p>
              </div>
              <div className="glass-card p-6 text-center">
                <h3 className="gradient-text font-semibold text-xl mb-3">Quality</h3>
                <p className="text-gray-300">Maintaining the highest standards in code quality, testing, and project delivery.</p>
              </div>
              <div className="glass-card p-6 text-center">
                <h3 className="gradient-text font-semibold text-xl mb-3">Collaboration</h3>
                <p className="text-gray-300">Working closely with clients as partners to achieve shared success and goals.</p>
              </div>
              <div className="glass-card p-6 text-center">
                <h3 className="gradient-text font-semibold text-xl mb-3">Integrity</h3>
                <p className="text-gray-300">Conducting business with honesty, transparency, and ethical practices.</p>
              </div>
            </div>
          </div>

          {/* Our Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="glass-card p-8">
              <h2 className="text-3xl font-bold gradient-text mb-6">Our Story</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Marcel Grace Infotech was born from a simple yet powerful idea: to make technology accessible 
                and transformative for businesses of all sizes. Our journey began when our founder, passionate 
                about solving complex problems through code, recognized the gap between business needs and 
                technical solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                What started as a small team of dedicated developers has grown into a comprehensive technology 
                partner, serving clients across the globe. Through years of evolution, we've maintained our 
                core commitment to excellence while expanding our expertise across emerging technologies.
              </p>
            </div>

            <div className="glass-card p-8">
              <h2 className="text-3xl font-bold gradient-text mb-6">Our Approach</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="gradient-text font-semibold mb-2">Discovery & Planning</h3>
                    <p className="text-gray-300 text-sm">Understanding your business, goals, and challenges to create a tailored strategy.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="gradient-text font-semibold mb-2">Development & Testing</h3>
                    <p className="text-gray-300 text-sm">Agile development process with continuous testing and quality assurance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="gradient-text font-semibold mb-2">Launch & Support</h3>
                    <p className="text-gray-300 text-sm">Deployment and ongoing support for optimal performance and growth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Industries We Serve */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Industries We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {['E-commerce', 'Healthcare', 'FinTech', 'Education', 'Real Estate', 'Manufacturing', 'Logistics', 'Entertainment'].map((industry) => (
                <div key={industry} className="glass-card p-4 text-center hover:scale-105 transition-transform">
                  <div className="gradient-text font-semibold text-sm">{industry}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Tech Stack */}
          <div className="glass-card p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Our Tech Stack</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="gradient-text font-semibold text-xl mb-4">Frontend Technologies</h3>
                <div className="flex flex-wrap gap-3 mb-8">
                  {['React.js', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                    <span key={tech} className="glass-card px-4 py-2 text-sm text-gray-300">{tech}</span>
                  ))}
                </div>
                
                <h3 className="gradient-text font-semibold text-xl mb-4">Backend Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {['Node.js', 'Python', 'PHP', 'Java', 'Express.js', 'Django'].map((tech) => (
                    <span key={tech} className="glass-card px-4 py-2 text-sm text-gray-300">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="gradient-text font-semibold text-xl mb-4">Mobile Development</h3>
                <div className="flex flex-wrap gap-3 mb-8">
                  {['React Native', 'Flutter', 'iOS (Swift)', 'Android (Kotlin)', 'Xamarin'].map((tech) => (
                    <span key={tech} className="glass-card px-4 py-2 text-sm text-gray-300">{tech}</span>
                  ))}
                </div>
                
                <h3 className="gradient-text font-semibold text-xl mb-4">Databases & Cloud</h3>
                <div className="flex flex-wrap gap-3">
                  {['MongoDB', 'PostgreSQL', 'MySQL', 'AWS', 'Google Cloud', 'Microsoft Azure'].map((tech) => (
                    <span key={tech} className="glass-card px-4 py-2 text-sm text-gray-300">{tech}</span>
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
