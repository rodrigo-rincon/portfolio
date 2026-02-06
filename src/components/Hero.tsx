import { motion } from 'framer-motion';
import {
	ArrowDown,
	Github,
	Linkedin,
	Mail,
	Atom,
	FileCode2,
	Hexagon,
} from 'lucide-react';

export default function Hero() {
	return (
		<section className="relative min-h-screen overflow-hidden noise">
			{/* Background gradient blobs */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-0 -left-40 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] animate-blob" />
				<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-cyan/15 rounded-full blur-[100px] animate-blob animation-delay-2000" />
				<div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-accent-purple/10 rounded-full blur-[80px] animate-blob animation-delay-4000" />
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
						{/* Badge */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
							className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-200/80 border border-dark-300 backdrop-blur-sm mb-8"
						>
							<span className="relative flex h-2 w-2">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
								<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
							</span>
							<span className="text-sm text-light-300">
								Disponible para nuevos proyectos
							</span>
						</motion.div>

						{/* Name & Role */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
						>
							<h2 className="text-light-400 text-base sm:text-lg mb-2">
								Hola, soy
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
								Frontend Developer
							</span>
						</motion.div>

						{/* Description */}
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
							className="text-light-400 text-lg leading-relaxed max-w-lg mb-10"
						>
							Especializado en crear experiencias web
							excepcionales. +5 años construyendo productos SaaS
							con React, TypeScript y tecnologías modernas.
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
								className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(99,102,241,0.4)] w-full sm:w-auto"
							>
								{/* Gradient background */}
								<span className="absolute inset-0 bg-gradient-to-r from-accent via-accent-purple to-accent-cyan" />
								{/* Shine effect */}
								<span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
								<span className="relative text-white text-sm sm:text-base">
									Ver proyectos
								</span>
								<ArrowDown className="relative w-4 h-4 text-white transition-transform group-hover:translate-y-1" />
							</a>
							<a
								href="#contacto"
								className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-light font-medium rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 w-full sm:w-auto"
							>
								{/* Gradient border */}
								<span className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent via-accent-purple to-accent-cyan p-[1px]">
									<span className="absolute inset-[1px] rounded-xl bg-dark" />
								</span>
								<span className="relative">Contáctame</span>
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
								Sígueme
							</span>
							<div className="h-px w-12 bg-dark-300" />
							<div className="flex items-center gap-3">
								{[
									{
										icon: Github,
										href: 'https://github.com/rodrigo-rincon',
									},
									{
										icon: Linkedin,
										href: 'https://www.linkedin.com/in/rodrigo-rincon/',
									},
									{
										icon: Mail,
										href: 'mailto:rhodrigorincon@gmail.com',
									},
								].map((social, i) => (
									<a
										key={i}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										className="w-10 h-10 rounded-full bg-dark-200 border border-dark-300 flex items-center justify-center text-light-400 transition-all duration-300 hover:bg-accent hover:border-accent hover:text-light hover:scale-110"
									>
										<social.icon className="w-4 h-4" />
									</a>
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

							{/* Floating badges - hidden on mobile */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 1 }}
								className="hidden md:block absolute -left-16 lg:-left-20 top-8 glass px-4 py-3 rounded-xl animate-float"
							>
								<div className="flex items-center gap-2">
									<Atom className="w-5 h-5 text-cyan-400" />
									<span className="text-sm font-medium text-light">
										React
									</span>
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 1.2 }}
								className="hidden md:block absolute -right-16 lg:-right-20 top-1/3 glass px-4 py-3 rounded-xl animate-float"
								style={{ animationDelay: '1s' }}
							>
								<div className="flex items-center gap-2">
									<FileCode2 className="w-5 h-5 text-blue-400" />
									<span className="text-sm font-medium text-light">
										TypeScript
									</span>
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1.4 }}
								className="hidden md:block absolute left-1/2 -translate-x-1/2 -bottom-12 glass px-4 py-3 rounded-xl animate-float"
								style={{ animationDelay: '2s' }}
							>
								<div className="flex items-center gap-2">
									<Hexagon className="w-5 h-5 text-white" />
									<span className="text-sm font-medium text-light">
										Next.js
									</span>
								</div>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Scroll indicator */}
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
						Scroll
					</span>
					<ArrowDown className="w-4 h-4" />
				</motion.div>
			</motion.div>
		</section>
	);
}
