'use client';

import Link from 'next/link';
import { FiExternalLink, FiArrowRight } from 'react-icons/fi';

const projects = [
	{
		id: 1,
		title: 'E-Commerce Platform',
		description:
			'A comprehensive e-commerce solution built for a retail chain with 50+ stores. Features include inventory management, multi-vendor support, advanced analytics, payment gateway integration, and mobile-responsive design. The platform processes over 10,000 transactions daily.',
		technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
	},
	{
		id: 2,
		title: 'Healthcare Management System',
		description:
			'A complete healthcare management solution for hospitals and clinics. Includes patient records, appointment scheduling, billing, prescription management, and telemedicine capabilities. Serves over 25 healthcare facilities with 99.9% uptime.',
		technologies: ['React', 'Node.js', 'MongoDB', 'Docker'],
	},
	{
		id: 3,
		title: 'Financial Analytics Dashboard',
		description:
			'Real-time financial analytics and reporting platform for investment firms. Features advanced charting, portfolio management, risk assessment, and automated reporting. Handles millions of data points with sub-second response times.',
		technologies: ['Vue.js', 'Python', 'Redis', 'Chart.js', 'Azure'],
	},
	{
		id: 4,
		title: 'AI Chatbot Platform',
		description:
			'A scalable AI-powered chatbot platform for customer support automation. Integrates with websites and messaging apps, supports NLP, and provides analytics for conversation insights.',
		technologies: ['React', 'Node.js', 'TensorFlow', 'AWS Lambda'],
	},
];

export default function FeaturedProjects() {
	return (
		<section className="py-4 sm:py-6 bg-white relative overflow-hidden">
			{/* Background Pattern - Same as other components */}
			<div className="absolute inset-0 opacity-5">
				<svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
					<pattern id="projectsGrid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
						<line x1="0" y1="0" x2="10" y2="0" stroke="#697565" strokeWidth="0.5"/>
						<line x1="0" y1="0" x2="0" y2="10" stroke="#697565" strokeWidth="0.5"/>
					</pattern>
					<rect width="100%" height="100%" fill="url(#projectsGrid)"/>
				</svg>
			</div>
			
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="w-full">
					{/* Header */}
					<div className="mb-3 sm:mb-4 text-center md:text-left">
						<h2 className="font-heading text-base sm:text-lg md:text-xl font-black mb-2 text-[#181C14] tracking-wider">Portfolio Highlights</h2>
						<p className="font-body text-xs sm:text-sm md:text-base text-[#3C3D37] max-w-2xl font-medium bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-3 border border-gray-200 shadow-lg">
							Advanced software architectures that revolutionized business operations and delivered transformative results.
						</p>
					</div>
					
					{/* Projects Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
						{projects.map((project) => (
							<div
								key={project.id}
								className="flex flex-col h-full bg-gradient-to-br from-gray-50 to-gray-100 p-3 sm:p-4 gap-2 rounded-xl border border-gray-200 shadow-lg"
							>
								<div className="flex items-center gap-2 mb-1">
									<FiExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-[#697565]" />
									<h3 className="font-heading text-xs sm:text-sm md:text-base font-black text-[#181C14] tracking-wide">{project.title}</h3>
								</div>
								<p className="font-body text-[#3C3D37] text-xs sm:text-sm leading-relaxed font-medium">{project.description}</p>
								<div className="flex flex-wrap gap-1.5 mt-auto">
									{project.technologies.map((tech) => (
										<span
											key={tech}
											className="font-body px-2 py-1 text-xs font-semibold bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-lg shadow-md"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
