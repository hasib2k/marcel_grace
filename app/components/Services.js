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
		gradient: 'from-secondary-400 to-secondary-600',
	},
	{
		icon: FiLayout,
		title: 'UI/UX Design & Development',
		description:
			'Creating intuitive, engaging user experiences that drive conversion and satisfaction.',
		features: ['User Research', 'Interactive Prototypes', 'Responsive Design'],
		gradient: 'from-accent-400 to-accent-600',
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
		gradient: 'from-secondary-300 to-accent-400',
	},
	{
		icon: FiCloud,
		title: 'Cloud Solutions',
		description:
			'Scalable cloud infrastructure and services to power your digital transformation.',
		features: ['Cloud Migration', 'AWS & Azure', 'DevOps Implementation'],
		gradient: 'from-accent-500 to-secondary-500',
	},
	{
		icon: FiDatabase,
		title: 'Data Analytics',
		description:
			'Transform your data into actionable insights with advanced analytics solutions.',
		features: ['Big Data Processing', 'BI Solutions', 'Predictive Analytics'],
		gradient: 'from-secondary-500 to-accent-600',
	},
	{
		icon: FiShield,
		title: 'Cybersecurity',
		description:
			'Protect your digital assets with comprehensive security solutions and best practices.',
		features: ['Security Audits', 'Threat Prevention', 'Compliance Solutions'],
		gradient: 'from-accent-400 to-secondary-400',
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
		<section className="relative py-20 overflow-hidden">
			{/* Enhanced Background Effects */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute inset-0 bg-[linear-gradient(rgba(106,137,167,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(106,137,167,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60" />
				<div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-secondary-300/10 via-accent-400/8 to-secondary-300/10 rounded-full blur-3xl animate-pulse" />
			</div>

			<div className="container mx-auto px-4 relative">
				<SectionHeader
					title={<span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text text-transparent">Comprehensive Tech Solutions</span>}
					subtitle={<span className="text-base sm:text-lg text-deep-primary font-bold">Empowering your business with innovative technology solutions tailored to your needs</span>}
					centered
				/>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
				>
					{services.map((service, index) => {
						const Icon = service.icon;
						return (
							<motion.div
								key={index}
								variants={itemVariants}
								className="group relative h-full"
							>
								<div className="liquid-glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 h-full flex flex-col">
									{/* Icon */}
									<div className="relative mb-4 flex items-center justify-center">
										<div className={`p-3 rounded-xl bg-gradient-to-r ${service.gradient} shadow-lg`}>
											<Icon className="w-6 h-6 text-white" />
										</div>
									</div>

									{/* Content with deeper colors */}
									<h3 className="text-xl font-bold mb-3 text-deep-secondary group-hover:text-secondary-600 transition-colors">
										{service.title}
									</h3>
									<p className="text-deep-primary mb-4 leading-relaxed font-semibold flex-grow">
										{service.description}
									</p>

									{/* Features */}
									<ul className="space-y-2 mt-auto">
										{service.features.map((feature, i) => (
											<li key={i} className="flex items-center text-medium-primary font-semibold">
												<div className="w-1.5 h-1.5 bg-secondary-600 rounded-full mr-3" />
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
