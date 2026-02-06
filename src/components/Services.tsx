import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Globe } from 'lucide-react';

const services = [
	{
		icon: Code2,
		title: 'Desarrollo Frontend',
		description:
			'Aplicaciones web modernas con React, Next.js y TypeScript. Código limpio, mantenible y escalable.',
		color: 'from-blue-500 to-cyan-500',
	},
	{
		icon: Palette,
		title: 'UI/UX Implementation',
		description:
			'Transformo diseños de Figma en interfaces pixel-perfect con animaciones fluidas y micro-interacciones.',
		color: 'from-purple-500 to-pink-500',
	},
	{
		icon: Zap,
		title: 'Performance',
		description:
			'Optimización de rendimiento, Core Web Vitals, lazy loading y estrategias de caching avanzadas.',
		color: 'from-yellow-500 to-orange-500',
	},
	{
		icon: Globe,
		title: 'Full-Stack',
		description:
			'APIs REST/GraphQL, bases de datos, autenticación y despliegue en la nube (AWS, Vercel).',
		color: 'from-green-500 to-emerald-500',
	},
];

export default function Services() {
	return (
		<section className="py-32 relative overflow-hidden">
			{/* Background decoration */}
			<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />

			{/* Decorative shapes */}
			<div className="absolute top-32 left-10 w-24 h-24 border-2 border-accent/20 rounded-full" />
			<div className="absolute top-44 left-20 w-12 h-12 border border-accent-cyan/25 rounded-full" />
			<div className="absolute bottom-40 right-20 w-40 h-40 border-2 border-accent-purple/15 rotate-45" />

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
					className="text-center mb-20"
				>
					<span className="text-accent text-sm font-medium uppercase tracking-widest mb-4 block">
						Servicios
					</span>
					<h2 className="text-4xl md:text-5xl font-bold text-light mb-6">
						Lo que puedo hacer por ti
					</h2>
					<p className="text-light-400 text-lg max-w-2xl mx-auto">
						Combino experiencia técnica con sensibilidad por el
						diseño para crear productos digitales que destacan.
					</p>
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
							<div className="relative p-8 rounded-3xl bg-dark-100 border border-dark-300/50 transition-all duration-500 hover:border-dark-300 hover:bg-dark-200/50 overflow-hidden h-full">
								{/* Gradient hover effect */}
								<div
									className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
								/>

								{/* Icon */}
								<div
									className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-[1px] mb-6`}
								>
									<div className="w-full h-full rounded-2xl bg-dark-100 flex items-center justify-center group-hover:bg-dark-200 transition-colors">
										<service.icon className="w-6 h-6 text-light" />
									</div>
								</div>

								{/* Content */}
								<h3 className="text-xl font-semibold text-light mb-3 group-hover:text-gradient-accent transition-all">
									{service.title}
								</h3>
								<p className="text-light-400 leading-relaxed">
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
