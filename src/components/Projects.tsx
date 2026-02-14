import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const projects = [
	{
		id: 'medflow',
		title: 'MedFlow Dashboard',
		category: 'SaaS · Healthcare',
		description:
			'Plataforma integral para gestión de clínicas: citas, expedientes y facturación en un solo lugar.',
		tags: ['React', 'TypeScript', 'Tailwind', 'Supabase'],
		metrics: ['40% menos tiempo', '200+ usuarios'],
		color: 'from-emerald-500 to-cyan-500',
		url: '#',
	},
	{
		id: 'invoicely',
		title: 'Invoicely',
		category: 'B2B · Fintech',
		description:
			'Sistema de facturación automática con integración tributaria directa al SAT.',
		tags: ['Vue 3', 'Node.js', 'PostgreSQL'],
		metrics: ['30 seg/factura', 'Integración SAT'],
		color: 'from-violet-500 to-purple-500',
		url: '#',
	},
	{
		id: 'taskflow',
		title: 'TaskFlow Automation',
		category: 'Herramienta Interna',
		description:
			'Editor visual de flujos de trabajo con monitoreo en tiempo real y ejecución automática.',
		tags: ['React', 'React Flow', 'WebSockets'],
		metrics: ['20h/semana ahorradas', '80% menos errores'],
		color: 'from-amber-500 to-orange-500',
		url: '#',
	},
	{
		id: 'appointme',
		title: 'AppointMe',
		category: 'Multi-tenant SaaS',
		description:
			'Plataforma white-label de gestión de citas con pagos integrados y recordatorios automáticos.',
		tags: ['Next.js', 'Stripe', 'Twilio'],
		metrics: ['50+ clientes', '$100K+/mes'],
		color: 'from-blue-500 to-indigo-500',
		url: '#',
	},
];

export default function Projects() {
	const { t } = useTranslation();

	return (
		<section id="proyectos" className="py-16 sm:py-32 relative">
			{/* Background */}
			<div className="absolute inset-0 overflow-hidden">
				{/* Gradient blobs */}
				<div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />
				<div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent-purple/10 rounded-full blur-[120px]" />

				{/* Decorative circles */}
				<div className="absolute top-20 left-1/4 w-28 h-28 border-2 border-accent/15 rounded-full" />
				<div className="absolute top-36 left-[30%] w-14 h-14 border border-accent-cyan/20 rounded-full" />
				<div className="absolute bottom-40 right-1/4 w-20 h-20 border-2 border-accent-purple/15 rounded-full" />

				{/* Diagonal lines */}
				<div className="absolute top-1/2 right-0 w-56 h-0.5 bg-gradient-to-l from-accent/25 to-transparent rotate-45 origin-right" />
				<div className="absolute bottom-1/3 left-0 w-56 h-0.5 bg-gradient-to-r from-accent-purple/25 to-transparent -rotate-45 origin-left" />

				{/* Dots grid */}
				<div
					className="absolute top-0 left-1/2 w-48 h-48 opacity-[0.06]"
					style={{
						backgroundImage:
							'radial-gradient(circle, #6366f1 2px, transparent 2px)',
						backgroundSize: '16px 16px',
					}}
				/>

				{/* Corner brackets */}
				<div className="absolute bottom-20 right-20">
					<div className="w-12 h-0.5 bg-accent/30" />
					<div className="w-0.5 h-12 bg-accent/30" />
				</div>
				<div className="absolute top-40 left-10">
					<div className="w-10 h-0.5 bg-accent-cyan/30" />
					<div className="w-0.5 h-10 bg-accent-cyan/30" />
				</div>

				{/* Planeta púrpura con anillo */}
				<motion.div
					className="absolute top-[15%] left-[5%] hidden lg:block"
					animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
					transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
				>
					<svg width="120" height="120" viewBox="0 0 120 120" className="opacity-[0.08]">
						<defs>
							<linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" stopColor="#a855f7" />
								<stop offset="40%" stopColor="#7c3aed" />
								<stop offset="100%" stopColor="#2e1065" />
							</linearGradient>
							<radialGradient id="purpleShine" cx="35%" cy="35%" r="50%">
								<stop offset="0%" stopColor="#c084fc" stopOpacity="0.8" />
								<stop offset="100%" stopColor="transparent" />
							</radialGradient>
							<linearGradient id="ringGradPurple" x1="0%" y1="0%" x2="100%" y2="0%">
								<stop offset="0%" stopColor="#7c3aed" stopOpacity="0.1" />
								<stop offset="30%" stopColor="#a855f7" stopOpacity="0.5" />
								<stop offset="70%" stopColor="#a855f7" stopOpacity="0.5" />
								<stop offset="100%" stopColor="#7c3aed" stopOpacity="0.1" />
							</linearGradient>
						</defs>
						{/* Anillo exterior - detrás */}
						<ellipse cx="60" cy="60" rx="55" ry="15" fill="none" stroke="url(#ringGradPurple)" strokeWidth="3" transform="rotate(-15 60 60)" />
						{/* Planeta */}
						<circle cx="60" cy="60" r="28" fill="url(#purpleGrad)" />
						<circle cx="60" cy="60" r="28" fill="url(#purpleShine)" />
						{/* Bandas atmosféricas */}
						<ellipse cx="60" cy="50" rx="25" ry="4" fill="rgba(139, 92, 246, 0.3)" />
						<ellipse cx="60" cy="65" rx="22" ry="3" fill="rgba(167, 139, 250, 0.25)" />
						<ellipse cx="60" cy="75" rx="18" ry="2" fill="rgba(139, 92, 246, 0.2)" />
						{/* Anillo interior - frente */}
						<ellipse cx="60" cy="60" rx="42" ry="10" fill="none" stroke="url(#ringGradPurple)" strokeWidth="2" transform="rotate(-15 60 60)" />
					</svg>
				</motion.div>
			</div>
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-[150px]" />
				<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[150px]" />
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
						{t('projects.badge')}
					</span>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-light mb-4 sm:mb-6">
						{t('projects.title')}
					</h2>
					<p className="text-light-400 text-base sm:text-lg max-w-2xl mx-auto">
						{t('projects.description')}
					</p>
				</motion.div>

				{/* Projects grid */}
				<div className="grid md:grid-cols-2 gap-4 sm:gap-8">
					{projects.map((project, index) => (
						<motion.article
							key={project.id}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className="group relative"
						>
							<div className="relative rounded-2xl sm:rounded-3xl bg-dark-100 border border-dark-300/50 overflow-hidden transition-all duration-500 hover:border-dark-300 hover-lift">
								{/* Image placeholder / Gradient */}
								<div
									className={`h-32 sm:h-48 bg-gradient-to-br ${project.color} opacity-20`}
								>
									<div className="absolute inset-0 bg-dark-100/80" />
								</div>

								{/* Content */}
								<div className="p-4 sm:p-8">
									{/* Category */}
									<span className="text-[10px] sm:text-xs font-medium text-light-400 uppercase tracking-wider">
										{project.category}
									</span>

									{/* Title */}
									<h3 className="text-lg sm:text-2xl font-bold text-light mt-1.5 sm:mt-2 mb-2 sm:mb-4 group-hover:text-gradient-accent transition-all">
										{project.title}
									</h3>

									{/* Description */}
									<p className="text-sm sm:text-base text-light-400 leading-relaxed mb-4 sm:mb-6">
										{project.description}
									</p>

									{/* Tags */}
									<div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
										{project.tags.map((tag) => (
											<span
												key={tag}
												className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-light-300 bg-dark-300/50 rounded-full"
											>
												{tag}
											</span>
										))}
									</div>

									{/* Metrics */}
									<div className="flex items-center gap-4 mb-6 py-4 border-y border-dark-300/50">
										{project.metrics.map((metric, i) => (
											<div
												key={i}
												className="flex items-center gap-2"
											>
												<div
													className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`}
												/>
												<span className="text-sm text-light-300">
													{metric}
												</span>
											</div>
										))}
									</div>

									{/* Link */}
									<a
										href={project.url}
										className="inline-flex items-center gap-2 text-light font-medium group/link"
									>
										{t('projects.viewProject')}
										<ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
									</a>
								</div>

								{/* Hover gradient overlay */}
								<div
									className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
								/>
							</div>
						</motion.article>
					))}
				</div>

				{/* View all CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="text-center mt-16"
				>
					<a
						href="https://github.com/rodrigo-rincon"
						target="_blank"
						rel="noopener noreferrer"
						className="group relative inline-flex items-center gap-3 px-8 py-4 text-light font-medium rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
					>
						{/* Gradient border */}
						<span className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent via-accent-purple to-accent-cyan p-[1px]">
							<span className="absolute inset-[1px] rounded-xl bg-dark" />
						</span>
						<ExternalLink className="relative w-5 h-5" />
						<span className="relative">{t('projects.viewMore')}</span>
					</a>
				</motion.div>
			</div>
		</section>
	);
}
