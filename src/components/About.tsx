import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MapPin, Briefcase, Tv, Tent, Camera, Umbrella } from 'lucide-react';

export default function About() {
	const { t } = useTranslation();
	
	const stats = [
		{ value: '5+', label: t('about.stats.years') },
		{ value: '30+', label: t('about.stats.projects') },
		{ value: '15+', label: t('about.stats.clients') },
	];

	const interests = [
		{ icon: Tv, label: t('about.interests.anime'), bgColor: 'bg-accent-purple/10', borderColor: 'border-accent-purple/30', textColor: 'text-accent-purple' },
		{ icon: Tent, label: t('about.interests.camping'), bgColor: 'bg-green-500/10', borderColor: 'border-green-500/30', textColor: 'text-green-400' },
		{ icon: Camera, label: t('about.interests.photography'), bgColor: 'bg-accent-gold/10', borderColor: 'border-accent-gold/30', textColor: 'text-accent-gold' },
		{ icon: Umbrella, label: t('about.interests.noBeach'), bgColor: 'bg-red-500/10', borderColor: 'border-red-500/30', textColor: 'text-red-400', crossed: true },
	];

	return (
		<section id="about" className="py-16 sm:py-32 relative bg-[#050508]">
			{/* Background */}
			<div className="absolute inset-0 bg-gradient-to-b from-dark via-[#050508] to-dark" />
			<div className="absolute inset-0 milky-way-gradient opacity-40" />
			
			{/* Decorative elements */}
			<div className="absolute inset-0 overflow-hidden">
				{/* Nebulosas */}
				<div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[120px] animate-nebula" />
				<div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-cyan/8 rounded-full blur-[150px] animate-nebula" style={{ animationDelay: '2s' }} />
				<div className="absolute top-1/2 left-0 w-72 h-72 bg-nebula-blue/6 rounded-full blur-[100px]" />

				{/* Campo de estrellas */}
				<div className="absolute top-[10%] right-[15%] w-1.5 h-1.5 bg-white/60 rounded-full animate-twinkle" />
				<div className="absolute top-[20%] right-[25%] w-1 h-1 bg-accent-gold/50 rounded-full animate-twinkle-slow" />
				<div className="absolute top-[15%] right-[40%] w-2 h-2 bg-accent-cyan/40 rounded-full animate-twinkle" style={{ animationDelay: '0.5s' }} />
				<div className="absolute top-[30%] right-[10%] w-1 h-1 bg-white/40 rounded-full animate-twinkle-fast" />
				<div className="absolute top-[5%] right-[60%] w-1.5 h-1.5 bg-accent-purple/50 rounded-full animate-twinkle-slow" style={{ animationDelay: '1s' }} />
				<div className="absolute top-[40%] left-[5%] w-1 h-1 bg-white/50 rounded-full animate-twinkle" />
				<div className="absolute top-[60%] left-[10%] w-1.5 h-1.5 bg-accent-gold/40 rounded-full animate-twinkle-slow" style={{ animationDelay: '1.5s' }} />
				<div className="absolute bottom-[20%] right-[20%] w-2 h-2 bg-accent-cyan/30 rounded-full animate-twinkle" style={{ animationDelay: '0.8s' }} />
				<div className="absolute bottom-[30%] left-[15%] w-1 h-1 bg-white/60 rounded-full animate-twinkle-fast" />
				<div className="absolute bottom-[15%] right-[35%] w-1.5 h-1.5 bg-accent-purple/40 rounded-full animate-twinkle-slow" style={{ animationDelay: '2s' }} />

				{/* Constelación sutil */}
				<svg className="absolute top-[15%] right-[5%] w-48 h-48 opacity-20 hidden lg:block" viewBox="0 0 100 100">
					<line x1="20" y1="20" x2="50" y2="35" stroke="currentColor" strokeWidth="0.5" className="text-accent-cyan" />
					<line x1="50" y1="35" x2="80" y2="25" stroke="currentColor" strokeWidth="0.5" className="text-accent-cyan" />
					<line x1="50" y1="35" x2="60" y2="70" stroke="currentColor" strokeWidth="0.5" className="text-accent-cyan" />
					<circle cx="20" cy="20" r="2" fill="currentColor" className="text-white/60" />
					<circle cx="50" cy="35" r="2.5" fill="currentColor" className="text-accent-gold" />
					<circle cx="80" cy="25" r="2" fill="currentColor" className="text-white/60" />
					<circle cx="60" cy="70" r="2" fill="currentColor" className="text-white/60" />
				</svg>

				{/* Planeta flotante */}
				<motion.div
					className="absolute bottom-[10%] left-[3%] hidden lg:block"
					animate={{ y: [0, -10, 0] }}
					transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
				>
					<svg width="80" height="80" viewBox="0 0 80 80" className="opacity-20">
						<defs>
							<linearGradient id="aboutPlanetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" stopColor="#A78BFA" />
								<stop offset="100%" stopColor="#4C1D95" />
							</linearGradient>
							<radialGradient id="aboutPlanetShine" cx="30%" cy="30%" r="50%">
								<stop offset="0%" stopColor="white" stopOpacity="0.3" />
								<stop offset="100%" stopColor="white" stopOpacity="0" />
							</radialGradient>
						</defs>
						<circle cx="40" cy="40" r="25" fill="url(#aboutPlanetGrad)" />
						<circle cx="40" cy="40" r="25" fill="url(#aboutPlanetShine)" />
					</svg>
				</motion.div>

				{/* Líneas decorativas cósmicas */}
				<div className="absolute top-1/3 left-0 w-64 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
				<div className="absolute bottom-1/3 right-0 w-48 h-px bg-gradient-to-l from-transparent via-accent-cyan/30 to-transparent" />
			</div>

			<div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<span className="text-accent text-xs sm:text-sm font-medium uppercase tracking-widest mb-4 block">
						{t('about.badge')}
					</span>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-light mb-4 leading-tight">
						{t('about.title')}{' '}
						<span className="text-gradient-accent">{t('about.titleHighlight')}</span>
					</h2>
					<p className="text-light-400 text-lg max-w-2xl mx-auto">
						{t('about.intro')}
					</p>
				</motion.div>

				{/* Main content */}
				<div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
					
					{/* Left - Photo + Quick info */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="lg:col-span-2"
					>
						<div className="sticky top-24">
							{/* Photo */}
							<div className="relative mb-6">
								<div className="relative rounded-2xl overflow-hidden aspect-square max-w-sm mx-auto lg:mx-0">
									<img
										src={`${import.meta.env.BASE_URL}images/rodrigo-dev.jpeg`}
										alt="Rodrigo Rincón"
										className="w-full h-full object-cover"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
								</div>
								
								{/* Decorative border */}
								<div className="absolute -inset-2 border border-accent/20 rounded-3xl -z-10" />
							</div>

							{/* Quick info pills */}
							<div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
								<div className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm">
									<MapPin className="w-4 h-4 text-accent" />
									<span className="text-light-300">{t('about.location')}</span>
								</div>
								<div className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm">
									<Briefcase className="w-4 h-4 text-green-400" />
									<span className="text-light-300">{t('about.status')}</span>
								</div>
							</div>

							{/* Interest tags */}
							<div className="flex flex-wrap justify-center lg:justify-start gap-2">
								{interests.map((interest, index) => (
									<motion.div
										key={interest.label}
										initial={{ opacity: 0, scale: 0.8 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true }}
										transition={{ delay: 0.1 * index }}
										whileHover={{ scale: 1.05, y: -2 }}
										className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${interest.bgColor} border ${interest.borderColor} cursor-default group`}
									>
										<interest.icon className={`w-3.5 h-3.5 ${interest.textColor} ${interest.crossed ? 'group-hover:rotate-12' : ''} transition-transform`} />
										<span className={`text-xs ${interest.textColor}`}>
											{interest.label}
											{interest.crossed && ' ❌'}
										</span>
									</motion.div>
								))}
							</div>
						</div>
					</motion.div>

					{/* Right - Story + Stats */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="lg:col-span-3 space-y-6"
					>
						{/* Professional Story */}
						<div className="glass rounded-2xl p-6 sm:p-8 border border-white/5">
							<div className="space-y-4 text-light-400 leading-relaxed">
								<p className="text-base sm:text-lg">
									{t('about.description1')}
								</p>
								<p className="text-base sm:text-lg">
									{t('about.description2')}
								</p>
							</div>
						</div>

						{/* Personal Story */}
						<div className="glass rounded-2xl p-6 sm:p-8 border border-accent/10 relative overflow-hidden">
							{/* Decorative star */}
							<div className="absolute top-4 right-4 w-2 h-2 bg-accent-gold/40 rounded-full animate-twinkle" />
							<div className="absolute bottom-6 right-8 w-1.5 h-1.5 bg-accent-cyan/30 rounded-full animate-twinkle-slow" />
							
							<p className="text-accent text-xs font-medium uppercase tracking-wider mb-4">
								{t('about.personal.title')}
							</p>
							<div className="space-y-3 text-light-400 text-sm sm:text-base leading-relaxed">
								<div className="flex items-start gap-3">
									<Tv className="w-4 h-4 text-accent-purple mt-1 shrink-0" />
									<p>{t('about.personal.anime')}</p>
								</div>
								<div className="flex items-start gap-3">
									<Tent className="w-4 h-4 text-green-400 mt-1 shrink-0" />
									<p>{t('about.personal.camping')}</p>
								</div>
								<div className="flex items-start gap-3">
									<Camera className="w-4 h-4 text-accent-gold mt-1 shrink-0" />
									<p>{t('about.personal.photography')}</p>
								</div>
								<div className="flex items-start gap-3">
									<Umbrella className="w-4 h-4 text-red-400 mt-1 shrink-0" />
									<p className="italic">{t('about.personal.noBeach')} <span className="not-italic">🏔️✓ 🏖️✗</span></p>
								</div>
							</div>
						</div>

						{/* Stats */}
						<div className="grid grid-cols-3 gap-4">
							{stats.map((stat, index) => (
								<motion.div
									key={stat.label}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.3 + index * 0.1 }}
									className="glass rounded-xl p-4 sm:p-6 text-center border border-white/5 hover:border-accent/20 transition-colors"
								>
									<p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-accent mb-1">
										{stat.value}
									</p>
									<p className="text-xs sm:text-sm text-light-400">
										{stat.label}
									</p>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
