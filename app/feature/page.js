'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const features = [
	{
		title: 'Custom Software Development',
		description:
			'We craft bespoke software solutions tailored to your unique business needs. From enterprise systems to lean startup MVPs, our team delivers reliable, scalable, and future-ready applications.',
		icon: (
			<svg
				className="w-10 h-10"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
				/>
			</svg>
		),
		gradient: 'from-blue-500/20 to-indigo-500/20',
	},
	{
		title: 'Web & Mobile App Development',
		description:
			'We build responsive websites and high-performing mobile apps that blend functionality with user-centric design. Whether iOS, Android, or cross-platform – we turn ideas into interactive experiences.',
		icon: (
			<svg
				className="w-10 h-10"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z M3 4h18M3 8h18M3 12h18"
				/>
			</svg>
		),
		gradient: 'from-purple-500/20 to-pink-500/20',
	},
	{
		title: 'Cloud & DevOps Integration',
		description:
			'Boost performance and streamline deployment with our cloud-native architecture and DevOps practices. We help you scale fast, stay secure, and reduce downtime.',
		icon: (
			<svg
				className="w-10 h-10"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
				/>
			</svg>
		),
		gradient: 'from-cyan-500/20 to-blue-500/20',
	},
	{
		title: 'UI/UX Design & Prototyping',
		description:
			'Our designers create intuitive interfaces that engage and convert. With a design-first mindset, we deliver wireframes, prototypes, and pixel-perfect UI that align with user behavior.',
		icon: (
			<svg
				className="w-10 h-10"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
				/>
			</svg>
		),
		gradient: 'from-rose-500/20 to-orange-500/20',
	},
	{
		title: 'Dedicated Development Teams',
		description:
			'Need to scale fast? Get a skilled, reliable, and agile development team aligned with your goals. We offer flexible hiring models that ensure seamless collaboration and fast delivery.',
		icon: (
			<svg
				className="w-10 h-10"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
				/>
			</svg>
		),
		gradient: 'from-emerald-500/20 to-teal-500/20',
	},
	{
		title: 'Quality Assurance & Testing',
		description:
			'Every line of code matters. Our QA team ensures bug-free performance through rigorous testing – functional, manual, and automated – for a flawless user experience.',
		icon: (
			<svg
				className="w-10 h-10"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		),
		gradient: 'from-amber-500/20 to-yellow-500/20',
	},
	{
		title: 'Maintenance & Support',
		description:
			'We don\'t just build software – we stay with you. Enjoy continuous updates, performance monitoring, and technical support that keeps your product running 24/7.',
		icon: (
			<svg
				className="w-10 h-10"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M13 10V3L4 14h7v7l9-11h-7z"
				/>
			</svg>
		),
		gradient: 'from-violet-500/20 to-purple-500/20',
	},
];

const FeatureCard = ({ feature, index }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			className="relative group"
		>
			<div
				className="absolute inset-0 rounded-3xl bg-gradient-to-r opacity-0 group-hover:opacity-100 
                    transition-opacity duration-500 -z-10 blur-xl"
				style={{
					background: `radial-gradient(circle at 50% 50%, rgba(106, 137, 167, 0.15), transparent 70%)`,
				}}
			></div>
			<div className="liquid-glass rounded-3xl p-8 shadow-lg border border-white/10 
                    transition-all duration-500 hover:shadow-xl h-full">
				<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary-100 to-accent-100 
                      flex items-center justify-center text-secondary-600 mb-6 
                      group-hover:scale-110 transition-transform duration-300">
					{feature.icon}
				</div>
				<h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-secondary-600 to-accent-600 
                     bg-clip-text text-transparent group-hover:from-secondary-500 
                     group-hover:to-accent-500 transition-colors duration-300">
					{feature.title}
				</h3>
				<p className="text-deep-primary leading-relaxed group-hover:text-secondary-600 
                    transition-colors duration-300">
					{feature.description}
				</p>
			</div>
		</motion.div>
	);
};

export default function FeaturePage() {
	return (
		<div className="min-h-screen deep-glass-card">
			{/* Enhanced Background Effects */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute inset-0 bg-[linear-gradient(rgba(106,137,167,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(106,137,167,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
			</div>
			<div className="container mx-auto px-4 py-32 relative">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="max-w-3xl mx-auto text-center mb-20"
				>
					<h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary-600 
                       to-accent-600 bg-clip-text text-transparent">
						What We Offer
					</h1>
					<p className="text-xl text-deep-primary leading-relaxed">
						Transform your business with our comprehensive suite of software
						development services. We blend innovation with expertise to deliver
						solutions that drive growth and success.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<FeatureCard key={index} feature={feature} index={index} />
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.5 }}
					className="mt-20 text-center"
				>
					<Link href="/contact">
						<button className="px-8 py-4 bg-gradient-to-r from-secondary-600 to-accent-600 text-white 
	                         rounded-xl font-semibold hover:from-secondary-700 hover:to-accent-700 
	                         transition-all duration-300 shadow-lg hover:shadow-xl 
	                         transform hover:-translate-y-0.5">
							Start Your Project
						</button>
					</Link>
				</motion.div>
			</div>
		</div>
	);
}
