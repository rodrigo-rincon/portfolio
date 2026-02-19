import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SpaceLoaderProps {
	onLoadingComplete: () => void;
}

export default function SpaceLoader({ onLoadingComplete }: SpaceLoaderProps) {
	const [progress, setProgress] = useState(0);
	const [isExiting, setIsExiting] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) {
					clearInterval(interval);
					return 100;
				}
				return prev + Math.random() * 6 + 3;
			});
		}, 80);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (progress >= 100 && !isExiting) {
			const timer = setTimeout(() => {
				setIsExiting(true);
				setTimeout(onLoadingComplete, 800);
			}, 400);
			return () => clearTimeout(timer);
		}
	}, [progress, isExiting, onLoadingComplete]);

	// Estrellas de fondo - más cantidad
	const stars = Array.from({ length: 120 }, (_, i) => ({
		id: i,
		x: Math.random() * 100,
		y: Math.random() * 100,
		size: Math.random() * 2.5 + 0.5,
		delay: Math.random() * 3,
		brightness: Math.random(),
	}));

	// Estrellas fugaces
	const shootingStars = [
		{ id: 0, startX: 10, startY: 20, delay: 1 },
		{ id: 1, startX: 80, startY: 15, delay: 4 },
		{ id: 2, startX: 60, startY: 5, delay: 7 },
	];

	// Constelaciones
	const constellations = [
		// Constelación superior izquierda (Osa menor style)
		{
			points: [
				{ x: 8, y: 12 }, { x: 12, y: 15 }, { x: 16, y: 13 },
				{ x: 14, y: 18 }, { x: 18, y: 22 }, { x: 15, y: 25 },
			],
			lines: [[0,1], [1,2], [1,3], [3,4], [4,5]],
		},
		// Constelación inferior derecha
		{
			points: [
				{ x: 82, y: 75 }, { x: 86, y: 78 }, { x: 90, y: 76 },
				{ x: 88, y: 82 }, { x: 85, y: 85 },
			],
			lines: [[0,1], [1,2], [1,3], [3,4]],
		},
		// Constelación superior derecha (triángulo)
		{
			points: [
				{ x: 85, y: 8 }, { x: 92, y: 12 }, { x: 88, y: 18 },
			],
			lines: [[0,1], [1,2], [2,0]],
		},
	];

	// Planetas
	const planets = [
		{ x: 15, y: 70, size: 12, color: '#E0976F', rings: false, moons: 0 },
		{ x: 8, y: 40, size: 8, color: '#7B8CDE', rings: false, moons: 1 },
	];

	// Partículas orbitales
	const orbitParticles = Array.from({ length: 8 }, (_, i) => ({
		id: i,
		angle: (360 / 8) * i,
		radius: 100 + Math.random() * 30,
		size: Math.random() * 3 + 2,
		duration: 8 + Math.random() * 4,
		delay: i * 0.3,
	}));

	return (
		<AnimatePresence>
			{!isExiting && (
				<motion.div
					className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
					style={{ background: 'linear-gradient(135deg, #06010d 0%, #0a0118 30%, #0f0a1e 50%, #0a0118 70%, #06010d 100%)' }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.8, ease: 'easeInOut' }}
				>
					{/* Sol distante - replica del diseño principal */}
					<motion.div
						className="absolute"
						style={{ right: '8%', top: '12%' }}
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1, delay: 0.3 }}
					>
						<div className="relative">
							{/* Glow exterior difuso */}
							<motion.div 
								className="absolute -inset-4 w-20 h-20 bg-amber-200/15 rounded-full blur-2xl"
								animate={{ opacity: [0.8, 1, 0.8] }}
								transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
							/>
							<div className="absolute -inset-6 w-24 h-24 bg-orange-300/10 rounded-full blur-3xl" />
							{/* Corona solar */}
							<div 
								className="absolute -inset-2 w-16 h-16 rounded-full blur-lg" 
								style={{ background: 'radial-gradient(circle, rgba(251, 191, 36, 0.25) 0%, rgba(245, 158, 11, 0.1) 50%, transparent 70%)' }} 
							/>
							{/* Núcleo del sol */}
							<svg width="48" height="48" viewBox="0 0 48 48" className="relative">
								<defs>
									<radialGradient id="loaderSunCore" cx="50%" cy="50%" r="50%">
										<stop offset="0%" stopColor="#FFFBEB" stopOpacity="1" />
										<stop offset="25%" stopColor="#FDE68A" stopOpacity="0.95" />
										<stop offset="50%" stopColor="#FBBF24" stopOpacity="0.8" />
										<stop offset="75%" stopColor="#F59E0B" stopOpacity="0.5" />
										<stop offset="100%" stopColor="#D97706" stopOpacity="0.2" />
									</radialGradient>
									<radialGradient id="loaderSunGlow" cx="50%" cy="50%" r="50%">
										<stop offset="0%" stopColor="#FEF3C7" stopOpacity="0.5" />
										<stop offset="60%" stopColor="#FDE68A" stopOpacity="0.2" />
										<stop offset="100%" stopColor="#FDE68A" stopOpacity="0" />
									</radialGradient>
								</defs>
								{/* Halo exterior */}
								<circle cx="24" cy="24" r="22" fill="url(#loaderSunGlow)" />
								{/* Cuerpo del sol */}
								<circle cx="24" cy="24" r="10" fill="url(#loaderSunCore)" />
							</svg>
						</div>
					</motion.div>

					{/* Estrellas de fondo */}
					{stars.map((star) => (
						<motion.div
							key={star.id}
							className="absolute rounded-full"
							style={{
								left: `${star.x}%`,
								top: `${star.y}%`,
								width: star.size,
								height: star.size,
								background: star.brightness > 0.7 ? '#fff' : star.brightness > 0.4 ? '#E0E7FF' : '#C4B5FD',
							}}
							animate={{ 
								opacity: [0.15, star.brightness * 0.8 + 0.2, 0.15],
								scale: [1, star.brightness > 0.7 ? 1.3 : 1.1, 1],
							}}
							transition={{
								duration: 2 + Math.random() * 3,
								delay: star.delay,
								repeat: Infinity,
								ease: 'easeInOut',
							}}
						/>
					))}

					{/* Estrellas fugaces */}
					{shootingStars.map((star) => (
						<motion.div
							key={star.id}
							className="absolute w-1 h-1 bg-white rounded-full"
							style={{
								left: `${star.startX}%`,
								top: `${star.startY}%`,
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

					{/* Constelaciones */}
					{constellations.map((constellation, ci) => (
						<svg
							key={ci}
							className="absolute inset-0 w-full h-full pointer-events-none"
							style={{ opacity: 0.4 }}
						>
							{/* Líneas de constelación */}
							{constellation.lines.map((line, li) => (
								<motion.line
									key={li}
									x1={`${constellation.points[line[0]].x}%`}
									y1={`${constellation.points[line[0]].y}%`}
									x2={`${constellation.points[line[1]].x}%`}
									y2={`${constellation.points[line[1]].y}%`}
									stroke="rgba(139, 92, 246, 0.4)"
									strokeWidth="0.5"
									initial={{ pathLength: 0, opacity: 0 }}
									animate={{ pathLength: 1, opacity: 0.5 }}
									transition={{ duration: 2, delay: ci * 0.5 + li * 0.2 }}
								/>
							))}
							{/* Puntos de constelación */}
							{constellation.points.map((point, pi) => (
								<motion.circle
									key={pi}
									cx={`${point.x}%`}
									cy={`${point.y}%`}
									r="2"
									fill="#fff"
									initial={{ opacity: 0, scale: 0 }}
									animate={{ opacity: 0.7, scale: 1 }}
									transition={{ duration: 0.5, delay: ci * 0.5 + pi * 0.1 }}
								/>
							))}
						</svg>
					))}

					{/* Planetas */}
					{planets.map((planet, i) => (
						<motion.div
							key={i}
							className="absolute"
							style={{
								left: `${planet.x}%`,
								top: `${planet.y}%`,
							}}
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.5 + i * 0.3 }}
						>
							{/* Glow del planeta */}
							<div
								className="absolute rounded-full -translate-x-1/2 -translate-y-1/2"
								style={{
									width: planet.size * 2.5,
									height: planet.size * 2.5,
									background: `radial-gradient(circle, ${planet.color}30 0%, transparent 70%)`,
									filter: 'blur(8px)',
								}}
							/>
							{/* Planeta */}
							<motion.div
								className="rounded-full -translate-x-1/2 -translate-y-1/2"
								style={{
									width: planet.size,
									height: planet.size,
									background: `radial-gradient(circle at 30% 30%, ${planet.color} 0%, ${planet.color}80 50%, ${planet.color}40 100%)`,
									boxShadow: `inset -3px -3px ${planet.size/3}px rgba(0,0,0,0.4), 0 0 ${planet.size}px ${planet.color}40`,
								}}
								animate={{
									y: [0, -3, 0],
								}}
								transition={{
									duration: 4 + i,
									repeat: Infinity,
									ease: 'easeInOut',
								}}
							/>
							{/* Anillos de Saturno */}
							{planet.rings && (
								<motion.div
									className="absolute -translate-x-1/2 -translate-y-1/2"
									style={{
										width: planet.size * 2.2,
										height: planet.size * 0.6,
										border: `1px solid ${planet.color}60`,
										borderRadius: '50%',
										transform: 'translate(-50%, -50%) rotateX(70deg)',
									}}
									animate={{ rotate: 360 }}
									transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
								/>
							)}
							{/* Lunas */}
							{planet.moons > 0 && (
								<motion.div
									className="absolute"
									style={{
										width: planet.size * 2.5,
										height: planet.size * 2.5,
										left: -planet.size * 0.75,
										top: -planet.size * 0.75,
									}}
									animate={{ rotate: 360 }}
									transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
								>
									<div
										className="absolute rounded-full bg-gray-300"
										style={{
											width: 4,
											height: 4,
											top: 0,
											left: '50%',
											transform: 'translateX(-50%)',
											boxShadow: '0 0 6px rgba(255,255,255,0.5)',
										}}
									/>
								</motion.div>
							)}
						</motion.div>
					))}

					{/* Nebulosa de fondo */}
					<motion.div
						className="absolute w-[500px] h-[500px] rounded-full"
						style={{
							background: 'radial-gradient(ellipse, rgba(139, 92, 246, 0.1) 0%, rgba(34, 211, 238, 0.03) 40%, transparent 70%)',
							filter: 'blur(60px)',
						}}
						animate={{
							scale: [1, 1.1, 1],
							rotate: [0, 180, 360],
						}}
						transition={{
							scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
							rotate: { duration: 60, repeat: Infinity, ease: 'linear' },
						}}
					/>

					{/* Polvo estelar flotante */}
					{Array.from({ length: 20 }).map((_, i) => (
						<motion.div
							key={`dust-${i}`}
							className="absolute w-1 h-1 rounded-full bg-white/30"
							style={{
								left: `${20 + Math.random() * 60}%`,
								top: `${20 + Math.random() * 60}%`,
							}}
							animate={{
								x: [0, (Math.random() - 0.5) * 100, 0],
								y: [0, (Math.random() - 0.5) * 100, 0],
								opacity: [0, 0.5, 0],
							}}
							transition={{
								duration: 8 + Math.random() * 4,
								delay: i * 0.5,
								repeat: Infinity,
								ease: 'easeInOut',
							}}
						/>
					))}

					{/* Partículas orbitales */}
					{orbitParticles.map((particle) => (
						<motion.div
							key={particle.id}
							className="absolute"
							style={{
								width: particle.size,
								height: particle.size,
							}}
							animate={{
								x: [
									Math.cos((particle.angle * Math.PI) / 180) * particle.radius,
									Math.cos(((particle.angle + 360) * Math.PI) / 180) * particle.radius,
								],
								y: [
									Math.sin((particle.angle * Math.PI) / 180) * particle.radius,
									Math.sin(((particle.angle + 360) * Math.PI) / 180) * particle.radius,
								],
							}}
							transition={{
								duration: particle.duration,
								repeat: Infinity,
								ease: 'linear',
								delay: particle.delay,
							}}
						>
							<motion.div
								className="w-full h-full rounded-full"
								style={{
									background: particle.id % 2 === 0 ? '#8B5CF6' : '#22D3EE',
									boxShadow: `0 0 ${particle.size * 3}px ${particle.id % 2 === 0 ? '#8B5CF6' : '#22D3EE'}`,
								}}
								animate={{
									opacity: [0.4, 1, 0.4],
									scale: [0.8, 1.2, 0.8],
								}}
								transition={{
									duration: 2,
									repeat: Infinity,
									ease: 'easeInOut',
								}}
							/>
						</motion.div>
					))}

					{/* Círculo de progreso exterior */}
					<svg className="absolute w-40 h-40" viewBox="0 0 160 160">
						<circle
							cx="80"
							cy="80"
							r="70"
							fill="none"
							stroke="rgba(255,255,255,0.03)"
							strokeWidth="2"
						/>
						<motion.circle
							cx="80"
							cy="80"
							r="70"
							fill="none"
							stroke="url(#progressGradient)"
							strokeWidth="2"
							strokeLinecap="round"
							strokeDasharray={440}
							strokeDashoffset={440 - (440 * Math.min(progress, 100)) / 100}
							style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
						/>
						<defs>
							<linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
								<stop offset="0%" stopColor="#8B5CF6" />
								<stop offset="100%" stopColor="#22D3EE" />
							</linearGradient>
						</defs>
					</svg>

					{/* Glow central */}
					<motion.div
						className="absolute w-28 h-28 rounded-full"
						style={{
							background: 'radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, transparent 70%)',
							filter: 'blur(15px)',
						}}
						animate={{
							scale: [1, 1.3, 1],
							opacity: [0.5, 0.8, 0.5],
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
					/>

					{/* Contenido central */}
					<div className="relative z-10 flex flex-col items-center justify-center">
						<motion.div
							className="text-center"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5 }}
						>
							<motion.span
								className="text-6xl md:text-7xl font-extralight text-white tracking-tight"
								style={{
									textShadow: '0 0 40px rgba(139, 92, 246, 0.5), 0 0 80px rgba(34, 211, 238, 0.3)',
								}}
								key={Math.floor(progress)}
							>
								{Math.min(Math.floor(progress), 100)}
							</motion.span>
							<span className="text-2xl md:text-3xl font-extralight text-white/60 ml-1">%</span>
						</motion.div>

						<motion.p
							className="mt-4 text-xs text-white/40 tracking-[0.4em] uppercase"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.3 }}
						>
							Cargando
						</motion.p>
					</div>

					{/* Pulsos expansivos */}
					{[0, 1, 2].map((i) => (
						<motion.div
							key={i}
							className="absolute w-40 h-40 rounded-full border border-accent-purple/15"
							initial={{ scale: 1, opacity: 0.3 }}
							animate={{
								scale: [1, 2.5],
								opacity: [0.2, 0],
							}}
							transition={{
								duration: 3,
								repeat: Infinity,
								delay: i * 1,
								ease: 'easeOut',
							}}
						/>
					))}

					{/* Líneas decorativas en esquinas */}
					<div className="absolute top-8 left-8 w-20 h-20">
						<motion.div 
							className="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-accent-purple/40 to-transparent"
							initial={{ width: 0 }}
							animate={{ width: '100%' }}
							transition={{ duration: 1, delay: 0.2 }}
						/>
						<motion.div 
							className="absolute top-0 left-0 w-[1px] bg-gradient-to-b from-accent-purple/40 to-transparent"
							initial={{ height: 0 }}
							animate={{ height: '100%' }}
							transition={{ duration: 1, delay: 0.2 }}
						/>
					</div>
					<div className="absolute top-8 right-8 w-20 h-20">
						<motion.div 
							className="absolute top-0 right-0 h-[1px] bg-gradient-to-l from-accent-cyan/40 to-transparent"
							initial={{ width: 0 }}
							animate={{ width: '100%' }}
							transition={{ duration: 1, delay: 0.4 }}
						/>
						<motion.div 
							className="absolute top-0 right-0 w-[1px] bg-gradient-to-b from-accent-cyan/40 to-transparent"
							initial={{ height: 0 }}
							animate={{ height: '100%' }}
							transition={{ duration: 1, delay: 0.4 }}
						/>
					</div>
					<div className="absolute bottom-8 left-8 w-20 h-20">
						<motion.div 
							className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-accent-cyan/40 to-transparent"
							initial={{ width: 0 }}
							animate={{ width: '100%' }}
							transition={{ duration: 1, delay: 0.6 }}
						/>
						<motion.div 
							className="absolute bottom-0 left-0 w-[1px] bg-gradient-to-t from-accent-cyan/40 to-transparent"
							initial={{ height: 0 }}
							animate={{ height: '100%' }}
							transition={{ duration: 1, delay: 0.6 }}
						/>
					</div>
					<div className="absolute bottom-8 right-8 w-20 h-20">
						<motion.div 
							className="absolute bottom-0 right-0 h-[1px] bg-gradient-to-l from-accent-purple/40 to-transparent"
							initial={{ width: 0 }}
							animate={{ width: '100%' }}
							transition={{ duration: 1, delay: 0.8 }}
						/>
						<motion.div 
							className="absolute bottom-0 right-0 w-[1px] bg-gradient-to-t from-accent-purple/40 to-transparent"
							initial={{ height: 0 }}
							animate={{ height: '100%' }}
							transition={{ duration: 1, delay: 0.8 }}
						/>
					</div>

					{/* Título en la parte inferior */}
					<motion.h1
						className="absolute bottom-16 text-lg font-light text-white/60 tracking-[0.5em]"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5, duration: 0.6 }}
					>
						PORTFOLIO
					</motion.h1>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
