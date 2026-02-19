import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Star {
	id: number;
	x: number;
	y: number;
	size: number;
	delay: number;
	duration: number;
}

interface ShootingStar {
	id: number;
	x: number;
	y: number;
	delay: number;
}

export default function StarryBackground() {
	const [stars, setStars] = useState<Star[]>([]);
	const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

	useEffect(() => {
		// Generar estrellas estáticas que titilan
		const generateStars = () => {
			const newStars: Star[] = [];
			for (let i = 0; i < 150; i++) {
				newStars.push({
					id: i,
					x: Math.random() * 100,
					y: Math.random() * 100,
					size: Math.random() * 2 + 1,
					delay: Math.random() * 5,
					duration: Math.random() * 3 + 2,
				});
			}
			setStars(newStars);
		};

		// Generar estrellas fugaces
		const generateShootingStars = () => {
			const newShootingStars: ShootingStar[] = [];
			for (let i = 0; i < 3; i++) {
				newShootingStars.push({
					id: i,
					x: Math.random() * 70,
					y: Math.random() * 50,
					delay: Math.random() * 10 + i * 5,
				});
			}
			setShootingStars(newShootingStars);
		};

		generateStars();
		generateShootingStars();
	}, []);

	return (
		<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
			{/* Vía Láctea - gradiente diagonal */}
			<div className="absolute inset-0 milky-way-gradient opacity-50" />

			{/* Nebulosas de fondo */}
			<div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full animate-nebula" />
			<div
				className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-accent-cyan/15 rounded-full animate-nebula"
				style={{ animationDelay: '3s' }}
			/>
			<div
				className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-accent-purple/10 rounded-full animate-nebula"
				style={{ animationDelay: '5s' }}
			/>

			{/* Estrellas titilantes */}
			{stars.map((star) => (
				<div
					key={star.id}
					className="absolute rounded-full bg-white"
					style={{
						left: `${star.x}%`,
						top: `${star.y}%`,
						width: `${star.size}px`,
						height: `${star.size}px`,
						animation: `twinkle ${star.duration}s ease-in-out infinite`,
						animationDelay: `${star.delay}s`,
						boxShadow:
							star.size > 2
								? '0 0 6px rgba(255,255,255,0.8), 0 0 12px rgba(253, 230, 138, 0.4)'
								: '0 0 3px rgba(255,255,255,0.5)',
					}}
				/>
			))}

			{/* Estrellas fugaces */}
			{shootingStars.map((star) => (
				<motion.div
					key={star.id}
					className="absolute w-1 h-1 bg-white rounded-full"
					style={{
						left: `${star.x}%`,
						top: `${star.y}%`,
						boxShadow:
							'0 0 6px #fff, 0 0 12px #fff, -20px 0 20px rgba(255,255,255,0.3)',
					}}
					initial={{ x: 0, y: 0, opacity: 0 }}
					animate={{
						x: [0, 300],
						y: [0, 300],
						opacity: [0, 1, 1, 0],
					}}
					transition={{
						duration: 2,
						delay: star.delay,
						repeat: Infinity,
						repeatDelay: 8,
						ease: 'easeOut',
					}}
				>
					{/* Estela de la estrella fugaz */}
					<div
						className="absolute top-0 right-0 w-24 h-px bg-gradient-to-l from-white via-white/50 to-transparent"
						style={{ transform: 'rotate(45deg) translateX(50%)' }}
					/>
				</motion.div>
			))}

			{/* Algunas estrellas más brillantes con efecto especial */}
			<div
				className="absolute w-3 h-3 rounded-full star-glow bg-accent-gold/80 animate-twinkle"
				style={{ left: '15%', top: '20%', animationDelay: '0s' }}
			/>
			<div
				className="absolute w-2 h-2 rounded-full star-glow bg-white animate-twinkle-slow"
				style={{ left: '75%', top: '15%', animationDelay: '1s' }}
			/>
			<div
				className="absolute w-2.5 h-2.5 rounded-full star-glow bg-accent-cyan/90 animate-twinkle-fast"
				style={{ left: '85%', top: '60%', animationDelay: '2s' }}
			/>
			<div
				className="absolute w-2 h-2 rounded-full star-glow bg-accent-purple/80 animate-twinkle"
				style={{ left: '25%', top: '70%', animationDelay: '0.5s' }}
			/>

			{/* Sol distante - fijo en el fondo */}
			<div className="fixed top-[12%] right-[8%] z-0">
				<div className="relative">
					{/* Glow exterior difuso */}
					<div className="absolute -inset-4 w-20 h-20 bg-amber-200/15 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5s' }} />
					<div className="absolute -inset-6 w-24 h-24 bg-orange-300/8 rounded-full blur-3xl" />
					{/* Corona solar */}
					<div className="absolute -inset-2 w-16 h-16 rounded-full blur-lg" style={{ background: 'radial-gradient(circle, rgba(251, 191, 36, 0.25) 0%, rgba(245, 158, 11, 0.1) 50%, transparent 70%)' }} />
					{/* Núcleo del sol */}
					<svg width="48" height="48" viewBox="0 0 48 48" className="relative">
						<defs>
							<radialGradient id="distantSunCore" cx="50%" cy="50%" r="50%">
								<stop offset="0%" stopColor="#FFFBEB" stopOpacity="1" />
								<stop offset="25%" stopColor="#FDE68A" stopOpacity="0.95" />
								<stop offset="50%" stopColor="#FBBF24" stopOpacity="0.8" />
								<stop offset="75%" stopColor="#F59E0B" stopOpacity="0.5" />
								<stop offset="100%" stopColor="#D97706" stopOpacity="0.2" />
							</radialGradient>
							<radialGradient id="distantSunGlow" cx="50%" cy="50%" r="50%">
								<stop offset="0%" stopColor="#FEF3C7" stopOpacity="0.5" />
								<stop offset="60%" stopColor="#FDE68A" stopOpacity="0.2" />
								<stop offset="100%" stopColor="#FDE68A" stopOpacity="0" />
							</radialGradient>
						</defs>
						{/* Halo exterior */}
						<circle cx="24" cy="24" r="22" fill="url(#distantSunGlow)" />
						{/* Cuerpo del sol */}
						<circle cx="24" cy="24" r="10" fill="url(#distantSunCore)" />
					</svg>
				</div>
			</div>
		</div>
	);
}
