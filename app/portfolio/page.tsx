import { Metadata } from 'next';
import Link from 'next/link';
import PortfolioFilter from '../components/PortfolioFilter';

export const metadata: Metadata = {
  title: 'Portfolio - Marcel Grace Infotech',
  description: 'Portfolio showcasing software development projects by Marcel Grace Infotech',
};

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A comprehensive e-commerce solution built for a retail chain with 50+ stores. Features include inventory management, multi-vendor support, advanced analytics, payment gateway integration, and mobile-responsive design. The platform processes over 10,000 transactions daily.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'AWS', 'Redis'],
    category: 'E-Commerce',
    codeUrl: 'https://github.com/marcelgrace/ecommerce-platform',
    liveUrl: 'https://demo-ecommerce.marcelgrace.com/',
    featured: true,
  },
  {
    id: 2,
    title: 'Healthcare Management System',
    description: 'A complete healthcare management solution for hospitals and clinics. Includes patient records, appointment scheduling, billing, prescription management, and telemedicine capabilities. Serves over 25 healthcare facilities with 99.9% uptime.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Docker', 'JWT'],
    category: 'Healthcare',
    codeUrl: 'https://github.com/marcelgrace/healthcare-system',
    liveUrl: 'https://healthcare-demo.marcelgrace.com/',
    featured: true,
  },
  {
    id: 3,
    title: 'Financial Analytics Dashboard',
    description: 'Real-time financial analytics and reporting platform for investment firms. Features advanced charting, portfolio management, risk assessment, and automated reporting. Handles millions of data points with sub-second response times.',
    technologies: ['Vue.js', 'Python', 'Redis', 'Chart.js', 'Azure', 'WebSockets'],
    category: 'Finance',
    codeUrl: 'https://github.com/marcelgrace/financial-dashboard',
    liveUrl: 'https://finance-demo.marcelgrace.com/',
    featured: true,
  },
  {
    id: 4,
    title: 'Learning Management System',
    description: 'Modern LMS platform for educational institutions with course management, student tracking, assessments, and virtual classrooms.',
    technologies: ['React', 'Express.js', 'MySQL', 'WebRTC'],
    category: 'Education',
    codeUrl: 'https://github.com/marcelgrace/lms-platform',
    liveUrl: 'https://lms-demo.marcelgrace.com/',
    featured: false,
  },
  {
    id: 5,
    title: 'Real Estate CRM',
    description: 'Customer relationship management system for real estate agencies with property listings, client management, and sales tracking.',
    technologies: ['Angular', 'ASP.NET Core', 'SQL Server'],
    category: 'Real Estate',
    codeUrl: 'https://github.com/marcelgrace/realestate-crm',
    liveUrl: 'https://realestate-demo.marcelgrace.com/',
    featured: false,
  },
  {
    id: 6,
    title: 'Restaurant Management App',
    description: 'Complete restaurant management solution with POS system, inventory management, staff scheduling, and customer ordering.',
    technologies: ['React Native', 'Firebase', 'Node.js'],
    category: 'Restaurant',
    codeUrl: 'https://github.com/marcelgrace/restaurant-app',
    liveUrl: 'https://restaurant-demo.marcelgrace.com/',
    featured: false,
  },
  {
    id: 7,
    title: 'IoT Monitoring Dashboard',
    description: 'Real-time monitoring dashboard for IoT devices with data visualization, alerts, and device management capabilities.',
    technologies: ['React', 'Python', 'InfluxDB', 'MQTT'],
    category: 'IoT',
    codeUrl: 'https://github.com/marcelgrace/iot-dashboard',
    liveUrl: 'https://iot-demo.marcelgrace.com/',
    featured: false,
  },
  {
    id: 8,
    title: 'Social Media Analytics Tool',
    description: 'Comprehensive social media analytics platform with sentiment analysis, engagement tracking, and automated reporting.',
    technologies: ['Python', 'Django', 'Elasticsearch', 'React'],
    category: 'Analytics',
    codeUrl: 'https://github.com/marcelgrace/social-analytics',
    liveUrl: 'https://social-demo.marcelgrace.com/',
    featured: false,
  },
];

const categories = ['All', 'E-Commerce', 'Healthcare', 'Finance', 'Education', 'Real Estate', 'Restaurant', 'IoT', 'Analytics'];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white pt-16 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-black text-[#181C14] mb-2 px-2 inline-block rounded-none" style={{letterSpacing: '1.5px'}}>Our Portfolio</h1>
          <p className="text-[11px] md:text-xs text-black max-w-2xl mx-auto">
            Showcasing our expertise through successful software development projects that have transformed businesses across various industries.
          </p>
        </div>
        {/* Portfolio Filter Component */}
        <PortfolioFilter
          projects={projects}
          categories={categories}
          cardClassName="flex flex-col h-full bg-white p-4 gap-2 border-l-4 border-[#697565] shadow-none rounded-none"
          techClassName="px-2 py-0.5 text-[10px] font-medium bg-[#697565] text-white border border-[#697565] rounded-none"
            buttonClassName="inline-flex items-center gap-2 border border-[#697565] px-2.5 py-0.5 font-medium text-[10px] rounded-none w-fit"
        />
        {/* CTA Section */}
        <div className="p-6 text-center mt-12 bg-white border-l-4 border-[#697565] rounded-none">
          <h2 className="text-xs md:text-base font-bold text-[#181C14] mb-2">
            Have a Project in Mind?
          </h2>
          <p className="text-xs md:text-sm text-[#3C3D37] mb-4">
            Let's discuss your requirements and create a custom solution for your business.
          </p>
          <Link
            href="/contact"
            className="px-4 py-1 rounded-none font-semibold inline-block bg-[#697565] text-white text-xs md:text-sm border border-[#697565]"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </main>
  );
}
