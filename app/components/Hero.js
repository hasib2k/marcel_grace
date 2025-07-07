'use client';

import Image from "next/image";
import Link from "next/link";
import heroImg from "@/public/assets/hero1.png";
import Button from "./Button";
import { FiArrowUpRight, FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const Hero = () => {
	return (
		<>
			<section className="relative min-h-screen overflow-hidden pt-20 pb-8 flex justify-center items-center">
				{/* Enhanced Background Elements */}
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-secondary-300/20 via-accent-400/15 to-secondary-300/20 rounded-full blur-3xl animate-pulse" />
					<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent-500/15 via-secondary-400/20 to-accent-500/15 rounded-full blur-3xl animate-pulse animation-delay-2000" />
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-200/10 via-secondary-200/8 to-accent-200/10 rounded-full blur-3xl opacity-60"></div>
				</div>

				<div className="liquid-glass w-full max-w-7xl mx-4 px-8 py-16 rounded-3xl relative">
					<div className="container relative z-10">
						<div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
							{/* Text content with deeper colors */}
							<div className="flex-1 text-center lg:text-left space-y-6">
								<div className="space-y-4">
									<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
										<span className="block text-deep-primary font-extrabold mb-2">
											Transforming Ideas Into
										</span>
										<span className="block bg-gradient-to-r from-secondary-500 to-accent-600 bg-clip-text text-transparent font-black">
											Digital Excellence
										</span>
									</h1>
									<p className="text-xl sm:text-2xl text-deep-secondary font-semibold">
										Premier Software Development Company
									</p>
									<p className="text-lg text-medium-primary font-semibold">
										Web Development • Mobile Apps • UI/UX Design • Consulting
									</p>
								</div>
								
								<p className="text-base sm:text-lg text-deep-primary max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
									Marcel Grace Infotech delivers cutting-edge software solutions that drive business growth. 
									From custom web applications to mobile development, we combine innovation with expertise 
									to create digital experiences that exceed expectations.
								</p>

								<div className="flex flex-wrap gap-3 justify-center lg:justify-start">
									<Link href="/contact">
										<button className="bg-gradient-to-r from-secondary to-accent text-Black border-2 border-deep-primary px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-secondary/25 flex items-center gap-2">
											<FiArrowUpRight className="w-5 h-5" />
											<span>Get Started</span>
										</button>
									</Link>
								</div>

								{/* Enhanced Stats */}
								<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
									{[
										{ number: "100+", label: "Projects Completed" },
										{ number: "50+", label: "Happy Clients" },
										{ number: "20+", label: "Countries Served" },
										{ number: "2+", label: "Years Experience" }
									].map((stat, index) => (
										<div key={index} className="deep-glass-card p-4 rounded-xl text-center group hover:scale-105 transition-all duration-300">
											<div className="text-2xl font-bold bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
												{stat.number}
											</div>
											<div className="text-sm text-deep-primary mt-1 font-semibold">
												{stat.label}
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
