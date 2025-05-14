import { useRef } from "react";
import myPic from "../assets/profile.jpg";
import "./About.css";
import useIntersectionObserver from "./ViewportObserver";
import { ALIAS, NAME, ROLE } from "../App";


const AboutMe = () => {
	const ref = useRef(null);
	

	const aboutTxt = <> 
		<p> Heyy! I'm <em> David <span className="sr-only">{NAME} popularly known as {ALIAS}, a {ROLE}</span> </em>. </p>
		<p>
			For over <em> 2 years </em> now, I have been obsessed making <em> user-centered websites </em> alongside <em> dynamic and progressive web applications </em>.
		</p>
		<p>
			I'm pursuing a Bachelor's degree in Computer Science since I kinda enjoy writing programs.
			I also participate in hackathons, working with small teams to bring life to great ideas.
		</p>
		<p>
			I quite like the idea of <em> Fancy sophisticated-looking Statistics </em> 😂
		</p>
		<p>
			My other hobbies include playing football and chess.
		</p>
	</>

    const isObserving = useIntersectionObserver({
        elementRef: ref,
        onIntersect: handleVisibilityChange,
    });

	return (
		<section id="about" className="about-me box pad d-flex flex-column gap-3 can-animate" ref={ref}>
			<h1 className="fs-2 m-0 center-text">About Me</h1>
			<div className="img-box fw my-pic">
				<img src={myPic} className="fw" alt="me" />
			</div>

			<div className="mx-auto" style={{width: "min(95%, 500px)"}}>
				{aboutTxt}
			</div>
		</section>
	);


	function handleVisibilityChange(isVisible){
		if (isVisible){
			ref.current.classList.add("animated");
			ref.current.classList.remove("no-emp");
		} else {
			ref.current.classList.add("no-emp");
		}
	}
};

export default AboutMe;

