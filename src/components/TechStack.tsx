import { motion } from 'framer-motion';

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
	return (
		<section id="stack" className="py-32 relative overflow-hidden">
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
			</div>

			<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
				{/* Section header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-20"
				>
					<span className="text-accent text-sm font-medium uppercase tracking-widest mb-4 block">
						Stack Tecnológico
					</span>
					<h2 className="text-4xl md:text-5xl font-bold text-light mb-6">
						Tecnologías que domino
					</h2>
					<p className="text-light-400 text-lg max-w-2xl mx-auto">
						Stack moderno enfocado en rendimiento, escalabilidad y
						excelente experiencia de desarrollo.
					</p>
				</motion.div>

				{/* Skills bars */}
				<div className="grid md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
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
							<div className="flex justify-between mb-2">
								<span className="text-light font-medium">
									{tech.name}
								</span>
								<span className="text-light-400">
									{tech.level}%
								</span>
							</div>
							<div className="h-2 bg-dark-300 rounded-full overflow-hidden">
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
					className="relative overflow-hidden py-8"
				>
					<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark to-transparent z-10" />
					<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark to-transparent z-10" />

					<div className="flex animate-marquee">
						{[...tools, ...tools].map((tool, index) => (
							<div
								key={index}
								className="flex-shrink-0 mx-4 px-6 py-3 rounded-full bg-dark-200 border border-dark-300 text-light-300 text-sm font-medium whitespace-nowrap hover:bg-dark-300 hover:text-light transition-colors"
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
