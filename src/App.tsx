import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
	return (
		<div className="min-h-screen bg-dark relative">
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
		</div>
	);
}

export default App;
