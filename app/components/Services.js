'use client';

import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiLayout, FiSmartphone, FiCloud, FiShield } from 'react-icons/fi';
import SectionHeader from './SectionHeader';

const services = [
	{
		icon: FiCode,
		title: 'Custom Software Development',
		description:
			'Tailored solutions built with cutting-edge technology to meet your unique business needs.',
		features: [
			'Enterprise Applications',
			'API Integration',
			'Legacy System Modernization',
		],
		gradient: 'from-blue-500 to-blue-600',
	},
	{
		icon: FiLayout,
		title: 'UI/UX Design & Development',
		description:
			'Creating intuitive, engaging user experiences that drive conversion and satisfaction.',
		features: ['User Research', 'Interactive Prototypes', 'Responsive Design'],
		gradient: 'from-primary-500 to-primary-600',
	},
	{
		icon: FiSmartphone,
		title: 'Mobile App Development',
		description:
			'Native and cross-platform mobile applications that deliver exceptional user experiences.',
		features: [
			'iOS & Android Apps',
			'Cross-Platform Solutions',
			'App Store Optimization',
		],
		gradient: 'from-secondary-500 to-secondary-600',
	},
	{
		icon: FiCloud,
		title: 'Cloud Solutions',
		description:
			'Scalable cloud infrastructure and services to power your digital transformation.',
		features: ['Cloud Migration', 'AWS & Azure', 'DevOps Implementation'],
		gradient: 'from-purple-500 to-purple-600',
	},
	{
		icon: FiDatabase,
		title: 'Data Analytics',
		description:
			'Transform your data into actionable insights with advanced analytics solutions.',
		features: ['Big Data Processing', 'BI Solutions', 'Predictive Analytics'],
		gradient: 'from-teal-500 to-teal-600',
	},
	{
		icon: FiShield,
		title: 'Cybersecurity',
		description:
			'Protect your digital assets with comprehensive security solutions and best practices.',
		features: ['Security Audits', 'Threat Prevention', 'Compliance Solutions'],
		gradient: 'from-red-500 to-red-600',
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
};

export default function Services() {
	return (
		<section className="relative pt-0 pb-6 overflow-hidden bg-white">
			{/* Background Effects */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute inset-0 bg-[linear-gradient(var(--grid-glow)_1px,transparent_1px),linear-gradient(90deg,var(--grid-glow)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.04]" />
			</div>

			<div className="container mx-auto px-2 relative">
				<SectionHeader
					title={<span className="text-base sm:text-lg font-bold text-primary-700">Comprehensive Tech Solutions</span>}
					subtitle={<span className="text-xs sm:text-sm text-primary-600">Empowering your business with innovative technology solutions tailored to your needs</span>}
					centered
				/>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-4"
				>
					{services.map((service, index) => {
						const Icon = service.icon;
						return (
							<motion.div
								key={index}
								variants={itemVariants}
								className="group relative"
							>
								<div className="relative overflow-hidden rounded-xl border border-primary-100 bg-white p-3 shadow-sm">
									{/* Icon */}
									<div className="relative mb-1 flex items-center justify-center">
										<Icon className="w-6 h-6 text-primary-600" style={{opacity: 1}} />
									</div>

									{/* Content */}
									<h3 className="text-sm font-semibold mb-0.5 text-primary-800">
										{service.title}
									</h3>
									<p className="text-xs text-primary-600 mb-1 leading-snug">
										{service.description}
									</p>

									{/* Features */}
									<ul className="space-y-0.5">
										{service.features.map((feature, i) => (
											<li key={i} className="flex items-center text-xs text-primary-600">
												<span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-2`} />
												{feature}
											</li>
										))}
									</ul>
								</div>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}
