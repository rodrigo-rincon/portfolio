import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';

export default function LanguageToggle() {
	const { i18n } = useTranslation();
	const currentLang = i18n.language;

	const toggleLanguage = () => {
		const newLang = currentLang === 'es' ? 'en' : 'es';
		i18n.changeLanguage(newLang);
	};

	return (
		<motion.button
			onClick={toggleLanguage}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-200/80 border border-dark-300 hover:border-accent/50 transition-all"
			aria-label="Change language"
		>
			<Languages className="w-4 h-4 text-accent-cyan" />
			<span className="text-sm font-medium text-light-300 uppercase">
				{currentLang === 'es' ? 'EN' : 'ES'}
			</span>
		</motion.button>
	);
}
