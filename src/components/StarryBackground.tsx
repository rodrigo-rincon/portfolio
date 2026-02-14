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
		</div>
	);
}
