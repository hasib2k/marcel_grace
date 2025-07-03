'use client';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiStar } from 'react-icons/fi';

const products = [
	{
		title: 'BizFlow',
		emoji: '📊',
		subtitle: 'Business Management System',
		description:
			'A powerful all-in-one platform for managing your business operations. From sales tracking to HR, inventory to invoicing — BizFlow simplifies your workflow so you can focus on growth.',
		features: [
			'CRM & Sales Pipeline',
			'Inventory & Stock Management',
			'HR & Payroll System',
			'Real-time Reporting & Analytics',
		],
		gradient: 'from-secondary-500 to-accent-600',
		bgGradient: 'from-secondary-400/20 to-accent-500/20'
	},
	{
		title: 'MedixPro',
		emoji: '🏥',
		subtitle: 'Health & Clinic Management System',
		description:
			'Built for clinics, diagnostic centers, and hospitals — MedixPro streamlines patient care, appointment scheduling, billing, and medical records in one secure platform.',
		features: [
			'Patient Registration & History',
			'Appointment & Prescription Management',
			'Billing & Insurance Integration',
			'Doctor & Staff Dashboard',
		],
		gradient: 'from-accent-500 to-secondary-600',
		bgGradient: 'from-accent-400/20 to-secondary-500/20'
	},
	{
		title: 'ShopMate',
		emoji: '🛒',
		subtitle: 'E-commerce Platform',
		description:
			'Launch your online store in days, not weeks. ShopMate gives businesses a customizable, mobile-friendly e-commerce solution packed with everything you need to sell online.',
		features: [
			'Product Catalog & Inventory',
			'Payment Gateway Integration',
			'Order & Shipping Management',
			'Admin Dashboard & Customer Panel',
		],
		gradient: 'from-secondary-600 to-accent-500',
		bgGradient: 'from-secondary-500/20 to-accent-400/20'
	},
	{
		title: 'EventGo',
		emoji: '📱',
		subtitle: 'Event & Ticket Management App',
		description:
			'Designed for event organizers, EventGo makes it easy to manage events, sell tickets, and engage with attendees — all in one app.',
		features: [
			'Event Creation & Promotion',
			'Online Ticket Booking',
			'QR Code Check-In System',
			'Real-time Notifications',
		],
		gradient: 'from-accent-600 to-secondary-500',
		bgGradient: 'from-accent-500/20 to-secondary-400/20'
	},
	{
		title: 'EduSmart',
		emoji: '🧠',
		subtitle: 'E-Learning & School Management System',
		description:
			'An integrated platform for schools, colleges, and training centers. EduSmart combines LMS features with academic management to enhance the learning experience.',
		features: [
			'Student & Teacher Portals',
			'Online Classes & Assignments',
			'Exams, Results & Attendance',
			'Fees & Communication Tools',
		],
		gradient: 'from-secondary-500 to-accent-500',
		bgGradient: 'from-secondary-400/20 to-accent-400/20'
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
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

const ProductCard = ({ product, index }) => {
	return (
		<motion.div
			variants={itemVariants}
			className="group relative h-full"
		>
			<div className="liquid-glass rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500 h-full flex flex-col">
				{/* Header with Gradient Background */}
				<div className={`relative bg-gradient-to-r ${product.gradient} p-6 lg:p-8`}>
					{/* Background Effects */}
					<div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
					<div className="relative z-10">
						<div className="flex items-start gap-4 mb-4">
							<div className="text-4xl lg:text-5xl filter drop-shadow-lg">
								{product.emoji}
							</div>
							<div className="flex-1">
								<h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 font-museomoderno">
									{product.title}
								</h3>
								<p className="text-white/90 font-semibold text-base lg:text-lg">
									{product.subtitle}
								</p>
							</div>
						</div>
						<p className="text-white/85 leading-relaxed font-medium text-sm lg:text-base">
							{product.description}
						</p>
					</div>
				</div>

				{/* Content Section */}
				<div className="p-6 lg:p-8 flex-grow flex flex-col">
					<div className="mb-6">
						<h4 className="font-bold text-lg lg:text-xl mb-4 text-deep-secondary flex items-center gap-2">
							<FiStar className="w-5 h-5 text-secondary-600" />
							Key Features
						</h4>
						<div className="space-y-3">
							{product.features.map((feature, idx) => (
								<div key={idx} className="deep-glass-card p-3 rounded-xl flex items-center gap-3 group/feature hover:scale-105 transition-all duration-300">
									<FiCheck className="w-4 h-4 text-secondary-600 group-hover/feature:text-accent-600 transition-colors flex-shrink-0" />
									<span className="text-deep-primary font-semibold text-sm lg:text-base">{feature}</span>
								</div>
							))}
						</div>
					</div>

					{/* CTA Button */}
					<div className="mt-auto pt-4">
						<button className="w-full bg-gradient-to-r from-secondary-600 to-accent-600 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-secondary-400/25 flex items-center justify-center gap-2 group/btn">
							Learn More
							<FiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
						</button>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default function ProductPage() {
	return (
		<div className="min-h-screen relative overflow-hidden">
			{/* Enhanced Background Effects */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute inset-0 bg-[linear-gradient(rgba(106,137,167,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(106,137,167,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-60" />
				<div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-secondary-300/10 via-accent-400/8 to-secondary-300/10 rounded-full blur-3xl animate-pulse" />
				<div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-r from-accent-300/8 via-secondary-400/6 to-accent-300/8 rounded-full blur-3xl animate-pulse animation-delay-2000" />
				<div className="absolute top-1/2 left-1/6 w-64 h-64 bg-gradient-to-r from-secondary-200/6 via-accent-300/4 to-secondary-200/6 rounded-full blur-3xl animate-pulse animation-delay-4000" />
			</div>

			{/* Products Section */}
			<div className="container mx-auto px-4 py-20 lg:py-32 relative">
				{/* Header Section */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="max-w-4xl mx-auto text-center mb-16 lg:mb-20"
				>
					<div className="liquid-glass p-8 lg:p-12 rounded-3xl">
						<h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text text-transparent font-museomoderno">
							Our Products
						</h1>
						<p className="text-base sm:text-lg lg:text-xl text-deep-primary leading-relaxed font-semibold max-w-3xl mx-auto">
							At Marcel Grace Infotech, we don't just build for clients — we build for
							the future. Our in-house products are designed to solve real-world
							problems with smart, scalable, and user-friendly technology.
						</p>
					</div>
				</motion.div>

				{/* Products Grid */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
				>
					{products.map((product, index) => (
						<ProductCard key={index} product={product} index={index} />
					))}
				</motion.div>

				{/* Call to Action */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					viewport={{ once: true }}
					className="text-center mt-16 lg:mt-20"
				>
					<div className="liquid-glass p-8 lg:p-12 rounded-3xl max-w-3xl mx-auto">
						<h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text text-transparent mb-4 font-museomoderno">
							Ready to Transform Your Business?
						</h2>
						<p className="text-deep-primary mb-6 font-semibold text-base lg:text-lg">
							Discover how our innovative products can streamline your operations and drive growth.
						</p>
						<button className="bg-gradient-to-r from-secondary-600 to-accent-600 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-secondary-400/25 inline-flex items-center gap-2">
							Get Started Today
							<FiArrowRight className="w-5 h-5" />
						</button>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
