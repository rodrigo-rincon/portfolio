import { motion } from 'framer-motion';
import { MapPin, Calendar, Rocket } from 'lucide-react';

const stats = [
	{ value: '5+', label: 'Años en órbita' },
	{ value: '30+', label: 'Misiones completadas' },
	{ value: '15+', label: 'Tripulantes satisfechos' },
];

export default function About() {
	return (
		<section id="about" className="py-16 sm:py-32 relative bg-[#050508]">
			{/* Fondo negro que se mimetiza con la imagen */}
			<div className="absolute inset-0 bg-gradient-to-b from-dark via-[#050508] to-dark" />
			
			{/* Vía Láctea diagonal sutil */}
			<div className="absolute inset-0 milky-way-gradient opacity-40" />
			
			{/* Background decorativo espacial */}
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

				{/* Grid pattern */}
				<div
					className="absolute top-1/4 right-0 w-72 h-72 opacity-[0.06]"
					style={{
						backgroundImage:
							'radial-gradient(circle, #6366f1 1.5px, transparent 1.5px)',
						backgroundSize: '24px 24px',
					}}
				/>

				{/* Líneas decorativas cósmicas */}
				<div className="absolute top-1/3 left-0 w-64 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
				<div className="absolute bottom-1/3 right-0 w-48 h-px bg-gradient-to-l from-transparent via-accent-cyan/30 to-transparent" />
				
				{/* Constelación sutil */}
				<svg className="absolute top-[15%] right-[5%] w-48 h-48 opacity-20" viewBox="0 0 100 100">
					<line x1="20" y1="20" x2="50" y2="35" stroke="currentColor" strokeWidth="0.5" className="text-accent-cyan" />
					<line x1="50" y1="35" x2="80" y2="25" stroke="currentColor" strokeWidth="0.5" className="text-accent-cyan" />
					<line x1="50" y1="35" x2="60" y2="70" stroke="currentColor" strokeWidth="0.5" className="text-accent-cyan" />
					<circle cx="20" cy="20" r="2" fill="currentColor" className="text-white/60" />
					<circle cx="50" cy="35" r="2.5" fill="currentColor" className="text-accent-gold" />
					<circle cx="80" cy="25" r="2" fill="currentColor" className="text-white/60" />
					<circle cx="60" cy="70" r="2" fill="currentColor" className="text-white/60" />
				</svg>
			</div>

			<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
				<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
					{/* Left - Image composition */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="relative"
					>
						{/* Main image */}
						<div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0">
							<img
								src={`${import.meta.env.BASE_URL}images/rodrigo-dev.jpeg`}
								alt="Rodrigo Rincón"
								className="w-full h-full object-cover"
							/>

							{/* Floating card - Experience */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.5 }}
								className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4"
							>
								<div className="flex items-center gap-4">
									<div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
										<Rocket className="w-6 h-6 text-accent" />
									</div>
									<div>
										<p className="text-light font-semibold">
											Frontend Developer
										</p>
										<p className="text-light-400 text-sm">
											+5 años explorando galaxias
										</p>
									</div>
								</div>
							</motion.div>
						</div>

						{/* Decorative elements */}
						<div className="absolute -top-6 -right-6 w-24 h-24 border border-accent/20 rounded-3xl" />
						<div className="absolute -bottom-6 -left-6 w-32 h-32 border border-accent-cyan/20 rounded-3xl" />
					</motion.div>

					{/* Right - Content */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<span className="text-accent text-xs sm:text-sm font-medium uppercase tracking-widest mb-3 sm:mb-4 block">
							Mi Misión
						</span>
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-light mb-4 sm:mb-6 leading-tight">
							Navegando el cosmos digital para{' '}
							<span className="text-gradient-accent">
								crear maravillas
							</span>
						</h2>

						<div className="space-y-3 sm:space-y-4 text-light-400 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
							<p>
								Soy un explorador del código con experiencia
								sólida en entornos de producto. He tripulado
								naves en startups de salud, plataformas administrativas y
								herramientas internas donde el código limpio y
								la buena UX son esenciales.
							</p>
							<p>
								Mi enfoque combina{' '}
								<span className="text-light">
									criterio técnico con sensibilidad de diseño
								</span>
								. Entiendo que un buen producto no solo funciona
								bien — también se siente bien para quien lo usa.
							</p>
						</div>

						{/* Info items */}
						<div className="flex flex-wrap gap-6 mb-10">
							<div className="flex items-center gap-2 text-light-300">
								<MapPin className="w-4 h-4 text-accent" />
								<span>México</span>
							</div>
							<div className="flex items-center gap-2 text-light-300">
								<Calendar className="w-4 h-4 text-accent" />
								<span>Listo para despegar</span>
							</div>
						</div>

						{/* Stats */}
						<div className="grid grid-cols-3 gap-6">
							{stats.map((stat, index) => (
								<motion.div
									key={stat.label}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.2 + index * 0.1 }}
									className="text-center lg:text-left"
								>
									<p className="text-3xl md:text-4xl font-bold text-gradient-accent mb-1">
										{stat.value}
									</p>
									<p className="text-sm text-light-400">
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
