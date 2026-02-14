import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
	Github,
	Linkedin,
	Mail,
	Rocket,
	Satellite,
	Star,
	Orbit,
	Sparkles,
	Zap,
} from 'lucide-react';

export default function Hero() {
	const { t } = useTranslation();
	
	return (
		<section className="relative min-h-screen overflow-hidden noise">
			{/* Nebulosas espaciales de fondo */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-0 -left-40 w-[600px] h-[600px] bg-accent/25 rounded-full blur-[120px] animate-nebula" />
				<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-cyan/20 rounded-full blur-[100px] animate-nebula" style={{ animationDelay: '3s' }} />
				<div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-accent-purple/15 rounded-full blur-[80px] animate-nebula" style={{ animationDelay: '5s' }} />
			</div>

			{/* Main content */}
			<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 min-h-screen flex items-center">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
					{/* Left - Text content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
						className="order-2 lg:order-1"
					>
						{/* Badge espacial */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
							className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-200/80 border border-accent/30 backdrop-blur-sm mb-8"
						>
							<Satellite className="w-4 h-4 text-accent-cyan animate-pulse" />
							<span className="text-sm text-light-300">
								{t('hero.badge')}
							</span>
							<Star className="w-3 h-3 text-accent-gold animate-twinkle" />
						</motion.div>

						{/* Name & Role */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
						>
							<h2 className="text-light-400 text-base sm:text-lg mb-2">
								{t('hero.greeting')}
							</h2>
							<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
								<span className="text-gradient">Rodrigo</span>
								<br />
								<span className="text-light">Rincón</span>
							</h1>
						</motion.div>

						{/* Role with animated underline */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5 }}
							className="mb-6"
						>
							<span className="text-2xl md:text-3xl font-medium text-gradient-accent">
								{t('hero.role')}
							</span>
						</motion.div>

						{/* Description */}
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
							className="text-light-400 text-lg leading-relaxed max-w-lg mb-10"
						>
							{t('hero.description')}
						</motion.p>

						{/* CTA Buttons */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.7 }}
							className="flex flex-wrap items-center gap-4 mb-12"
						>
							<a
								href="#proyectos"
								className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover-rocket w-full sm:w-auto"
							>
								{/* Gradient background */}
								<span className="absolute inset-0 bg-gradient-to-r from-accent via-accent-purple to-accent-cyan" />
								{/* Shine effect */}
								<span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
								<Rocket className="relative w-4 h-4 text-white transition-transform group-hover:-translate-y-1 group-hover:rotate-[-20deg]" />
								<span className="relative text-white text-sm sm:text-base">
									{t('hero.cta.explore')}
								</span>
							</a>
							<a
								href="#contacto"
								className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-light font-medium rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 w-full sm:w-auto"
							>
								{/* Gradient border */}
								<span className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent via-accent-purple to-accent-cyan p-[1px]">
									<span className="absolute inset-[1px] rounded-xl bg-dark" />
								</span>
								<span className="relative">{t('hero.cta.contact')}</span>
							</a>
						</motion.div>

						{/* Social links */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.9 }}
							className="flex items-center gap-4"
						>
							<span className="text-sm text-light-400">
								{t('hero.signals')}
							</span>
							<div className="h-px w-12 bg-dark-300" />
							<div className="flex items-center gap-3">
								{[
									{
										icon: Github,
										href: 'https://github.com/rodrigo-rincon',
										label: 'GitHub',
									},
									{
										icon: Linkedin,
										href: 'https://www.linkedin.com/in/rodrigo-rincon/',
										label: 'LinkedIn',
									},
									{
										icon: Mail,
										href: 'mailto:rhodrigorincon@gmail.com',
										label: 'Email',
									},
								].map((social) => (
									<motion.a
										key={social.label}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.95 }}
										className="w-10 h-10 rounded-full bg-dark-200 border border-dark-300 flex items-center justify-center text-light-400 hover:text-light hover:bg-dark-300 transition-all"
										aria-label={social.label}
									>
										<social.icon className="w-4 h-4" />
									</motion.a>
								))}
							</div>
						</motion.div>
					</motion.div>

					{/* Right - Abstract Visual */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
						className="order-1 lg:order-2 flex justify-center lg:justify-end"
					>
						<div className="relative">
							{/* Decorative rings */}
							<div className="absolute inset-0 rounded-full border border-accent/20 scale-110 animate-spin-slow" />
							<div className="absolute inset-0 rounded-full border border-accent-cyan/10 scale-125" />

							{/* Glow effect */}
							<div className="absolute inset-0 bg-accent/30 rounded-full blur-[60px] scale-75" />

							{/* Main visual container - Code/Terminal aesthetic */}
							<div className="relative w-[280px] h-[280px] sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] rounded-2xl md:rounded-3xl overflow-hidden border border-dark-300/50 bg-dark-100/80 backdrop-blur-xl glow">
								{/* Terminal header */}
								<div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 border-b border-dark-300/50">
									<div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
									<div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
									<div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80" />
									<span className="ml-2 sm:ml-3 text-[10px] sm:text-xs text-light-400 font-mono">
										portfolio.tsx
									</span>
								</div>

								{/* Code content */}
								<div className="p-3 sm:p-4 md:p-6 font-mono text-[10px] sm:text-xs md:text-sm leading-relaxed">
									<div className="text-light-400">
										<span className="text-purple-400">
											const
										</span>{' '}
										<span className="text-cyan-400">
											developer
										</span>{' '}
										<span className="text-light-400">
											=
										</span>{' '}
										<span className="text-yellow-400">
											{'{'}
										</span>
									</div>
									<div className="pl-4 mt-2">
										<span className="text-light-300">
											name:
										</span>{' '}
										<span className="text-green-400">
											"Rodrigo Rincón"
										</span>
										<span className="text-light-400">
											,
										</span>
									</div>
									<div className="pl-4 mt-1">
										<span className="text-light-300">
											role:
										</span>{' '}
										<span className="text-green-400">
											"Frontend Developer"
										</span>
										<span className="text-light-400">
											,
										</span>
									</div>
									<div className="pl-4 mt-1">
										<span className="text-light-300">
											skills:
										</span>{' '}
										<span className="text-yellow-400">
											[
										</span>
									</div>
									<div className="pl-8 mt-1">
										<span className="text-green-400">
											"React"
										</span>
										<span className="text-light-400">
											,
										</span>{' '}
										<span className="text-green-400">
											"TypeScript"
										</span>
										<span className="text-light-400">
											,
										</span>
									</div>
									<div className="pl-8 mt-1">
										<span className="text-green-400">
											"Next.js"
										</span>
										<span className="text-light-400">
											,
										</span>{' '}
										<span className="text-green-400">
											"Tailwind"
										</span>
									</div>
									<div className="pl-4 mt-1">
										<span className="text-yellow-400">
											]
										</span>
										<span className="text-light-400">
											,
										</span>
									</div>
									<div className="pl-4 mt-1">
										<span className="text-light-300">
											available:
										</span>{' '}
										<span className="text-cyan-400">
											true
										</span>
									</div>
									<div className="mt-2">
										<span className="text-yellow-400">
											{'}'}
										</span>
										<span className="text-light-400">
											;
										</span>
									</div>

									{/* Blinking cursor */}
									<div className="mt-4 flex items-center">
										<span className="text-accent">→</span>
										<span className="ml-2 w-2 h-5 bg-accent animate-pulse" />
									</div>
								</div>
							</div>

							{/* Floating badges espaciales - hidden on mobile */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 1 }}
								className="hidden md:block absolute -left-16 lg:-left-20 top-8 glass px-4 py-3 rounded-xl animate-space-float"
							>
								<div className="flex items-center gap-2">
									<Orbit className="w-5 h-5 text-cyan-400" />
									<span className="text-sm font-medium text-light">
										React
									</span>
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 1.2 }}
								className="hidden md:block absolute -right-16 lg:-right-20 top-1/3 glass px-4 py-3 rounded-xl animate-space-float"
								style={{ animationDelay: '1s' }}
							>
								<div className="flex items-center gap-2">
									<Zap className="w-5 h-5 text-accent-gold" />
									<span className="text-sm font-medium text-light">
										TypeScript
									</span>
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1.4 }}
								className="hidden md:block absolute left-1/2 -translate-x-1/2 -bottom-12 glass px-4 py-3 rounded-xl animate-space-float"
								style={{ animationDelay: '2s' }}
							>
								<div className="flex items-center gap-2">
									<Sparkles className="w-5 h-5 text-accent-purple" />
									<span className="text-sm font-medium text-light">
										Next.js
									</span>
								</div>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Scroll indicator - Cohete */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.5 }}
				className="absolute bottom-8 left-1/2 -translate-x-1/2"
			>
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 2, repeat: Infinity }}
					className="flex flex-col items-center gap-2 text-light-400"
				>
					<span className="text-xs uppercase tracking-widest">
						Descender
					</span>
					<Rocket className="w-4 h-4 rotate-180" />
				</motion.div>
			</motion.div>
		</section>
	);
}
