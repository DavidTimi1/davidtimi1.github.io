import myPic from "../assets/cooking1.gif";
import "./About.css";


const AboutMe = () => {

	return (
		<section className="about-me box pad d-flex flex-column gap-3">
			<h3 className="center-text">About Me</h3>
			<div className="img-box fw my-pic">
				<img src={myPic} className="fw" alt="me" />
			</div>

			<div className="mx-auto" style={{width: "min(100%, 500px)"}}>
				{aboutTxt}
			</div>
		</section>
	);
};

export default AboutMe;


const aboutTxt = <> 
	<p> Heyy! I'm <em> David </em>, </p>
	<p>
		For over <em> 2 years </em> now, I have been obsessed making <em> user-centered websites </em> alongside <em> dynamic and progressive web applications </em>.
	</p>
	<p>
		I'm pursuing a Bachelor's degree in Computer Science since I kinda enjoy writing programs.
		I also participate in hackerthons and work with small teams to materialize great ideas.
	</p>
	<p>
		I quite like the idea of <em> Fancy sophisticated-looking Statistics </em> 😂
	</p>
	<p>
		My other hobbies include playing football and chess
	</p>
	</>
