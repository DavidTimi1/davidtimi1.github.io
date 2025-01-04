import { Button } from "./Button";
import { SkillImg } from "./Skills";
import "./Projects.css";

import img1 from "../assets/ref1.png";
import img2 from "../assets/cooking1.gif";
import img3 from "../../public/full-large.jpg";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeaturedProjects = () => {
	return (
		<section className="my-recent-projects box fw">
			<div className="pad fw d-flex flex-column mid-align gap-5">
				<h3 className=" center-text">My Recent Projects</h3>
				<div className="d-flex mid-align flex-wrap even-space fw gap-4">
					{ projects.map((item, key) => <Project key={key} {...item} /> )}
				</div>
			</div>
		</section>
	);
};

export default FeaturedProjects;


// fist linkis the view live, 2nd is github

const projects = [
	{
		name: "Portfolio",
		imgs: [img1, img2, img3],
		descr: "My portfolio website",
		tools: {
			reactjs: "ci-react",
			django: "ci-django",
			node: "ci-nodejs",
			next: "ci-next",
			// flask: "ci-flask"
		},
		featured: true,
        thoughts: null,
		links: ["https://davidtimi1.github.io", "https://github.com/DavidTimi1"]
	},
	{
		name: "MelodyMatch",
		imgs: [img2, img3, img1],
		tools: {
			reactjs: "ci-react",
			django: "ci-django",
			node: "ci-nodejs",
			next: "ci-next",
			// flask: "ci-flask"
		},
		descr: "A song finder website",
		links: ["https://github.com/DavidTimi1"]
	},
	{
		name: "WhatsappAI",
		imgs: [img3, img1, img2],
		tools: {
			reactjs: "ci-react",
			django: "ci-django",
			node: "ci-nodejs",
			next: "ci-next",
			// flask: "ci-flask"
		},
		descr: "Whatsapp bot",
		links: ["https://davidtimi1.github.io", "https://github.com/DavidTimi1"]
	}
];


function Project({name, descr, imgs, tools, links }){
	return (
		<div className="project-card">
			<div className="fw d-flex flex-column">
				<div className="fw img-box" style={{aspectRatio: "3/2"}}>
					<img src={imgs[0]} className="max" />
				</div>
				<div className="fw d-flex flex-column gap-2" style={{padding: "20px"}}>
					<div>
						<h4> {name} </h4>
						<small>
							{descr}
						</small>
					</div>
					<div className="d-flex gap-1 mid-align">
						{
							Object.keys(tools).map( (skill, key) => <SkillImg key={key} name={skill} noTxt icon={ tools[skill] } size="lg" /> )
						}
					</div>
					<div className="d-flex gap-2">
						{
							links[0] &&
						<div>
							<a className="no-link btn-primary" href=""  target="_blank" rel="noreferrer" >
								<div className="max mid-align d-flex gap-2">
									<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
									<span> View Live </span>
								</div>
							</a>
						</div>

						}
						{
							links[1] &&
						<div>
							<a className="no-link btn-primary sec" href=""  target="_blank" rel="noreferrer" >
								<div className="max mid-align d-flex gap-2">
									<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
									<span> Github </span>
								</div>
							</a>
						</div>
						}
					</div>
				</div>

			</div>
		</div>
	)
}
