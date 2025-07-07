'use client';
import { motion } from 'framer-motion';
import { FiSmartphone, FiCode, FiGlobe, FiLayout, FiUsers, FiShield, FiHeadphones, FiArrowRight } from 'react-icons/fi';

const services = [
	{
		title: 'Custom Software Development',
		description:
			'We craft bespoke software solutions tailored to your unique business needs. From enterprise systems to lean startup MVPs, our team delivers reliable, scalable, and future-ready applications.',
		icon: FiCode,
		gradient: 'from-secondary-500 to-accent-600',
	},
	{
		title: 'Web & Mobile App Development',
		description:
			'We build responsive websites and high-performing mobile apps that blend functionality with user-centric design. Whether iOS, Android, or cross-platform – we turn ideas into interactive experiences.',
		icon: FiSmartphone,
		gradient: 'from-accent-500 to-secondary-600',
	},
	{
		title: 'Cloud & DevOps Integration',
		description:
			'Boost performance and streamline deployment with our cloud-native architecture and DevOps practices. We help you scale fast, stay secure, and reduce downtime.',
		icon: FiGlobe,
		gradient: 'from-secondary-600 to-accent-500',
	},
	{
		title: 'UI/UX Design & Prototyping',
		description:
			'Our designers create intuitive interfaces that engage and convert. With a design-first mindset, we deliver wireframes, prototypes, and pixel-perfect UI that align with user behavior.',
		icon: FiLayout,
		gradient: 'from-accent-600 to-secondary-500',
	},
	{
		title: 'Dedicated Development Teams',
		description:
			'Need to scale fast? Get a skilled, reliable, and agile development team aligned with your goals. We offer flexible hiring models that ensure seamless collaboration and fast delivery.',
		icon: FiUsers,
		gradient: 'from-secondary-500 to-accent-500',
	},
	{
		title: 'Quality Assurance & Testing',
		description:
			'Every line of code matters. Our QA team ensures bug-free performance through rigorous testing – functional, manual, and automated – for a flawless user experience.',
		icon: FiShield,
		gradient: 'from-accent-500 to-secondary-500',
	},
	{
		title: 'Maintenance & Support',
		description:
			'We don\'t just build software – we stay with you. Enjoy continuous updates, performance monitoring, and technical support that keeps your product running 24/7.',
		icon: FiHeadphones,
		gradient: 'from-secondary-600 to-accent-600',
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
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut"
		},
	},
};

const ServiceCard = ({ service, index }) => {
	const Icon = service.icon;
	
	return (
		<motion.div
			variants={itemVariants}
			className="group relative h-full"
		>
			<div className="liquid-glass p-6 lg:p-8 rounded-3xl hover:scale-105 transition-all duration-500 h-full flex flex-col">
				{/* Icon Header */}
				<div className="flex items-center gap-4 mb-6">
					<div className="p-4 rounded-2xl bg-gradient-to-r from-secondary-100 to-accent-100 shadow-lg group-hover:scale-110 transition-transform duration-300">
						<Icon className="w-8 h-8 text-secondary-600" />
					</div>
					<h3 className="text-xl lg:text-2xl font-bold text-deep-secondary group-hover:text-secondary-600 transition-colors">
						{service.title}
					</h3>
				</div>

				{/* Description */}
				<p className="text-deep-primary leading-relaxed font-medium text-base lg:text-lg flex-grow">
					{service.description}
				</p>
			</div>
		</motion.div>
	);
};

export default function ServicePage() {
	return (
		<div className="min-h-screen relative overflow-hidden deep-glass-card">
			{/* Enhanced Background Effects */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute inset-0 bg-[linear-gradient(rgba(106,137,167,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(106,137,167,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
				<div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-secondary-300/10 via-accent-400/8 to-secondary-300/10 rounded-full blur-3xl animate-pulse" />
				<div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-r from-accent-300/8 via-secondary-400/6 to-accent-300/8 rounded-full blur-3xl animate-pulse animation-delay-2000" />
				<div className="absolute top-1/2 left-1/6 w-64 h-64 bg-gradient-to-r from-secondary-200/6 via-accent-300/4 to-secondary-200/6 rounded-full blur-3xl animate-pulse animation-delay-4000" />
			</div>

			{/* Content */}
			<div className="container mx-auto px-4 py-20 lg:py-32 relative">
				{/* Header Section */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="max-w-4xl mx-auto text-center mb-16 lg:mb-20"
				>
					<div className="liquid-glass p-8 lg:p-12 rounded-3xl">
						<h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text text-transparent">
							What We Offer
						</h1>
						<p className="text-base sm:text-lg lg:text-xl text-deep-primary leading-relaxed font-semibold max-w-3xl mx-auto">
							Transform your business with our comprehensive suite of software development services. We blend innovation with expertise to deliver solutions that drive growth and success.
						</p>
					</div>
				</motion.div>

				{/* Services Grid */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16"
				>
					{services.map((service, index) => (
						<ServiceCard key={index} service={service} index={index} />
					))}
				</motion.div>

			</div>
		</div>
	);
}
