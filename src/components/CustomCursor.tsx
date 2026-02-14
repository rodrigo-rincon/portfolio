import { useEffect, useState } from 'react';

export default function CustomCursor() {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [isHovering, setIsHovering] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		
		const updatePosition = (e: MouseEvent) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};

		// Detectar hover en elementos interactivos
		const handleElementHover = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			const isInteractive =
				target.tagName === 'A' ||
				target.tagName === 'BUTTON' ||
				target.closest('a') ||
				target.closest('button') ||
				target.classList.contains('cursor-hover');

			setIsHovering(!!isInteractive);
		};

		window.addEventListener('mousemove', updatePosition);
		window.addEventListener('mousemove', handleElementHover);

		return () => {
			window.removeEventListener('mousemove', updatePosition);
			window.removeEventListener('mousemove', handleElementHover);
		};
	}, []);

	// No renderizar en SSR
	if (!mounted) return null;

	return (
		<>
			{/* Punto central - estrella */}
			<div
				className="cursor-dot"
				style={{
					left: `${position.x - 5}px`,
					top: `${position.y - 5}px`,
				}}
			/>
			{/* Anillo exterior */}
			<div
				className={`cursor-outline ${isHovering ? 'hovering' : ''}`}
				style={{
					left: `${position.x - (isHovering ? 30 : 20)}px`,
					top: `${position.y - (isHovering ? 30 : 20)}px`,
				}}
			/>
		</>
	);
}
