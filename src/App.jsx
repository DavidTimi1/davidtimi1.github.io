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

function App() {

	return (
		// <Placeholder />
		<div className="App custom-scroll">

			<Navbar />
			<Home />
			<AboutMe />
			<Skills />
			<FeaturedProjects />
			<MyServices />
			<Testimonials />
			<CallToAction />
			<Footer />
		</div>
	);
}
export default App;


export const TGLink = "#";
export const MailLink = "#";
export const LnLink = "#";
export const GHLink = "#";
export const XLink = "#";
export const FBLink = "#";