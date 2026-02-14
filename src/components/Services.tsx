import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Rocket, Sparkles, Zap, Globe } from 'lucide-react';

export default function Services() {
	const { t } = useTranslation();
	
	const services = [
		{
			icon: Rocket,
			title: t('services.items.frontend.title'),
			description: t('services.items.frontend.description'),
			color: 'from-violet-500 to-cyan-500',
		},
		{
			icon: Sparkles,
			title: t('services.items.ux.title'),
			description: t('services.items.ux.description'),
			color: 'from-purple-500 to-pink-500',
		},
		{
			icon: Zap,
			title: t('services.items.performance.title'),
			description: t('services.items.performance.description'),
			color: 'from-yellow-500 to-orange-500',
		},
		{
			icon: Globe,
			title: t('services.items.responsive.title'),
			description: t('services.items.responsive.description'),
			color: 'from-cyan-500 to-emerald-500',
		},
	];

	return (
		<section id="servicios" className="py-16 sm:py-32 relative overflow-hidden">
			{/* Background decoration */}
			<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />

			{/* Decorative shapes */}
			<div className="absolute top-32 left-10 w-24 h-24 border-2 border-accent/20 rounded-full" />
			<div className="absolute top-44 left-20 w-12 h-12 border border-accent-cyan/25 rounded-full" />
			<div className="absolute bottom-40 right-20 w-40 h-40 border-2 border-accent-purple/15 rotate-45" />

			{/* Planeta Tierra/Agua */}
			<motion.div
				className="absolute top-[18%] right-[6%] hidden md:block"
				animate={{ y: [0, -8, 0], rotate: [0, 360] }}
				transition={{ 
					y: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
					rotate: { duration: 60, repeat: Infinity, ease: 'linear' }
				}}
			>
				<svg width="70" height="70" viewBox="0 0 70 70" className="opacity-[0.15]">
					<defs>
						<linearGradient id="earthGrad" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="#06B6D4" />
							<stop offset="40%" stopColor="#0891B2" />
							<stop offset="100%" stopColor="#164E63" />
						</linearGradient>
						<radialGradient id="earthShine" cx="30%" cy="30%" r="50%">
							<stop offset="0%" stopColor="white" stopOpacity="0.5" />
							<stop offset="100%" stopColor="white" stopOpacity="0" />
						</radialGradient>
					</defs>
					{/* Cuerpo */}
					<circle cx="35" cy="35" r="28" fill="url(#earthGrad)" />
					<circle cx="35" cy="35" r="28" fill="url(#earthShine)" />
					{/* Continentes */}
					<ellipse cx="28" cy="28" rx="8" ry="6" fill="#22D3EE" opacity="0.4" />
					<ellipse cx="42" cy="38" rx="10" ry="7" fill="#22D3EE" opacity="0.3" />
					<circle cx="32" cy="45" r="5" fill="#22D3EE" opacity="0.25" />
					{/* Atmósfera */}
					<circle cx="35" cy="35" r="28" fill="none" stroke="rgba(34,211,238,0.2)" strokeWidth="2" />
				</svg>
			</motion.div>

			{/* Floating dots */}
			<div className="absolute top-1/4 right-1/4 w-2 h-2 bg-accent/50 rounded-full animate-pulse" />
			<div
				className="absolute top-1/3 left-1/3 w-2.5 h-2.5 bg-accent-cyan/50 rounded-full animate-pulse"
				style={{ animationDelay: '1s' }}
			/>
			<div
				className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-accent-purple/50 rounded-full animate-pulse"
				style={{ animationDelay: '2s' }}
			/>

			{/* Corner accent */}
			<div className="absolute top-0 left-0 w-64 h-64">
				<div className="absolute top-20 left-0 w-48 h-px bg-gradient-to-r from-accent/35 to-transparent" />
				<div className="absolute top-0 left-20 w-px h-48 bg-gradient-to-b from-accent/35 to-transparent" />
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
						{t('services.badge')}
					</span>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-light mb-4 sm:mb-6">
						{t('services.title')} <span className="text-gradient-accent">{t('services.titleHighlight')}</span>
					</h2>
				</motion.div>

				{/* Services grid */}
				<div className="grid md:grid-cols-2 gap-6">
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="group relative"
						>
							<div className="relative p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-dark-100 border border-dark-300/50 transition-all duration-500 hover:border-dark-300 hover:bg-dark-200/50 overflow-hidden h-full">
								{/* Gradient hover effect */}
								<div
									className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
								/>

								{/* Icon */}
								<div
									className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.color} p-[1px] mb-4 sm:mb-6`}
								>
									<div className="w-full h-full rounded-xl sm:rounded-2xl bg-dark-100 flex items-center justify-center group-hover:bg-dark-200 transition-colors">
										<service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-light" />
									</div>
								</div>

								{/* Content */}
								<h3 className="text-lg sm:text-xl font-semibold text-light mb-2 sm:mb-3 group-hover:text-gradient-accent transition-all">
									{service.title}
								</h3>
								<p className="text-sm sm:text-base text-light-400 leading-relaxed">
									{service.description}
								</p>

								{/* Arrow indicator */}
								<div className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-dark-300/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
									<svg
										className="w-5 h-5 text-light"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M17 8l4 4m0 0l-4 4m4-4H3"
										/>
									</svg>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
