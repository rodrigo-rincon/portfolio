import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, MessageCircle } from 'lucide-react';

export default function Contact() {
	const [copied, setCopied] = useState(false);
	const email = 'rhodrigorincon@gmail.com';

	const handleCopy = () => {
		navigator.clipboard.writeText(email);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<section
			id="contacto"
			className="py-16 sm:py-32 relative overflow-hidden"
		>
			{/* Background */}
			<div className="absolute inset-0">
				<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/15 rounded-full blur-[150px]" />

				{/* Decorative rings */}
				<div className="absolute top-1/4 left-10 w-48 h-48 border-2 border-accent/15 rounded-full" />
				<div className="absolute top-1/4 left-16 w-36 h-36 border border-accent-cyan/20 rounded-full" />
				<div className="absolute bottom-1/4 right-10 w-56 h-56 border-2 border-accent-purple/15 rounded-full" />

				{/* Floating dots */}
				<div className="absolute top-20 right-1/4 w-2.5 h-2.5 bg-accent/50 rounded-full animate-pulse" />
				<div
					className="absolute bottom-32 left-1/4 w-2 h-2 bg-accent-cyan/50 rounded-full animate-pulse"
					style={{ animationDelay: '1s' }}
				/>
				<div
					className="absolute top-1/2 right-20 w-2 h-2 bg-accent-purple/50 rounded-full animate-pulse"
					style={{ animationDelay: '0.5s' }}
				/>

				{/* Corner accents */}
				<div className="absolute top-10 right-10">
					<div className="w-16 h-0.5 bg-gradient-to-l from-accent/40 to-transparent" />
					<div className="w-0.5 h-16 bg-gradient-to-t from-accent/40 to-transparent absolute top-0 right-0" />
				</div>
				<div className="absolute bottom-10 left-10">
					<div className="w-16 h-0.5 bg-gradient-to-r from-accent-cyan/40 to-transparent" />
					<div className="w-0.5 h-16 bg-gradient-to-b from-accent-cyan/40 to-transparent" />
				</div>

				{/* Subtle grid */}
				<div
					className="absolute top-0 right-1/4 w-56 h-56 opacity-[0.06]"
					style={{
						backgroundImage:
							'radial-gradient(circle, #6366f1 1.5px, transparent 1.5px)',
						backgroundSize: '20px 20px',
					}}
				/>
			</div>

			<div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center"
				>
					{/* Badge */}
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-200/80 border border-dark-300 backdrop-blur-sm mb-8">
						<span className="relative flex h-2 w-2">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
						</span>
						<span className="text-sm text-light-300">
							Disponible para proyectos
						</span>
					</div>

					{/* Heading */}
					<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-light mb-4 sm:mb-6">
						¿Tienes un proyecto{' '}
						<span className="text-gradient-accent">en mente</span>?
					</h2>
					<p className="text-light-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-12">
						Estoy buscando nuevas oportunidades para colaborar en
						proyectos interesantes. Si tienes una idea, platiquemos.
					</p>

					{/* Email card */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="inline-block mb-8 sm:mb-12 w-full sm:w-auto"
					>
						<button
							onClick={handleCopy}
							className="group relative flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-4 sm:px-8 py-4 sm:py-6 rounded-2xl bg-dark-100 border border-dark-300/50 transition-all duration-300 hover:border-dark-300 hover:bg-dark-200/50 w-full sm:w-auto mx-auto"
						>
							<div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
								<Mail className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
							</div>
							<div className="text-center sm:text-left">
								<p className="text-xs sm:text-sm text-light-400 mb-0.5 sm:mb-1">
									Email
								</p>
								<p className="text-sm sm:text-xl font-semibold text-light break-all sm:break-normal">
									{email}
								</p>
							</div>
							<div className="sm:ml-4 sm:pl-4 sm:border-l border-dark-300">
								{copied ? (
									<Check className="w-5 h-5 text-green-500" />
								) : (
									<Copy className="w-5 h-5 text-light-400 group-hover:text-light transition-colors" />
								)}
							</div>

							{/* Tooltip */}
							{copied && (
								<motion.span
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-green-500"
								>
									¡Copiado!
								</motion.span>
							)}
						</button>
					</motion.div>

					{/* CTA buttons */}
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<a
							href={`mailto:${email}`}
							className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(99,102,241,0.4)] w-full sm:w-auto"
						>
							{/* Gradient background */}
							<span className="absolute inset-0 bg-gradient-to-r from-accent via-accent-purple to-accent-cyan" />
							{/* Shine effect */}
							<span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
							<span className="relative text-white text-sm sm:text-base">
								Enviar email
							</span>
							<ArrowUpRight className="relative w-4 h-4 text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
						</a>
						<a
							href="https://wa.me/529615622104"
							target="_blank"
							rel="noopener noreferrer"
							className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-light font-medium rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 w-full sm:w-auto"
						>
							{/* Gradient border */}
							<span className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent via-accent-purple to-accent-cyan p-[1px]">
								<span className="absolute inset-[1px] rounded-xl bg-dark" />
							</span>
							<MessageCircle className="relative w-4 h-4" />
							<span className="relative">WhatsApp</span>
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
