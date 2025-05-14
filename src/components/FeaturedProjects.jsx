import { Button } from "./Button";
import { SkillImg } from "./Skills";
import "./Projects.css";

import chessImg from "../assets/chess.jpg";
import merryChristmasImg from "../assets/merry-christmas.jpg";
import portfolioImg from "../assets/portfolio.jpg";
import cookingGIF from "../assets/cooking1.gif";
import pic2plateImg from "../assets/pic2plate.webp";
import ludoGameImg from "../assets/ludo-game.png";
import whatsappbotImg from "../assets/whatsapp_bot.jpg"
import message50Img from "../assets/message-50_1.jpg";

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import useIntersectionObserver from "./ViewportObserver";
import { ROLE } from "../App";


const FeaturedProjects = () => {


	return (
		<section id="projects" className="my-recent-projects box fw">
			<div className="pad fw d-flex flex-column mid-align gap-5">
				<h1 className="fs-2 m-0  center-text">My Recent Projects</h1>
				<em className="sr-only"> as a {ROLE} </em>

				<ol className="list-style-none d-flex mid-align flex-wrap even-space fw gap-4 md-gap-5">
					{ projects.map((item, key) => <Project key={key} {...item} /> )}

					<Anticipate />
					
				</ol>
			</div>
		</section>
	);

	
};

export default FeaturedProjects;


// fist linkis the view live, 2nd is github

const projects = [
	{
		name: "Message50",
		imgs: [message50Img],
		featured: true,
		tools: {
			reactjs: "ci-react",
			css: "ci-css",
			bootstrap: "ci-bootstrap",
			javascript: "ci-js",
			python: "ci-python",
			django: "ci-django",
			postgreSQL: "ci-postgresql"
		},
		descr: "End-to-end Encrypted Messaging Web Application. Quick, Secure and Seamless Messaging Platform!",
		links: ["https://message50-frontend.vercel.app", "https://github.com/DavidTimi1/Message_50"]
	},
	{
		name: "Pic2Plate",
		imgs: [pic2plateImg],
		featured: true,
		tools: {
			next: "ci-next",
			tailwind: "ci-tailwind",
			typescript: "ci-ts",
			postgreSQL: "ci-postgresql",
			cloudinary: "ci-cloudinary-horizontal",
			gemini: {alt: "✨"}		
		},
		descr: "Take a picture of a meal or describe it and get the recipe instantly!",
		links: ["https://pic2plate-tau.vercel.app", "https://github.com/davidtimi1/pic2plate"]
	},
	{
		name: "Whatsapp Bot with Gemini and Chatgpt",
		imgs: [whatsappbotImg],
		featured: true,
		tools: {
			python: "ci-python",
			flask: {alt: "Flask"},
			openai: {alt: "Chatgpt"},
			gemini: {alt: "Gemini ✨"}		
		},
		descr: "AI Chatbot for Whatsapp with Image Gen and Speech Recognition capabilities built using Python Flask!",
		links: ["https://api.whatsapp.com/send/?phone=2347012006545", "https://github.com/DavidTimi1/Whatsapp-Chatgpt-AI"]
	},
	// {
	// 	name: "Ludo Multiplayer Game",
	// 	imgs: [ludoGameImg],
	// 	featured: true,
	// 	tools: {
	// 		html: "ci-html",
	// 		css: "ci-css",
	// 		tailwind: "ci-tailwind",
	// 		javascript: "ci-js",
	// 		github: "ci-github",
	// 	},
	// 	descr: "Play the classical board game - Ludo with friends or against AI using this web-based implementation!",
	// 	links: ["https://davidtimi1.github.io/Ludo-Game", "https://github.com/DavidTimi1/Ludo-Game"]
	// },
	{
		name: "Portfolio",
		imgs: [portfolioImg],
		tools: {
			reactjs: "ci-react",
			css: "ci-css",
			bootstrap: "ci-bootstrap",
			github: "ci-github",
		},
		descr: "My portfolio website",
		links: ["https://davidtimi1.github.io", "https://github.com/DavidTimi1/davidtimi1.github.io"]
	},
	{
		name: "2D Multiplayer Chess",
		imgs: [chessImg],
		tools: {
			html: "ci-html",
			css: "ci-css",
			javascript: "ci-js",
		},
		descr: "2D Chess game inspired by famous **Chess Titans**",
		links: ["https://rawcdn.githack.com/DavidTimi1/Chess/64c39e35f42adec0175795ddaa860131c2ec0868/Chess.html", "https://github.com/DavidTimi1/Chess"]
	},
	{
		name: "12 Days of Christmas",
		imgs: [merryChristmasImg],
		tools: {
			reactjs: "ci-react",
			css: "ci-css",
			javascript: "ci-ts",
			
		},
		descr: "Simple season's greetings page with a special gift every day for the 12 Days of Christmas",
		links: ["https://merry-christmas-phi.vercel.app", "https://github.com/DavidTimi1/Merry-christmas"]
	},
];


const Project = ({name, descr, imgs, tools, links, featured }) => {
	const ref = useRef(null);

    const isObserving = useIntersectionObserver({
        elementRef: ref,
        onIntersect: handleVisibilityChange,
    });


	return (
		<li className="project-card position-relative">
			<div className="fw d-flex flex-column">
				<div className="fw img-box" style={{aspectRatio: "3/2"}}>
					<img src={imgs[0]} className="max" />

					{featured && (
						<span 
						className="badge position-absolute top-0 end-0 p-2 rounded-pill shadow-sm" 
						style={{
							zIndex: 1,
							background: "linear-gradient(45deg, #ff416c, #ff4b2b)",
							color: "#fff",
							fontWeight: "bold",
							fontSize: "0.9rem",
							margin: "10px",
							padding: "5px 10px",
							boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
						}}
						>
							🌟 Featured
						</span>
					)}
				</div>
				<div className="fw d-flex flex-column gap-2" style={{padding: "20px"}}>
					<div>
						<h2 className="fs-4"> {name} </h2>
						<p className="fw-light m-0" style={{fontSize: "0.7rem"}}>
							{descr}
						</p>
					</div>
					<div className="sr-only"> Tools {} used to build {name}:  </div>
					<ul className="d-flex gap-1 mid-align">
						{
							Object.keys(tools).map( (skill, key) => <SkillImg key={key} name={skill} noTxt icon={ tools[skill] } size="lg" /> )
						}
					</ul>
					<div className="d-flex gap-2">
						{
							links[0] &&
						<div>
							<a className="no-link btn-primary" href={links[0]}  target="_blank" rel="noreferrer" >
								<div className="max mid-align d-flex gap-2">
									<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
									<span> View <div className="sr-only"> {name} </div> Live </span>
								</div>
							</a>
						</div>

						}
						{
							links[1] &&
						<div>
							<a className="no-link btn-primary sec" href={links[1]}  target="_blank" rel="noreferrer" >
								<div className="max mid-align d-flex gap-2">
									<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
									<span> 
										<span className="sr-only">Open source code for {name} on </span> 
										Github 
									</span>
								</div>
							</a>
						</div>
						}
					</div>
				</div>

			</div>
		</li>
	)
	
	function handleVisibilityChange(isVisible){

		if (isVisible){
			ref.current.classList.add("animated");
			ref.current.classList.remove("no-emp");

		} else {
			ref.current.classList.add("no-emp");
		}
	}
}


const Anticipate = () => (
	
	<div className="project-card">
		<div className="fw d-flex flex-column">
			<div className="fw img-box" style={{aspectRatio: "3/2"}}>
				<img src={cookingGIF} className="max" />
			</div>
			<div className="fw d-flex flex-column gap-2" style={{padding: "20px"}}>
				<h2 className="fs-4 m-0"> Coming Very Soon ... 🔥🔥 </h2>
				<ul>
					<li> HAAS 🏠 Website (House-as-a-Service) </li>
					<li> AI Customer Support Agent </li>
					<li> Accessibility Browser Eextension </li>
				</ul>
			</div>
		</div>
	</div>
)