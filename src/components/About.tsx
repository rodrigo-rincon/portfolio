import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase } from 'lucide-react';

const stats = [
	{ value: '5+', label: 'Años de experiencia' },
	{ value: '30+', label: 'Proyectos completados' },
	{ value: '15+', label: 'Clientes satisfechos' },
];

export default function About() {
	return (
		<section id="about" className="py-32 relative">
			{/* Background */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-purple/15 rounded-full blur-[120px]" />

				{/* Decorative elements */}
				<div className="absolute top-20 right-20 w-3 h-3 bg-accent/50 rounded-full" />
				<div className="absolute top-40 right-32 w-2 h-2 bg-accent-cyan/60 rounded-full" />
				<div className="absolute bottom-32 left-20 w-2.5 h-2.5 bg-accent-purple/50 rounded-full" />

				{/* Grid pattern */}
				<div
					className="absolute top-1/4 right-0 w-72 h-72 opacity-[0.08]"
					style={{
						backgroundImage:
							'radial-gradient(circle, #6366f1 1.5px, transparent 1.5px)',
						backgroundSize: '24px 24px',
					}}
				/>

				{/* Decorative line */}
				<div className="absolute top-1/2 left-0 w-48 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
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
								src="/images/rodrigo-dev.jpeg"
								alt="Rodrigo Rincón"
								className="w-full h-full object-cover"
							/>
							{/* Gradient overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />

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
										<Briefcase className="w-6 h-6 text-accent" />
									</div>
									<div>
										<p className="text-light font-semibold">
											Frontend Developer
										</p>
										<p className="text-light-400 text-sm">
											+5 años de experiencia
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
						<span className="text-accent text-sm font-medium uppercase tracking-widest mb-4 block">
							Sobre mí
						</span>
						<h2 className="text-4xl md:text-5xl font-bold text-light mb-6 leading-tight">
							Construyo productos digitales que{' '}
							<span className="text-gradient-accent">
								funcionan
							</span>
						</h2>

						<div className="space-y-4 text-light-400 text-lg leading-relaxed mb-8">
							<p>
								Soy desarrollador frontend con experiencia
								sólida en entornos de producto. He trabajado en
								startups de salud, plataformas administrativas y
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
								<span>Disponible inmediato</span>
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
