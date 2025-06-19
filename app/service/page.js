'use client';
import { motion } from 'framer-motion';

const services = [
	{
		title: 'Mobile App Development',
		description:
			'From concept to launch, we create high-performance mobile applications for Android and iOS. Whether you\'re a startup or an enterprise, we build intuitive, feature-rich apps that offer seamless user experiences and drive engagement.',
		expertise: [
			'Native & Cross-platform App Development',
			'API Integration & Backend Services',
			'App Testing & Maintenance',
		],
		icon: (
			<svg
				className="w-8 h-8"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
				/>
			</svg>
		),
	},
	{
		title: 'Software Development',
		description:
			'We develop custom software solutions tailored to your specific goals. Our expert developers combine functionality, scalability, and performance to deliver software that supports your business operations and growth.',
		expertise: [
			'Enterprise Software Development',
			'Cloud-based Solutions',
			'SaaS & ERP Systems',
			'Legacy Software Modernization',
		],
		icon: (
			<svg
				className="w-8 h-8"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
				/>
			</svg>
		),
	},
	{
		title: 'Website Development',
		description:
			'Your website is your digital identity. We build responsive, fast, and secure websites that leave a lasting impression. From dynamic business sites to complex web applications — we craft experiences that convert.',
		expertise: [
			'Custom Website Development',
			'E-commerce Development',
			'CMS Solutions (WordPress, Shopify, etc.)',
			'Website Maintenance & Optimization',
		],
		icon: (
			<svg
				className="w-8 h-8"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
				/>
			</svg>
		),
	},
	{
		title: 'UI/UX Design',
		description:
			'Great design goes beyond aesthetics. Our UI/UX team crafts intuitive and engaging interfaces that enhance usability and delight users across devices. We focus on human-centered design that drives results.',
		expertise: [
			'User Research & Wireframing',
			'Interactive Prototypes',
			'Web & Mobile App UI/UX Design',
			'Usability Testing',
		],
		icon: (
			<svg
				className="w-8 h-8"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
				/>
			</svg>
		),
	},
	{
		title: 'Graphics Design',
		description:
			'Visual storytelling that communicates your brand effectively. From logos to promotional materials, our graphic designers bring creativity and precision to every project, helping you stand out in a crowded market.',
		expertise: [
			'Brand Identity Design',
			'Marketing Materials (Brochures, Banners, Posters)',
			'Social Media Graphics',
			'Product Packaging & Illustration',
		],
		icon: (
			<svg
				className="w-8 h-8"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
				/>
			</svg>
		),
	},
];

const ServiceCard = ({ service, index }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200/50 hover:border-primary-200 group"
		>
			<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/10 to-primary-500/20 flex items-center justify-center text-primary-600 group-hover:scale-110 transition-transform duration-300 mb-6">
				{service.icon}
			</div>
			<h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-700 to-primary-900 bg-clip-text text-transparent">
				{service.title}
			</h3>
			<p className="text-neutral-600 mb-6 leading-relaxed">
				{service.description}
			</p>
			<div className="space-y-3">
				<h4 className="font-semibold text-neutral-900 mb-3">
					Our Expertise Includes:
				</h4>
				{service.expertise.map((item, idx) => (
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
						<span className="text-neutral-700">{item}</span>
					</div>
				))}
			</div>
		</motion.div>
	);
};

export default function ServicePage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
			<div className="container mx-auto px-4 py-32">
				<div className="max-w-3xl mx-auto text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-700 to-primary-900 bg-clip-text text-transparent">
						Our Services
					</h1>
					<p className="text-lg text-neutral-600 leading-relaxed">
						At Marcel Grace Infotech, we turn ideas into intelligent digital
						solutions. As a dedicated software development company, we deliver
						initiative, reliable, and scalable technology services to meet your
						unique business needs. Explore our core offerings:
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<ServiceCard key={index} service={service} index={index} />
					))}
				</div>

				<div className="mt-20 text-center">
					<h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-primary-700 to-primary-900 bg-clip-text text-transparent">
						Let&apos;s Build the Future Together
					</h2>
					<p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
						At Marcel Grace Infotech, we don&apos;t just develop software — we
						develop solutions that work for you. Contact us today to discuss how
						we can help bring your digital vision to life.
					</p>
					<button className="px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
}
