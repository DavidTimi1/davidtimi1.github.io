import './palette.css';
import './App.css';

// import Placeholder from './components/Placeholder';

import Home from './components/Home';
import AboutMe from './components/About';
import MyServices from './components/Services';
import MyWorkflow from './components/My Workflow';
import FeaturedProjects from './components/FeaturedProjects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CTA';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useEffect } from 'react';
import { NavigateContext } from './components/contexts.js';


const routes = ["home", "about", "skills", "projects", "services", "contact-me"]

function App() {

	useEffect(() => {
		const hash = window.location.hash.slice(1);

		if (hash && routes.includes(hash)) {
			setTimeout(() => goTo(hash), 1000);
		}

	}, []);

	return (
		// <Placeholder />
		<div className="App custom-scroll">
		<NavigateContext.Provider value={goTo}>

			<Navbar />
			<Home />
			<AboutMe />
			<Skills />
			<FeaturedProjects />
			<MyServices />
			{/* <Testimonials /> */}
			<CallToAction />
			<Footer />
			
		</NavigateContext.Provider>
		</div>
	);

	function goTo(hash){
		document.getElementById(hash).scrollIntoView({
			behavior: "smooth",
			start: "inline"
		})
	}
}
export default App;


export const TGLink = "#";
export const MailLink = "#";
export const LnLink = "#";
export const GHLink = "#";
export const XLink = "#";
export const FBLink = "#";