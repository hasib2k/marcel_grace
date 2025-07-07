'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import SingleBlog from "@/app/SingleBlog";
import SectionHeader from "./SectionHeader";
import { useRef, useState } from 'react';
import { FiArrowRight, FiCalendar, FiTag, FiTrendingUp, FiSearch, FiFilter } from 'react-icons/fi';
import { blogs } from '@/app/data/blogs.js';
import Link from 'next/link';

const categories = [
	{
		name: 'Technology',
		color: 'from-accent to-primary',
		icon: FiTrendingUp,
		count: 12
	},
	{
		name: 'Innovation',
		color: 'from-secondary to-accent',
		icon: FiFilter,
		count: 8
	},
	{
		name: 'Development',
		color: 'from-primary to-secondary',
		icon: FiTag,
		count: 15
	},
	{
		name: 'AI & ML',
		color: 'from-accent to-tertiary',
		icon: FiCalendar,
		count: 10
	}
];

export default function Blog() {
	return (
		<section className="py-20 relative">
			{/* Background Effects */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute inset-0 bg-[linear-gradient(rgba(106,137,167,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(106,137,167,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
				<div className="absolute top-1/2 right-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse animation-delay-4000" />
			</div>

			<div className="container mx-auto px-4 relative">
				<SectionHeader
					title={<span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-deep-primary via-deep-secondary to-deep-accent bg-clip-text text-transparent">Latest Insights</span>}
					subtitle={<span className="text-base sm:text-lg text-deep-primary font-medium">Stay updated with our latest thoughts on technology and innovation</span>}
					centered
				/>

				{/* Featured Blog Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mb-12">
					{blogs.slice(0, 3).map((blog, index) => (
						<motion.div
							key={blog.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
							className="deep-glass-card p-6 rounded-2xl group hover:scale-105 hover:shadow-xl hover:shadow-secondary/20 transition-all duration-500 h-full flex flex-col cursor-pointer relative overflow-hidden border border-transparent hover:border-secondary/30"
						>
							{/* Hover Background Effect */}
							<div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" />
							
							{/* Animated Border Glow */}
							<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-secondary/15 via-accent/15 to-primary/15 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
							
							<div className="relative z-10">
								<div className="flex items-center gap-3 mb-4">
									<div className="w-2 h-2 bg-secondary rounded-full group-hover:bg-accent group-hover:scale-125 transition-all duration-300"></div>
									<span className="text-deep-secondary text-sm font-medium group-hover:text-secondary-700 group-hover:font-semibold transition-all duration-300">{blog.category}</span>
									<span className="text-deep-tertiary text-sm group-hover:text-accent transition-colors duration-300">•</span>
									<span className="text-deep-secondary text-sm font-medium group-hover:text-secondary-700 transition-all duration-300">{blog.readTime}</span>
								</div>
								<h3 className="text-xl font-bold text-deep-primary mb-3 group-hover:text-secondary-700 group-hover:scale-105 transition-all duration-300 origin-left">
									{blog.title}
								</h3>
								<p className="text-deep-secondary mb-4 leading-relaxed font-medium flex-grow group-hover:text-slate-700 transition-colors duration-300">
									{blog.excerpt}
								</p>
								<Link 
									href={`/blog/${blog.id}`}
									className="inline-flex items-center gap-2 text-secondary hover:text-accent font-medium transition-all duration-300 mt-auto group-hover:gap-3 group-hover:font-semibold"
								>
									Read More <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
								</Link>
							</div>
							
							{/* Subtle Shine Effect */}
							<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
						</motion.div>
					))}
				</div>

				{/* View All Button */}
				<div className="text-center">
					<Link 
						href="/blogs"
						className="bg-gradient-to-r from-secondary to-accent text-black px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-secondary/30 hover:from-secondary-500 hover:to-accent-500 inline-flex items-center gap-2 group border border-transparent hover:border-secondary/20 relative overflow-hidden"
					>
						<span className="relative z-10">View All Articles</span>
						<FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
						{/* Button shine effect */}
						<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-black/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
					</Link>
				</div>
			</div>
		</section>
	);
}
