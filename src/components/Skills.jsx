import "./Skills.css"

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useIntersectionObserver from "./ViewportObserver";
import { useRef } from "react";


const Skills = () => {
	const ref = useRef(null);

    const isObserving = useIntersectionObserver({
        elementRef: ref,
        onIntersect: handleVisibilityChange,
    });


    return (
        <section className="Skills fw can-animate" ref={ref}>
            <div id="skills" className="box pad fw">
                <div className="d-flex flex-column center-text mid-align gap-5">

                    <h3> Skills / <br></br>
                        Technologies I Use
                    </h3>

                    <div className="tech-logos d-flex gap-3 flex-wrap mid-align even-space" style={{width: "min(100%, 500px)"}}>
                        {
                            Object.keys(skillList).map( (skill, key) => <SkillImg key={key} name={skill} icon={skillList[skill]} size="3x" /> )
                        }
                        <div className="d-flex mid-align gap-2">
                            <FontAwesomeIcon icon={faPlus} size="xl"/>
                            <span>
                                Many more
                            </span>
                        </div>
                    </div>

                </div>


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

export const SkillImg =({name, icon, noTxt, size = "2x"}) => (
    <div className="d-flex flex-column mid-align" style={{padding: "5px"}}>
        <div className="skill-item">
            {
                icon.alt?
                 <span className={`text-${size}`}>{icon.alt}</span>
                :
                <i role="img" className={`ci ${!icon.alt && icon} ci-${size}`} />
            }
        </div>

        { !noTxt && <small> {name} </small>  }
    </div>
)

export default Skills;


const skillList = {
    html: "ci-html",
    css: "ci-css",
    javascript: "ci-js",
    typescript: "ci-ts",
    reactjs: "ci-react",
    tailwind: "ci-tailwind",
    node: "ci-nodejs",
    next: "ci-next",
    python: "ci-python",
    django: "ci-django",
    bootstrap: "ci-bootstrap",
    mySQL: "ci-mysql",
    // nosql: "ci-nosql",
    git: "ci-git",
    github: "ci-github",
    figma: "ci-figma",
    c: "ci-c",
    postgreSQL: "ci-postgresql",
}
// [
//     "html", "css", "javascript", "tailwind", "bootstrap", "nodejs","nextjs", "python", "django", "flask", "sql", "nosql", "git", "figma"
// ]