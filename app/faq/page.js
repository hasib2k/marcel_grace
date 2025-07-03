'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus, FiMessageCircle, FiArrowRight, FiHelpCircle } from 'react-icons/fi';

const faqs = [
	{
		q: 'What services does Marcel Grace Infotech provide?',
		a: 'We offer end-to-end software development services including Mobile App Development, Custom Software Development, Website Development, UI/UX Design, and Graphics Design. We also develop and offer ready-to-deploy software products for various industries.',
	},
	{
		q: 'Do you offer customized software solutions?',
		a: 'Yes, we specialize in custom software development tailored to your business goals and requirements. Whether it\'s a startup idea or a complex enterprise system, we build scalable, secure, and high-performing solutions.',
	},
	{
		q: 'Can you develop both Android and iOS apps?',
		a: 'Absolutely. We develop native apps for Android and iOS, as well as cross-platform apps using frameworks like Flutter or React Native — depending on your project needs.',
	},
	{
		q: 'How do you ensure the quality of your software?',
		a: 'We follow industry-standard development practices, conduct thorough testing at every stage, and use automated tools and manual QA to ensure the software is reliable, secure, and user-friendly.',
	},
	{
		q: 'What industries do you serve?',
		a: 'We serve a wide range of industries including healthcare, education, retail, e-commerce, events, and enterprise services. Our in-house products also cater specifically to clinics, schools, and online businesses.',
	},
	{
		q: 'Can I get a demo of your software products?',
		a: 'Yes! We offer live demos for all our in-house software products such as BizFlow, MedixPro, ShopMate, EduSmart, and EventGo. Contact us to schedule a personalized walkthrough.',
	},
	{
		q: 'How do you handle ongoing support and maintenance?',
		a: 'We provide dedicated support plans that include updates, bug fixes, performance optimization, and feature enhancements. Long-term partnerships are important to us, and we\'re here to support you even after deployment.',
	},
	{
		q: 'What is the typical timeline for a project?',
		a: 'Timelines depend on the project size and complexity. A basic website may take 2–4 weeks, while custom apps or software systems may take 2–6 months. We always provide a clear timeline before starting any project.',
	},
	{
		q: 'How much do your services cost?',
		a: 'Our pricing is flexible and based on project scope, complexity, and features. We offer competitive rates and can work within your budget. Contact us for a free consultation and quote.',
	},
	{
		q: 'How can I get started with Marcel Grace Infotech?',
		a: 'It\'s simple! Just contact us through our website, email, or phone. We\'ll schedule a discovery call to understand your needs, provide recommendations, and begin crafting a solution tailored to your goals.',
	},
];

export default function FAQPage() {
	const [open, setOpen] = useState(null);

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
			{/* Animated Background Elements */}
			<div className="absolute inset-0 overflow-hidden">
				<motion.div
					animate={{
						scale: [1, 1.2, 1],
						rotate: [0, 180, 360],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: "linear"
					}}
					className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-blue-400/20 rounded-full blur-3xl"
				/>
				<motion.div
					animate={{
						scale: [1.2, 1, 1.2],
						rotate: [360, 180, 0],
					}}
					transition={{
						duration: 25,
						repeat: Infinity,
						ease: "linear"
					}}
					className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-br from-indigo-200/30 to-purple-300/20 rounded-full blur-3xl"
				/>
				<motion.div
					animate={{
						x: [0, 100, 0],
						y: [0, -50, 0],
					}}
					transition={{
						duration: 15,
						repeat: Infinity,
						ease: "easeInOut"
					}}
					className="absolute top-1/2 left-1/4 w-40 h-40 bg-gradient-to-br from-cyan-200/20 to-blue-300/20 rounded-full blur-2xl"
				/>
			</div>

			<div className="relative z-10 flex flex-col items-center justify-center pt-32 pb-16 px-4">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="max-w-4xl w-full"
				>
					{/* Header Section */}
					<div className="text-center mb-16">
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-200/30"
						>
							<FiHelpCircle className="text-blue-600 text-xl" />
							<span className="text-blue-700 font-semibold">Frequently Asked Questions</span>
						</motion.div>
						
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}
							className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-700 bg-clip-text text-transparent leading-tight font-MuseoModerno"
						>
							Get Instant Answers
						</motion.h1>
						
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
						>
							Having questions about our services, process, or products? We\'ve got answers. 
							At Marcel Grace Infotech, we believe in clear communication and complete transparency.
						</motion.p>
					</div>

					{/* FAQ Accordion */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.5 }}
						className="space-y-4 mb-16"
					>
						{faqs.map((faq, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.1 * idx }}
								className="group relative"
							>
								{/* Glassmorphism Card */}
								<div className="relative rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:border-blue-300/50">
									{/* Liquid Glass Effect */}
									<div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
									
									{/* Question Button */}
									<button
										className="w-full flex justify-between items-center p-6 text-left focus:outline-none group relative z-10"
										onClick={() => setOpen(open === idx ? null : idx)}
										aria-expanded={open === idx}
									>
										<span className="text-lg font-semibold text-gray-800 group-hover:text-blue-900 transition-colors duration-300 pr-4 font-MuseoModerno">
											{faq.q}
										</span>
										
										<motion.div
											animate={{ rotate: open === idx ? 45 : 0 }}
											transition={{ duration: 0.3 }}
											className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
										>
											{open === idx ? (
												<FiMinus className="text-white text-lg" />
											) : (
												<FiPlus className="text-white text-lg" />
											)}
										</motion.div>
									</button>

									{/* Answer Content */}
									<AnimatePresence>
										{open === idx && (
											<motion.div
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: "auto", opacity: 1 }}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.3 }}
												className="overflow-hidden"
											>
												<div className="px-6 pb-6">
													<div className="pt-2 border-t border-white/20">
														<p className="text-gray-600 leading-relaxed text-base">
															{faq.a}
														</p>
													</div>
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							</motion.div>
						))}
					</motion.div>

					{/* Contact CTA */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.8 }}
						className="text-center"
					>
						<div className="relative inline-block">
							{/* Glassmorphism CTA Card */}
							<div className="relative rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer">
								{/* Animated Background */}
								<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
								
								<div className="relative z-10">
									<div className="flex items-center justify-center gap-3 mb-4">
										<FiMessageCircle className="text-blue-600 text-2xl" />
										<h3 className="text-2xl font-bold text-gray-800 font-MuseoModerno">
											Still have questions?
										</h3>
									</div>
									
									<p className="text-gray-600 mb-6 text-lg">
										Reach out to our team — we\'re happy to help you make the right
										decision for your digital journey.
									</p>
									
									<motion.button
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
									>
										<span>Contact Our Team</span>
										<FiArrowRight className="text-lg" />
									</motion.button>
								</div>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
