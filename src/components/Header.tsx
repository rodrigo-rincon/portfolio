import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket } from 'lucide-react';

const navLinks = [
	{ href: '#about', label: 'Mi Misión' },
	{ href: '#servicios', label: 'Servicios Estelares' },
	{ href: '#stack', label: 'Arsenal' },
	{ href: '#proyectos', label: 'Misiones' },
];

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('');

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);

			// Detect active section
			const sections = navLinks.map((link) => link.href.replace('#', ''));
			const scrollPosition = window.scrollY + 200;

			for (const section of sections.reverse()) {
				const element = document.getElementById(section);
				if (element && element.offsetTop <= scrollPosition) {
					setActiveSection(section);
					break;
				}
			}

			// If at the top, no active section
			if (window.scrollY < 200) {
				setActiveSection('');
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<motion.header
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6 }}
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					isScrolled
						? 'bg-dark/80 backdrop-blur-xl border-b border-dark-300/50'
						: 'bg-transparent'
				}`}
			>
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<nav className="flex items-center justify-between h-20">
						{/* Logo */}
						<a
							href="#"
							className="group relative flex items-center gap-2"
						>
							<Rocket className="w-5 h-5 text-accent-cyan group-hover:rotate-[-20deg] transition-transform" />
							<span className="relative text-2xl font-bold">
								<span className="bg-gradient-to-r from-accent via-accent-cyan to-accent-purple bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
									Rocodrilo
								</span>
								<span className="text-gradient-accent">.</span>
							</span>
							{/* Glow effect on hover */}
							<span className="absolute -inset-2 bg-accent/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
						</a>

						{/* Desktop Nav */}
						<ul className="hidden md:flex items-center gap-8">
							{navLinks.map((link) => {
								const isActive =
									activeSection ===
									link.href.replace('#', '');
								return (
									<li key={link.href} className="relative">
										<a
											href={link.href}
											className={`relative py-2 transition-colors duration-300 ${
												isActive
													? 'text-light'
													: 'text-light-400 hover:text-light'
											}`}
										>
											{link.label}
											{/* Active indicator */}
											{isActive && (
												<motion.span
													layoutId="activeSection"
													className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-accent-cyan to-accent-purple rounded-full"
													transition={{
														type: 'spring',
														stiffness: 380,
														damping: 30,
													}}
												/>
											)}
										</a>
									</li>
								);
							})}
						</ul>

						{/* CTA */}
						<a
							href="#contacto"
							className="group hidden md:inline-flex relative px-6 py-3 font-medium rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(99,102,241,0.4)]"
						>
							<span className="absolute inset-0 bg-gradient-to-r from-accent via-accent-purple to-accent-cyan" />
							<span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
							<span className="relative text-white">
								Transmitir
							</span>
						</a>

						{/* Mobile Menu Button */}
						<button
							onClick={() =>
								setIsMobileMenuOpen(!isMobileMenuOpen)
							}
							className="md:hidden w-10 h-10 flex items-center justify-center text-light-400 hover:text-light transition-colors"
						>
							{isMobileMenuOpen ? (
								<X className="w-6 h-6" />
							) : (
								<Menu className="w-6 h-6" />
							)}
						</button>
					</nav>
				</div>
			</motion.header>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className="fixed inset-0 z-40 bg-dark/95 backdrop-blur-xl pt-24 md:hidden"
					>
						<nav className="px-6">
							<ul className="space-y-4">
								{navLinks.map((link, index) => (
									<motion.li
										key={link.href}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.1 }}
									>
										<a
											href={link.href}
											onClick={() =>
												setIsMobileMenuOpen(false)
											}
											className="block text-2xl font-medium text-light py-3 border-b border-dark-300"
										>
											{link.label}
										</a>
									</motion.li>
								))}
							</ul>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.4 }}
								className="mt-8"
							>
								<a
									href="#contacto"
									onClick={() => setIsMobileMenuOpen(false)}
									className="group relative block w-full py-4 font-medium rounded-xl text-center overflow-hidden"
								>
									<span className="absolute inset-0 bg-gradient-to-r from-accent via-accent-purple to-accent-cyan" />
									<span className="relative text-white">
										Transmitir
									</span>
								</a>
							</motion.div>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
