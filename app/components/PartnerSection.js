import Image from 'next/image';
import Link from 'next/link';

const partners = [
  {
    name: 'BrightPath Solutions',
    description: 'Enterprise software modernization',
    logo: '/assets/partners/brightpath.svg',
    link: '/service'
  },
  {
    name: 'HealthBridge BD',
    description: 'Healthcare app development',
    logo: '/assets/partners/healthbridge.svg',
    link: '/feature'
  },
  {
    name: 'TrendCart',
    description: 'E-commerce platform delivery',
    logo: '/assets/partners/trendcart.svg',
    link: '/product'
  },
  {
    name: 'Bloomfield Academy',
    description: 'Educational management systems',
    logo: '/assets/partners/bloomfield.svg',
    link: '/service'
  },
  {
    name: 'Digitex Solutions',
    description: 'End-to-end digital project solutions',
    logo: '/assets/partners/digitex.svg',
    link: '/feature'
  },
  {
    name: 'CargoXpress',
    description: 'Logistics and tracking innovations',
    logo: '/assets/partners/cargoxpress.svg',
    link: '/product'
  }
];

export default function PartnerSection() {
  return (
    <section className="relative pt-0 pb-16 overflow-x-hidden overflow-hidden w-full bg-white dark:bg-neutral-950">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary-50/50 via-white/50 to-secondary-50/50 pointer-events-none">
        <div className="absolute inset-0 w-full h-full bg-dots opacity-20"></div>
        <div className="absolute inset-0 w-full h-full" style={{background: 'radial-gradient(circle, rgba(0, 131, 223, 0.1) 0%, transparent 70%)', opacity: 0.68, transform: 'translateY(72.6px) translateZ(0px)'}}></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative w-full max-w-5xl">        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Building the Future with Our Partners

</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">Empowering businesses worldwide with cutting-edge technology solutions and innovative digital transformations.</p>
          <p className="mt-4 text-neutral-500 max-w-2xl mx-auto">We're proud to collaborate with forward-thinking organizations that share our vision of building a smarter digital future.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {partners.map((partner, idx) => (
            <Link href={partner.link} key={idx} className="group flex flex-col bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-100/50 hover:border-primary-200 backdrop-blur-sm hover:backdrop-blur-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-400 transform hover:-translate-y-1">
              <div className="relative flex items-center justify-center mb-6 w-24 h-24 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <Image src={partner.logo} alt={partner.name} width={96} height={96} className="relative transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="text-center">
                <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 group-hover:text-primary-600 transition-colors duration-300">{partner.name}</h4>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-primary-500 transition-colors duration-300">{partner.description}</p>
              </div>
            </Link>          ))}
        </div>
        <div className="text-center mt-8">
          <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20">
            <span className="mr-2 text-xl">🛠️</span>
            <p className="text-neutral-700 dark:text-neutral-300">Together, we're redefining industries through technology and trust.</p>
          </div>
        </div>
      </div>
    </section>
  );
}