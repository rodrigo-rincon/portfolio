import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const technologies = [
	{ name: 'React', level: 95 },
	{ name: 'TypeScript', level: 90 },
	{ name: 'Next.js', level: 88 },
	{ name: 'Tailwind CSS', level: 95 },
	{ name: 'Node.js', level: 80 },
	{ name: 'PostgreSQL', level: 75 },
];

const tools = [
	'React',
	'Vue.js',
	'Next.js',
	'TypeScript',
	'JavaScript',
	'Tailwind CSS',
	'Framer Motion',
	'Node.js',
	'Express',
	'PostgreSQL',
	'MongoDB',
	'Prisma',
	'Supabase',
	'Firebase',
	'Git',
	'Docker',
	'AWS',
	'Vercel',
	'Figma',
	'GraphQL',
];

export default function TechStack() {
	const { t } = useTranslation();

	return (
		<section id="stack" className="py-16 sm:py-32 relative overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />

				{/* Grid pattern left */}
				<div
					className="absolute bottom-0 left-0 w-64 h-64 opacity-[0.08]"
					style={{
						backgroundImage:
							'radial-gradient(circle, #22d3ee 1.5px, transparent 1.5px)',
						backgroundSize: '20px 20px',
					}}
				/>

				{/* Grid pattern right */}
				<div
					className="absolute top-0 right-0 w-64 h-64 opacity-[0.08]"
					style={{
						backgroundImage:
							'radial-gradient(circle, #a855f7 1.5px, transparent 1.5px)',
						backgroundSize: '20px 20px',
					}}
				/>

				{/* Decorative crosses */}
				<div className="absolute top-1/4 left-10">
					<div className="w-6 h-0.5 bg-accent/40" />
					<div className="w-0.5 h-6 bg-accent/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
				</div>
				<div className="absolute bottom-1/4 right-10">
					<div className="w-6 h-0.5 bg-accent-cyan/40" />
					<div className="w-0.5 h-6 bg-accent-cyan/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
				</div>

				{/* Floating triangles */}
				<div className="absolute top-20 right-1/4 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-accent/25" />
				<div className="absolute bottom-32 left-1/4 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px] border-t-accent-purple/25" />

				{/* Planeta Marte/Dorado con luna */}
				<motion.div
					className="absolute bottom-[20%] right-[6%] hidden lg:block"
					animate={{ y: [0, -12, 0] }}
					transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
				>
					<svg width="90" height="90" viewBox="0 0 90 90" className="opacity-[0.12]">
						<defs>
							<linearGradient id="marsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" stopColor="#FDE68A" />
								<stop offset="50%" stopColor="#F59E0B" />
								<stop offset="100%" stopColor="#B45309" />
							</linearGradient>
							<radialGradient id="marsShine" cx="30%" cy="30%" r="50%">
								<stop offset="0%" stopColor="white" stopOpacity="0.4" />
								<stop offset="100%" stopColor="white" stopOpacity="0" />
							</radialGradient>
							<radialGradient id="moonGrad" cx="30%" cy="30%" r="70%">
								<stop offset="0%" stopColor="#E5E7EB" />
								<stop offset="100%" stopColor="#6B7280" />
							</radialGradient>
						</defs>
						{/* Planeta */}
						<circle cx="45" cy="45" r="24" fill="url(#marsGrad)" />
						<circle cx="45" cy="45" r="24" fill="url(#marsShine)" />
						{/* Cráteres */}
						<circle cx="38" cy="40" r="4" fill="rgba(180,83,9,0.4)" />
						<circle cx="52" cy="50" r="3" fill="rgba(180,83,9,0.3)" />
						<circle cx="42" cy="55" r="2" fill="rgba(180,83,9,0.25)" />
						{/* Luna orbitando */}
						<motion.g
							animate={{ rotate: 360 }}
							transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
							style={{ transformOrigin: '45px 45px' }}
						>
							<circle cx="78" cy="45" r="6" fill="url(#moonGrad)" />
							<circle cx="76" cy="43" r="1" fill="rgba(107,114,128,0.5)" />
						</motion.g>
					</svg>
				</motion.div>
			</div>

			<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
				{/* Section header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12 sm:mb-20"
				>
					<span className="text-accent text-xs sm:text-sm font-medium uppercase tracking-widest mb-3 sm:mb-4 block">
						{t('stack.badge')}
					</span>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-light mb-4 sm:mb-6">
						{t('stack.title')}
					</h2>
					<p className="text-light-400 text-base sm:text-lg max-w-2xl mx-auto">
						{t('stack.description')}
					</p>
				</motion.div>

				{/* Skills bars */}
				<div className="grid md:grid-cols-2 gap-4 sm:gap-8 mb-12 sm:mb-20 max-w-4xl mx-auto">
					{technologies.map((tech, index) => (
						<motion.div
							key={tech.name}
							initial={{
								opacity: 0,
								x: index % 2 === 0 ? -30 : 30,
							}}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<div className="flex justify-between mb-1.5 sm:mb-2">
								<span className="text-light text-sm sm:text-base font-medium">
									{tech.name}
								</span>
								<span className="text-light-400 text-sm sm:text-base">
									{tech.level}%
								</span>
							</div>
							<div className="h-1.5 sm:h-2 bg-dark-300 rounded-full overflow-hidden">
								<motion.div
									initial={{ width: 0 }}
									whileInView={{ width: `${tech.level}%` }}
									viewport={{ once: true }}
									transition={{
										duration: 1,
										delay: 0.3 + index * 0.1,
									}}
									className="h-full rounded-full bg-gradient-to-r from-accent to-accent-cyan"
								/>
							</div>
						</motion.div>
					))}
				</div>

				{/* Marquee of tools */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="relative overflow-hidden py-4 sm:py-8"
				>
					<div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-dark to-transparent z-10" />
					<div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-dark to-transparent z-10" />

					<div className="flex animate-marquee">
						{[...tools, ...tools].map((tool, index) => (
							<div
								key={index}
								className="shrink-0 mx-2 sm:mx-4 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-dark-200 border border-dark-300 text-light-300 text-xs sm:text-sm font-medium whitespace-nowrap hover:bg-dark-300 hover:text-light transition-colors"
							>
								{tool}
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
