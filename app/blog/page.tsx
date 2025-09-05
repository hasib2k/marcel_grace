import { Metadata } from 'next';
import BlogFilter from '../components/BlogFilter';

export const metadata: Metadata = {
  title: 'Blog - Marcel Grace Infotech',
  description: 'Insights, tutorials, and industry updates from Marcel Grace Infotech on software development and technology trends.',
};

const blogPosts = [
  {
    id: 1,
    title: 'BUILDING SCALABLE MICROSERVICES ARCHITECTURE',
    excerpt: 'LEARN HOW TO DESIGN AND IMPLEMENT MICROSERVICES ARCHITECTURE THAT SCALES WITH YOUR BUSINESS GROWTH. THIS COMPREHENSIVE GUIDE COVERS BEST PRACTICES, PATTERNS, AND REAL-WORLD EXAMPLES.',
    date: '2024-12-15',
    readTime: '12 MIN READ',
    category: 'ARCHITECTURE',
    slug: 'building-scalable-microservices-architecture',
  },
  {
    id: 2,
    title: 'MODERN FRONTEND DEVELOPMENT WITH NEXT.JS 15',
    excerpt: 'EXPLORE THE LATEST FEATURES IN NEXT.JS 15 AND HOW THEY CAN IMPROVE YOUR WEB APPLICATION PERFORMANCE, SEO, AND DEVELOPER EXPERIENCE.',
    date: '2024-12-10',
    readTime: '8 MIN READ',
    category: 'FRONTEND',
    slug: 'modern-frontend-development-nextjs-15',
  },
  {
    id: 3,
    title: 'CLOUD MIGRATION STRATEGIES FOR ENTERPRISE APPLICATIONS',
    excerpt: 'A COMPREHENSIVE GUIDE TO MIGRATING ENTERPRISE APPLICATIONS TO THE CLOUD, INCLUDING PLANNING, EXECUTION, AND POST-MIGRATION OPTIMIZATION.',
    date: '2024-12-05',
    readTime: '15 MIN READ',
    category: 'CLOUD',
    slug: 'cloud-migration-strategies-enterprise',
  },
  {
    id: 4,
    title: 'DEVOPS BEST PRACTICES FOR SMALL TO MEDIUM BUSINESSES',
    excerpt: 'IMPLEMENTING DEVOPS PRACTICES THAT MAKE SENSE FOR SMALLER TEAMS AND BUDGETS. LEARN HOW TO AUTOMATE DEPLOYMENT, MONITORING, AND SCALING.',
    date: '2024-11-28',
    readTime: '10 MIN READ',
    category: 'DEVOPS',
    slug: 'devops-best-practices-smb',
  },
  {
    id: 5,
    title: 'SECURITY-FIRST DEVELOPMENT: PROTECTING YOUR APPLICATIONS',
    excerpt: 'ESSENTIAL SECURITY PRACTICES EVERY DEVELOPMENT TEAM SHOULD IMPLEMENT TO PROTECT APPLICATIONS AND USER DATA FROM MODERN THREATS.',
    date: '2024-11-20',
    readTime: '11 MIN READ',
    category: 'SECURITY',
    slug: 'security-first-development',
  },
  {
    id: 6,
    title: 'MOBILE APP DEVELOPMENT TRENDS IN 2025',
    excerpt: 'EXPLORE THE LATEST TRENDS IN MOBILE APP DEVELOPMENT, FROM CROSS-PLATFORM FRAMEWORKS TO AI INTEGRATION AND PROGRESSIVE WEB APPS.',
    date: '2024-11-15',
    readTime: '9 MIN READ',
    category: 'Mobile',
    slug: 'mobile-app-development-trends-2025',
  },
  {
    id: 7,
    title: 'API Design Principles for Better Developer Experience',
    excerpt: 'Learn how to design APIs that are intuitive, well-documented, and provide an excellent developer experience.',
    date: '2024-11-10',
    readTime: '7 min read',
    category: 'API',
    slug: 'api-design-principles-developer-experience',
  },
  {
    id: 8,
    title: 'Database Optimization Techniques for High-Traffic Applications',
    excerpt: 'Advanced database optimization strategies to handle high-traffic applications with improved performance and reliability.',
    date: '2024-11-05',
    readTime: '13 min read',
    category: 'Database',
    slug: 'database-optimization-high-traffic-apps',
  },
];

const categories = ['All', 'Architecture', 'Frontend', 'Cloud', 'DevOps', 'Security', 'Mobile', 'API', 'Database'];

export default function Blog() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden pt-14 sm:pt-16 md:pt-20 lg:pt-24">
      {/* SVG Line Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="line-grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#697565" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#line-grid)"/>
        </svg>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-4 sm:py-6 md:py-8">
        <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black mb-2 sm:mb-3 md:mb-4 tracking-wider uppercase">
              TECH INSIGHTS
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 text-center mb-4 sm:mb-6 max-w-3xl mx-auto tracking-wide uppercase">
              INSIGHTS, TUTORIALS, AND INDUSTRY UPDATES FROM MARCEL GRACE INFOTECH ON SOFTWARE DEVELOPMENT AND TECHNOLOGY TRENDS
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative max-w-5xl mx-auto px-2 sm:px-4 md:px-8 pb-4 sm:pb-6 md:pb-8">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 md:p-8">
          <BlogFilter blogPosts={blogPosts} categories={categories} />
        </div>
      </div>
    </main>
  );
}
