'use client';

import SectionHeader from "./SectionHeader";
import { FiAward, FiUsers, FiGlobe } from 'react-icons/fi';

const clientStats = [
	{
		icon: FiGlobe,
		number: '20+',
		label: 'Countries',
		gradient: 'from-blue-500 to-cyan-600',
		description: 'Global reach and impact',
		bgPattern: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)'
	},
	{
		icon: FiUsers,
		number: '100+',
		label: 'Enterprise Clients',
		gradient: 'from-primary-500 to-violet-600',
		description: 'Trusted by industry leaders',
		bgPattern: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)'
	},
	{
		icon: FiAward,
		number: '98%',
		label: 'Success Rate',
		gradient: 'from-secondary-500 to-pink-600',
		description: 'Consistent excellence',
		bgPattern: 'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)'
	},
];

export default function OurClients() {
	return (
		<section className="py-8 relative bg-white">
			<div className="container relative">
				<SectionHeader
					title={<span className="text-base sm:text-lg font-bold text-primary-700">Trusted by Industry Leaders</span>}
					subtitle={<span className="text-xs sm:text-sm text-primary-600">We partner with forward-thinking enterprises worldwide</span>}
					centered
				/>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
					{clientStats.map((stat, index) => {
						const Icon = stat.icon;
						return (
							<div
								key={stat.label}
								className="relative rounded-xl bg-white p-3 border border-primary-100 shadow-sm flex flex-col items-center min-h-0"
							>
								<div className="mb-1 flex items-center justify-center">
									<Icon className="w-7 h-7 text-primary-600" />
								</div>
								<div className="text-2xl font-extrabold text-primary-800 mb-0.5">{stat.number}</div>
								<div className="text-xs font-semibold text-primary-700 mb-0.5">{stat.label}</div>
								<div className="text-xs text-neutral-600 text-center">{stat.description}</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
