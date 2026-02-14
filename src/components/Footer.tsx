import { Github, Linkedin, Instagram, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
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
		icon: Instagram,
		href: 'https://instagram.com/roco.drilo',
		label: 'Instagram',
	},
];

const navLinks = [
	{ href: '#about', label: 'Mi Misión' },
	{ href: '#servicios', label: 'Servicios Estelares' },
	{ href: '#stack', label: 'Arsenal' },
	{ href: '#proyectos', label: 'Misiones' },
	{ href: '#contacto', label: 'Transmisión' },
];

export default function Footer() {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<footer className="relative py-10 sm:py-16 border-t border-dark-300/50 overflow-hidden">
			{/* Decorative elements */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-0 left-1/4 w-1 h-1 bg-accent/20 rounded-full" />
				<div className="absolute top-0 right-1/3 w-1 h-1 bg-accent-cyan/20 rounded-full" />
				<div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-accent-purple/20 rounded-full" />
			</div>

			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8">
					{/* Brand */}
					<div className="flex flex-col items-center lg:items-start gap-2 sm:gap-3">
						<a
							href="#"
							className="group relative flex items-center gap-2"
						>
							<span className="relative text-xl sm:text-2xl font-bold">
								<span className="bg-gradient-to-r from-accent via-accent-cyan to-accent-purple bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
									Rocodrilo
								</span>
								<span className="text-gradient-accent">.</span>
							</span>
							{/* Glow effect on hover */}
							<span className="absolute -inset-2 bg-accent/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
						</a>
						<p className="text-xs sm:text-sm text-light-400">
							Frontend Developer · Explorador de Código
						</p>
					</div>

					{/* Navigation */}
					<nav className="flex flex-wrap justify-center gap-4 sm:gap-8">
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="text-xs sm:text-sm text-light-400 hover:text-light transition-colors"
							>
								{link.label}
							</a>
						))}
					</nav>

					{/* Social */}
					<div className="flex items-center gap-2 sm:gap-3">
						{socialLinks.map(({ icon: Icon, href, label }) => (
							<motion.a
								key={label}
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
								className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-dark-200 border border-dark-300 
                           flex items-center justify-center text-light-400 
                           hover:text-light hover:bg-dark-300 transition-all"
								aria-label={label}
							>
								<Icon className="w-4 h-4" />
							</motion.a>
						))}
					</div>
				</div>

				{/* Bottom */}
				<div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-12 pt-8 border-t border-dark-300/30">
					<p className="text-xs text-light-400">
						© {new Date().getFullYear()} Rodrigo Rincón. Fabricado en el espacio.
					</p>

					<button
						onClick={scrollToTop}
						className="flex items-center gap-2 text-xs text-light-400 hover:text-light transition-colors group"
					>
						Despegar
						<span className="w-6 h-6 rounded-full bg-dark-200 border border-dark-300 flex items-center justify-center group-hover:bg-accent/20 transition-all">
							<Rocket className="w-3 h-3 rotate-[-45deg] group-hover:rotate-[-90deg] transition-transform" />
						</span>
					</button>
				</div>
			</div>
		</footer>
	);
}
