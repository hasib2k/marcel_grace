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
				<section className="py-10 bg-white rounded-xl shadow-none">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
						 {/* Banner Image moved to right side */}
						 <div className="flex flex-col md:flex-row md:items-start md:gap-8">
										 {/* Left: Image */}
																	 <div className="flex-shrink-0 flex justify-center md:justify-start mt-4 md:mt-0 md:self-center md:mr-10 mb-6 md:mb-0">
																		 <div className="w-24 h-24 xs:w-32 xs:h-32 sm:w-40 sm:h-40 md:w-52 md:h-52" style={{ clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)', WebkitClipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)', background: '#ECDFCC' }}>
																			 <img
																				 src="/assets/projects_image2.png"
																				 alt="Projects Banner"
																				 className="w-full h-full object-contain rounded-none"
																				 style={{ objectPosition: 'center' }}
																			 />
																		 </div>
																	 </div>
													 {/* Right: Header and Projects Grid */}
													 <div className="flex-1 w-full">
														 {/* Header */}
														 <div className="mb-6 sm:mb-8 text-center md:text-left flex flex-col items-center md:items-start">
															   <h2 className="text-sm md:text-lg font-extrabold mb-2 text-[#181C14]">Highlights From Our Portfolio</h2>
															   <p className="text-[11px] md:text-xs text-[#3C3D37] max-w-2xl">
																 Showcasing our latest software solutions that have transformed businesses and delivered exceptional results for our clients across various industries.
															 </p>
														 </div>
														 {/* Projects Grid */}
														   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
															 {projects.map((project) => (
																				 <div
																					 key={project.id}
																					 className="flex flex-col h-full bg-white p-5 gap-3 rounded-xl shadow-none"
																				 >
																											 <div className="flex items-center gap-2 mb-1">
																												 <FiExternalLink className="w-5 h-5 text-[#697565] mr-1" />
																												 <h3 className="text-xs md:text-base font-semibold text-[#181C14]">{project.title}</h3>
																											 </div>
																											 <p className="text-[#3C3D37] text-[11px] md:text-xs mb-1">{project.description}</p>
																						 <div className="flex flex-wrap gap-2 mb-1">
																							 {project.technologies.map((tech) => (
																								 <span
																									 key={tech}
																									 className="px-3 py-1 text-xs font-medium bg-[#697565] text-white rounded"
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
			</div>
		</section>
	);
}
