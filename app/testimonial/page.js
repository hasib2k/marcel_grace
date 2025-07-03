'use client';
import { motion } from 'framer-motion';

const testimonials = [
	{
		content:
			'Marcel Grace Infotech transformed our outdated system into a modern, efficient platform. Their team was responsive, knowledgeable, and committed to our vision. Highly recommended!',
		author: 'Tariq Islam',
		position: 'CEO',
		company: 'BrightPath Solutions',
		tag: 'Enterprise Solutions',
		gradient: 'from-blue-500 to-indigo-500',
	},
	{
		content:
			'We approached Marcel Grace for a custom app and ended up building a long-term partnership. Their attention to detail, clean code, and excellent UI/UX design made the difference.',
		author: 'Sarah Alam',
		position: 'Co-founder',
		company: 'HealthBridge BD',
		tag: 'Healthcare',
		gradient: 'from-emerald-500 to-teal-500',
	},
	{
		content:
			'The team at Marcel Grace Infotech delivered our e-commerce site faster than expected, with every feature working perfectly. Communication was smooth, and support was top-notch.',
		author: 'Ahmed Kabir',
		position: 'Owner',
		company: 'TrendCart',
		tag: 'E-commerce',
		gradient: 'from-orange-500 to-rose-500',
	},
	{
		content:
			'They understood our business goals and built a school management system that made our operations smoother. It\'s rare to find a tech team this professional and reliable.',
		author: 'Farzana Noor',
		position: 'Principal',
		company: 'Bloomfield Academy',
		tag: 'Education',
		gradient: 'from-violet-500 to-purple-500',
	},
	{
		content:
			'From design to deployment, Marcel Grace handled everything professionally. Their development process is streamlined, transparent, and efficient. We\'ll definitely work with them again!',
		author: 'Jamil Rahman',
		position: 'Project Manager',
		company: 'Digitex Solutions',
		tag: 'Digital Transformation',
		gradient: 'from-cyan-500 to-blue-500',
	},
	{
		content:
			'Working with Marcel Grace Infotech was a game-changer. They built our logistics tracking app with precision and speed. Their technical skills and business understanding impressed us every step of the way.',
		author: 'Nusrat Jahan',
		position: 'Head of Operations',
		company: 'CargoXpress',
		tag: 'Logistics',
		gradient: 'from-pink-500 to-rose-500',
	},
];

const TestimonialCard = ({ testimonial, index }) => {
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
					background: `radial-gradient(circle at 50% 50%, ${testimonial.gradient.split(' ')[1]}, transparent 70%)`,
				}}
			></div>
			<div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-lg hover:shadow-xl 
                    transition-all duration-500 border border-neutral-200/50 
                    hover:border-primary-200 group-hover:bg-white/95">
				<div className="mb-6">
					<div className="flex gap-1 mb-6">
						{[...Array(5)].map((_, i) => (
							<svg
								key={i}
								className="w-5 h-5 text-yellow-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
						))}
					</div>
					<svg
						className="w-12 h-12 text-neutral-200 mb-4 opacity-50"
						fill="currentColor"
						viewBox="0 0 32 32"
					>
						<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
					</svg>
					<p className="text-lg text-primary-700 leading-relaxed mb-6 italic font-medium">
						{testimonial.content}
					</p>
				</div>
				<div className="flex items-center justify-between">
					<div>
						<h4 className="font-semibold text-primary-800">
							{testimonial.author}
						</h4>
						<p className="text-primary-600 font-medium">{testimonial.position}</p>
						<p className="text-secondary-500 font-semibold">
							{testimonial.company}
						</p>
					</div>
					<span
						className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r 
                         opacity-75 text-white"
						style={{
							backgroundImage: `linear-gradient(to right, ${testimonial.gradient.split(' ')[1]}, ${testimonial.gradient.split(' ')[3]})`,
						}}
					>
						{testimonial.tag}
					</span>
				</div>
			</div>
		</motion.div>
	);
};

export default function TestimonialPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
			<div className="container mx-auto px-4 py-32">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="max-w-3xl mx-auto text-center mb-20"
				>
					<h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r 
                       from-primary-700 to-primary-900 bg-clip-text text-transparent">
						What Our Clients Say
					</h1>
					<p className="text-xl text-primary-700 leading-relaxed font-medium">
						At Marcel Grace Infotech, client satisfaction is at the heart of
						everything we do. We're proud to work with startups, enterprises, and
						organizations across industries — delivering quality solutions and
						long-term value.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
					{testimonials.map((testimonial, index) => (
						<TestimonialCard
							key={index}
							testimonial={testimonial}
							index={index}
						/>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.5 }}
					className="max-w-2xl mx-auto text-center"
				>
					<h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
						<span>📣</span>
						<span className="bg-gradient-to-r from-primary-700 to-primary-900 
                         bg-clip-text text-transparent">
							Your feedback drives our excellence.
						</span>
					</h2>
					<p className="text-lg text-primary-700 mb-8 font-medium">
						We take pride in every project and strive to deliver results that make
						a lasting impact.
					</p>
					<button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 
                         text-white rounded-xl font-semibold hover:from-primary-700 
                         hover:to-primary-800 transition-all duration-300 shadow-lg 
                         hover:shadow-xl transform hover:-translate-y-0.5 flex items-center 
                         justify-center gap-2 mx-auto">
						<span>👉</span>
						<span>Get Started Today</span>
					</button>
				</motion.div>
			</div>
		</div>
	);
}
