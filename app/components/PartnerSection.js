import Image from 'next/image';
import Link from 'next/link';

const partners = [
	{
		name: 'BrightPath Solutions',
		description: 'Enterprise software modernization',
		logo: '/assets/partners/brightpath.svg',
		link: '/service'
	},
	{
		name: 'HealthBridge BD',
		description: 'Healthcare app development',
		logo: '/assets/partners/healthbridge.svg',
		link: '/feature'
	},
	{
		name: 'TrendCart',
		description: 'E-commerce platform delivery',
		logo: '/assets/partners/trendcart.svg',
		link: '/product'
	},
	{
		name: 'Bloomfield Academy',
		description: 'Educational management systems',
		logo: '/assets/partners/bloomfield.svg',
		link: '/service'
	},
	{
		name: 'Digitex Solutions',
		description: 'End-to-end digital project solutions',
		logo: '/assets/partners/digitex.svg',
		link: '/feature'
	},
	{
		name: 'CargoXpress',
		description: 'Logistics and tracking innovations',
		logo: '/assets/partners/cargoxpress.svg',
		link: '/product'
	}
];

export default function PartnerSection() {
	return (
		<section className="relative pt-0 pb-8 w-full bg-white dark:bg-neutral-950">
			<div className="container mx-auto px-2 relative w-full max-w-5xl">
				<div className="text-center mb-6">
					<h2 className="text-base md:text-lg font-bold mb-2 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
						Our Partners
					</h2>
					<p className="text-xs text-neutral-600 max-w-xl mx-auto">
						We collaborate with industry leaders to deliver exceptional solutions
					</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 mb-2">
					{partners.map((partner, index) => (
						<div
							key={index}
							className="flex flex-col bg-white dark:bg-neutral-900 p-2 rounded border border-neutral-100/40"
						>
							<Image
								src={partner.logo}
								alt={`${partner.name} logo`}
								width={200}
								height={100}
								className="mb-2"
							/>
							<h4 className="text-[11px] font-bold text-neutral-800 dark:text-neutral-100 mb-0.5 truncate">
								{partner.name}
							</h4>
							<p className="text-[10px] text-neutral-600 dark:text-neutral-400 leading-tight mb-1">
								{partner.description}
							</p>
							<Link
								href={partner.link}
								className="mt-auto text-primary-600 text-[10px] font-medium underline"
							>
								Discover More
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}