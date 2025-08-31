'use client';

import Link from 'next/link';
import { FiExternalLink, FiArrowRight } from 'react-icons/fi';

const projects = [
	{
		id: 1,
		title: 'E-Commerce Platform',
		description:
			'A comprehensive e-commerce solution built for a retail chain with 50+ stores. Features include inventory management, multi-vendor support, advanced analytics, payment gateway integration, and mobile-responsive design. The platform processes over 10,000 transactions daily.',
		technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'AWS'],
	},
	{
		id: 2,
		title: 'Healthcare Management System',
		description:
			'A complete healthcare management solution for hospitals and clinics. Includes patient records, appointment scheduling, billing, prescription management, and telemedicine capabilities. Serves over 25 healthcare facilities with 99.9% uptime.',
		technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Docker'],
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
		technologies: ['React', 'Node.js', 'TensorFlow', 'AWS Lambda', 'Twilio'],
	},
];

export default function FeaturedProjects() {
					return (
						<section className="pt-6 pb-6 bg-white">
							<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
								{/* Header */}
								<div className="mb-8 text-center flex flex-col items-center">
									<h2 className="text-sm md:text-lg font-extrabold mb-2 text-[#181C14]">Featured Projects</h2>
									<p className="text-[11px] md:text-xs text-[#3C3D37] max-w-2xl">
										Showcasing our latest software solutions that have transformed businesses and delivered exceptional results for our clients across various industries.
									</p>
								</div>

								{/* Projects Grid */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									{projects.map((project) => (
										<div
											key={project.id}
											className="flex flex-col h-full bg-white p-4 gap-2 rounded-none border-l-4 border-[#697565] shadow-none"
										>
											<div className="flex items-center gap-2 mb-1">
												<FiExternalLink className="w-5 h-5 text-[#697565] mr-1" />
												<h3 className="text-xs md:text-base font-semibold text-[#181C14]">{project.title}</h3>
											</div>
											<p className="text-[#3C3D37] text-[11px] md:text-xs mb-1">{project.description}</p>
											<div className="flex flex-wrap gap-1 mb-1">
																{project.technologies.map((tech) => (
																	<span
																		key={tech}
																		className="px-2 py-0.5 text-[10px] font-medium bg-[#697565] text-white border border-[#697565] rounded-none"
																	>
																		{tech}
																	</span>
																))}
											</div>
										</div>
									))}
								</div>
							</div>
						</section>
					);
}
