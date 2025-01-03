import myPic from "../assets/cooking1.gif";
import "./About.css";


const AboutMe = () => {

	return (
		<section className="about-me box pad d-flex flex-column gap-3 center-text">
			<h3>About Me</h3>
			<div className="img-box fw my-pic">
				<img src={myPic} className="fw" alt="me" />
			</div>

			<p className="mx-auto" style={{width: "min(100%, 500px)"}}>
				{aboutTxt}
			</p>

			<div id="resume-section" className="resume flex">
				<div>
					<h4 className="center-text">My Education</h4>
					<div className="chron-slides">
						{educationHistory.map((item, index) => {
							return <Card key={index} props={item} />
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;


const educationHistory = [
	{
		descr: { main: "Federal University of Technology Akure", sub: '' },
		duration: "2023 - Present",
	}
]


const aboutTxt = `I am a Fullstack Web developer with over 2 uears of e looking to collaborate and build exciting platforms and services
	that provide utility and improde productivity.`
// portfolio link, based cities, student at

const Card = () => (
	<div className="card">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
	</div>
)
