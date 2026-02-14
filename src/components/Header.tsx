import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket } from 'lucide-react';
import LanguageToggle from './LanguageToggle';

export default function Header() {
	const { t } = useTranslation();
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('');

	const navLinks = [
		{ href: '#about', label: t('nav.mission') },
		{ href: '#servicios', label: t('nav.services') },
		{ href: '#stack', label: t('nav.arsenal') },
		{ href: '#proyectos', label: t('nav.missions') },
	];

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

						{/* CTA + Language Toggle */}
						<div className="hidden md:flex items-center gap-4">
							<LanguageToggle />
						</div>

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
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-40 bg-dark/98 backdrop-blur-xl pt-24 md:hidden overflow-hidden"
					>
						{/* Space background effects */}
						<div className="absolute inset-0 pointer-events-none">
							{/* Gradient orbs */}
							<motion.div
								animate={{
									scale: [1, 1.2, 1],
									opacity: [0.3, 0.5, 0.3],
								}}
								transition={{
									duration: 4,
									repeat: Infinity,
									ease: 'easeInOut',
								}}
								className="absolute top-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-[100px]"
							/>
							<motion.div
								animate={{
									scale: [1.2, 1, 1.2],
									opacity: [0.2, 0.4, 0.2],
								}}
								transition={{
									duration: 5,
									repeat: Infinity,
									ease: 'easeInOut',
								}}
								className="absolute bottom-40 -left-20 w-48 h-48 bg-accent-purple/20 rounded-full blur-[80px]"
							/>
							<motion.div
								animate={{
									scale: [1, 1.3, 1],
									opacity: [0.15, 0.3, 0.15],
								}}
								transition={{
									duration: 6,
									repeat: Infinity,
									ease: 'easeInOut',
								}}
								className="absolute top-1/2 right-10 w-32 h-32 bg-accent-cyan/20 rounded-full blur-[60px]"
							/>

							{/* Floating stars */}
							{[...Array(12)].map((_, i) => (
								<motion.div
									key={i}
									initial={{ opacity: 0 }}
									animate={{
										opacity: [0.2, 0.8, 0.2],
										scale: [1, 1.2, 1],
									}}
									transition={{
										duration: 2 + Math.random() * 2,
										repeat: Infinity,
										delay: Math.random() * 2,
									}}
									className="absolute w-1 h-1 bg-white rounded-full"
									style={{
										top: `${10 + Math.random() * 80}%`,
										left: `${5 + Math.random() * 90}%`,
									}}
								/>
							))}

							{/* Grid pattern */}
							<div
								className="absolute inset-0 opacity-[0.03]"
								style={{
									backgroundImage:
										'linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)',
									backgroundSize: '40px 40px',
								}}
							/>
						</div>

						<nav className="px-6 relative z-10">
							<ul className="space-y-2">
								{navLinks.map((link, index) => (
									<motion.li
										key={link.href}
										initial={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
										animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
										transition={{
											delay: index * 0.1,
											type: 'spring',
											stiffness: 100,
										}}
									>
										<a
											href={link.href}
											onClick={() =>
												setIsMobileMenuOpen(false)
											}
											className="group relative block text-2xl font-medium text-light py-4 px-4 rounded-xl transition-all duration-300 hover:bg-dark-200/50 overflow-hidden"
										>
											{/* Hover gradient line */}
											<span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent-cyan to-accent-purple rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
											
											{/* Hover background glow */}
											<span className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
											
											<span className="relative flex items-center gap-3">
												{/* Animated dot */}
												<motion.span
													className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-accent-cyan"
													animate={{
														scale: [1, 1.2, 1],
														opacity: [0.5, 1, 0.5],
													}}
													transition={{
														duration: 2,
														repeat: Infinity,
														delay: index * 0.2,
													}}
												/>
												{link.label}
											</span>
										</a>
									</motion.li>
								))}
							</ul>

							{/* Decorative line */}
							<motion.div
								initial={{ scaleX: 0 }}
								animate={{ scaleX: 1 }}
								transition={{ delay: 0.5, duration: 0.8 }}
								className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent my-8"
							/>

							{/* Language toggle with label */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.6 }}
								className="flex flex-col items-center gap-3"
							>
								<span className="text-xs text-light-400 uppercase tracking-widest">
									{t('nav.mission').includes('Mission') ? 'Language' : 'Idioma'}
								</span>
								<LanguageToggle />
							</motion.div>
						</nav>

						{/* Bottom decoration - outside nav */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.8 }}
							className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2"
						>
							<Rocket className="w-4 h-4 text-accent-cyan/50 rotate-[-45deg]" />
							<span className="text-xs text-light-400/50">Rocodrilo</span>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
