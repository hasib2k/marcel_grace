import { Metadata } from 'next';
import BlogFilter from '../components/BlogFilter';

export const metadata: Metadata = {
  title: 'Blog - Marcel Grace Infotech',
  description: 'Insights, tutorials, and industry updates from Marcel Grace Infotech on software development and technology trends.',
};

const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable Microservices Architecture',
    excerpt: 'Learn how to design and implement microservices architecture that scales with your business growth. This comprehensive guide covers best practices, patterns, and real-world examples.',
    date: '2024-12-15',
    readTime: '12 min read',
    category: 'Architecture',
    slug: 'building-scalable-microservices-architecture',
  },
  {
    id: 2,
    title: 'Modern Frontend Development with Next.js 15',
    excerpt: 'Explore the latest features in Next.js 15 and how they can improve your web application performance, SEO, and developer experience.',
    date: '2024-12-10',
    readTime: '8 min read',
    category: 'Frontend',
    slug: 'modern-frontend-development-nextjs-15',
  },
  {
    id: 3,
    title: 'Cloud Migration Strategies for Enterprise Applications',
    excerpt: 'A comprehensive guide to migrating enterprise applications to the cloud, including planning, execution, and post-migration optimization.',
    date: '2024-12-05',
    readTime: '15 min read',
    category: 'Cloud',
    slug: 'cloud-migration-strategies-enterprise',
  },
  {
    id: 4,
    title: 'DevOps Best Practices for Small to Medium Businesses',
    excerpt: 'Implementing DevOps practices that make sense for smaller teams and budgets. Learn how to automate deployment, monitoring, and scaling.',
    date: '2024-11-28',
    readTime: '10 min read',
    category: 'DevOps',
    slug: 'devops-best-practices-smb',
  },
  {
    id: 5,
    title: 'Security-First Development: Protecting Your Applications',
    excerpt: 'Essential security practices every development team should implement to protect applications and user data from modern threats.',
    date: '2024-11-20',
    readTime: '11 min read',
    category: 'Security',
    slug: 'security-first-development',
  },
  {
    id: 6,
    title: 'Mobile App Development Trends in 2025',
    excerpt: 'Explore the latest trends in mobile app development, from cross-platform frameworks to AI integration and progressive web apps.',
    date: '2024-11-15',
    readTime: '9 min read',
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
    <main className="min-h-screen bg-white pt-14 sm:pt-16 md:pt-20 lg:pt-24">
      <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <h1 className="text-xs sm:text-sm md:text-lg font-bold text-black mb-4 sm:mb-6 md:mb-8 text-center">
          Blog
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-black text-center mb-6 sm:mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          Insights, tutorials, and industry updates from Marcel Grace Infotech on software development and technology trends.
        </p>
        <div className="w-full">
          <BlogFilter blogPosts={blogPosts} categories={categories} />
        </div>
      </div>
    </main>
  );
}
