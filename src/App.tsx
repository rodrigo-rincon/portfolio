import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import StarryBackground from './components/StarryBackground';
import CustomCursor from './components/CustomCursor';
import SpaceLoader from './components/SpaceLoader';

function App() {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<div className="min-h-screen bg-dark relative">
			{isLoading && <SpaceLoader onLoadingComplete={() => setIsLoading(false)} />}
			<CustomCursor />
			<StarryBackground />
			<Header />
			<main>
				<Hero />
				<About />
				<Services />
				<TechStack />
				<Projects />
				<Contact />
			</main>
			<Footer />
			<WhatsAppButton />
		</div>
	);
}

export default App;
