'use client';
import { motion } from 'framer-motion';

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
		gradient: 'from-blue-500 to-indigo-500',
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
		gradient: 'from-emerald-500 to-teal-500',
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
		gradient: 'from-orange-500 to-rose-500',
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
		gradient: 'from-violet-500 to-purple-500',
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
		gradient: 'from-cyan-500 to-blue-500',
	},
];

const ProductCard = ({ product, index }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden"
		>
			<div className={`bg-gradient-to-r ${product.gradient} p-6 text-white`}>
				<div className="flex items-center gap-4 mb-4">
					<span className="text-4xl">{product.emoji}</span>
					<div>
						<h3 className="text-2xl font-bold">{product.title}</h3>
						<p className="text-white/90">{product.subtitle}</p>
					</div>
				</div>
				<p className="text-white/80 leading-relaxed">{product.description}</p>
			</div>
			<div className="p-6">
				<h4 className="font-semibold text-lg mb-4 text-neutral-800">
					Key Features:
				</h4>
				<div className="space-y-3">
					{product.features.map((feature, idx) => (
						<div key={idx} className="flex items-center gap-3">
							<svg
								className="w-5 h-5 text-primary-500 flex-shrink-0"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 12l2 2 4-4"
								/>
							</svg>
							<span className="text-neutral-700">{feature}</span>
						</div>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default function ProductPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
			{/* Products Section */}
			<div className="container mx-auto px-4 py-32">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="max-w-3xl mx-auto text-center mb-20"
				>
					<h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-700 to-primary-900 bg-clip-text text-transparent">
						Our Products
					</h1>
					<p className="text-xl text-neutral-600 leading-relaxed">
						At Marcel Grace Infotech, we don't just build for clients — we build for
						the future. Our in-house products are designed to solve real-world
						problems with smart, scalable, and user-friendly technology.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{products.map((product, index) => (
						<ProductCard key={index} product={product} index={index} />
					))}
				</div>
			</div>
		</div>
	);
}
