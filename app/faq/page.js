'use client';
import { useState } from 'react';

const faqs = [
	{
		q: 'What services does Marcel Grace Infotech provide?',
		a: 'We offer end-to-end software development services including Mobile App Development, Custom Software Development, Website Development, UI/UX Design, and Graphics Design. We also develop and offer ready-to-deploy software products for various industries.',
	},
	{
		q: 'Do you offer customized software solutions?',
		a: 'Yes, we specialize in custom software development tailored to your business goals and requirements. Whether it’s a startup idea or a complex enterprise system, we build scalable, secure, and high-performing solutions.',
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
		a: 'We provide dedicated support plans that include updates, bug fixes, performance optimization, and feature enhancements. Long-term partnerships are important to us, and we’re here to support you even after deployment.',
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
		a: 'It’s simple! Just contact us through our website, email, or phone. We’ll schedule a discovery call to understand your needs, provide recommendations, and begin crafting a solution tailored to your goals.',
	},
];

export default function FAQPage() {
	const [open, setOpen] = useState(null);
	return (
		<div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex flex-col items-center justify-center pt-32 pb-12 px-4">
			<div className="max-w-2xl w-full">
				<h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r 
                             from-primary-700 to-primary-900 bg-clip-text text-transparent">
					Frequently Asked Questions
				</h1>
				<p className="text-center text-neutral-600 mb-12 text-lg leading-relaxed">
					Having questions about our services, process, or products? We've got
					answers. At Marcel Grace Infotech, we believe in clear communication
					and complete transparency. Here's what our clients often ask us:
				</p>
				<div className="space-y-6">
					{faqs.map((faq, idx) => (
						<div
							key={idx}
							className="rounded-2xl border border-neutral-200/50 bg-white/90 backdrop-blur-sm 
                                     shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden 
                                     hover:border-primary-200 hover:bg-gradient-to-r hover:from-white hover:to-primary-50/30"
						>
							<button
								className="w-full flex justify-between items-center p-6 text-left 
                                         focus:outline-none focus:ring-2 focus:ring-primary-400 group"
								onClick={() => setOpen(open === idx ? null : idx)}
								aria-expanded={open === idx}
							>
								<span className="text-lg font-semibold bg-gradient-to-r from-primary-700 to-primary-900 
                                               bg-clip-text text-transparent group-hover:from-primary-600 
                                               group-hover:to-primary-800 transition-all duration-300">
									{faq.q}
								</span>
								<svg
									className={`w-6 h-6 ml-4 transform transition-all duration-300 text-primary-600
                                             group-hover:text-primary-800 ${
										open === idx ? 'rotate-180 scale-110' : 'scale-100'
									}`}
									fill="none"
									stroke="currentColor"
									strokeWidth="2.5"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</button>
							{open === idx && (
								<div className="px-6 pb-6 text-neutral-700 animate-in">
									<div className="pt-2 border-t border-neutral-100">
										<p className="text-neutral-600 leading-relaxed">{faq.a}</p>
									</div>
								</div>
							)}
						</div>
					))}
				</div>
				<div className="mt-12 text-center">
					<div className="inline-flex items-center gap-3 px-6 py-3 text-primary-700 
                                  font-semibold text-lg rounded-xl bg-primary-50/50 border 
                                  border-primary-100 hover:bg-primary-100/50 transition-all duration-300">
						<span>Still have questions?</span>
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                  d="M8 12h8m-4-4v8" />
						</svg>
					</div>
					<p className="text-neutral-600 mt-2">
						Reach out to our team — we’re happy to help you make the right
						decision for your digital journey.
					</p>
				</div>
			</div>
		</div>
	);
}
