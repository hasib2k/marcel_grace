'use client';

import Image from "next/image";
import Link from "next/link";
import heroImg from "@/public/assets/hero1.png";
import Button from "./Button";
import { FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
	return (
		<>
			<section className="relative min-h-[70vh] overflow-hidden pt-16 pb-0 bg-transparent flex justify-center items-center">
				<div className="glassy-card w-full max-w-6xl mx-2 px-8 py-10 rounded-2xl border border-primary-100 bg-white/70 backdrop-blur-lg shadow-lg">
					<div className="container relative z-10">
						<div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">
							{/* Text content */}
							<div className="flex-1 text-center lg:text-left">
								<div className="relative mb-3">
									<h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 text-primary-700 drop-shadow-lg tracking-tight leading-tight">
										<span className="block">Next Generation</span>
										<span className="block">Digital Solutions</span>
									</h1>
								</div>
								<p className="text-sm sm:text-base text-neutral-700 mb-4 max-w-md mx-auto lg:mx-0 leading-snug font-normal">
									We empower businesses with cutting-edge technology solutions
									that drive growth and innovation in the digital age.
									<br className="hidden sm:block" />
									<span className="inline-block mt-1 text-neutral-700 font-normal">
										Transform your ideas into reality with our expert team.
									</span>
								</p>
								<div className="flex flex-wrap gap-1 justify-center lg:justify-start mb-4">
									<Link href="/get-started">
										<Button
											variant="primary"
											className="px-2 py-1 text-xs rounded-full font-semibold border border-primary-200 min-w-0 h-8"
										>
											<span className="flex items-center gap-1">
												Get Started{" "}
												<FiArrowUpRight className="inline w-3 h-3" />
											</span>
										</Button>
									</Link>
									<Link href="/learn-more">
										<Button
											variant="outline"
											className="px-2 py-1 text-xs rounded-full border border-primary-200 bg-white/80 font-semibold min-w-0 h-8"
										>
											<span className="flex items-center gap-1 bg-gradient-to-r from-neutral-800 to-neutral-600 bg-clip-text text-transparent">
												Learn More{" "}
												<FiArrowUpRight className="inline w-3 h-3" />
											</span>
										</Button>
									</Link>
								</div>
								{/* Stats */}
								{/* Stat cards removed as requested */}
							</div>
							{/* Hero image */}
							<div className="flex-1 relative flex items-center justify-center">
								<div className="relative z-10">
									<div className="relative">
										<Image
											src={heroImg}
											alt="Hero Illustration"
											className="w-full max-w-[260px] mx-auto rounded-2xl bg-white/30 backdrop-blur-md opacity-80"
											priority
											style={{ height: "auto" }}
										/>
									</div>
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
