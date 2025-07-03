'use client';

import SectionHeader from "./SectionHeader";
import { FiAward, FiUsers, FiGlobe } from 'react-icons/fi';

const clientStats = [
	{
		icon: FiGlobe,
		number: '20+',
		label: 'Countries',
		gradient: 'from-accent to-primary',
		description: 'Global reach and impact'
	},
	{
		icon: FiUsers,
		number: '100+',
		label: 'Enterprise Clients',
		gradient: 'from-secondary to-accent',
		description: 'Trusted by industry leaders'
	},
	{
		icon: FiAward,
		number: '98%',
		label: 'Success Rate',
		gradient: 'from-primary to-secondary',
		description: 'Consistent excellence'
	},
];

export default function OurClients() {
	return (
		<section className="py-20 relative">
			{/* Background Effects */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute inset-0 bg-[linear-gradient(rgba(106,137,167,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(106,137,167,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
				<div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
			</div>

			<div className="container mx-auto px-4 relative">
				<SectionHeader
					title={<span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">Trusted by Industry Leaders</span>}
					subtitle={<span className="text-base sm:text-lg text-slate-700 font-semibold">We partner with forward-thinking enterprises worldwide</span>}
					centered
				/>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
					{clientStats.map((stat, index) => {
						const Icon = stat.icon;
						return (
							<div
								key={stat.label}
								className="deep-glass-card p-8 rounded-2xl flex flex-col items-center text-center group hover:scale-105 transition-all duration-300 h-full"
							>
								<div className="mb-4 flex items-center justify-center">
									<div className={`p-4 rounded-xl bg-gradient-to-r ${stat.gradient} shadow-lg`}>
										<Icon className="w-8 h-8 text-Black" />
									</div>
								</div>
								<div className="text-4xl font-bold bg-gradient-to-r from-slate-700 via-slate-600 to-slate-500 bg-clip-text text-transparent mb-2">
									{stat.number}
								</div>
								<div className="text-lg font-bold text-slate-800 mb-2 group-hover:text-slate-600 transition-colors">
									{stat.label}
								</div>
								<div className="text-slate-600 text-center leading-relaxed font-semibold mt-auto">
									{stat.description}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
