import myPic from "../assets/ref1.png";
import"./Home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, IconBtn } from "./Button";
import { faAngleDoubleDown, faArrowUpRightFromSquare, faEllipsis, faEnvelope, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { GHLink, MailLink, ROLE, XLink } from "../App";
import { SkillImg } from "./Skills";
import { useContext } from "react";
import { NavigateContext } from "./contexts.js";

import resumeLink from "../assets/cooking1.gif";


const ELEVATOR = ""

const Home = () => {
    const navigateTo = useContext(NavigateContext);

    return (
        <div id="home" className="home fw">
            <div className="box max">
                <Aesthetics />

                <div className="abs-mid fw pad">

                    <div className="intro-txt d-flex flex-column mid-align gap-3 center-text">
                        <h1 className="fs-2 m-0"> Heyy 👋 I'm 
                            <span className="brand"> David</span>, 
                        </h1>
                        <h1 className="fs-2 m-0"> a <span className="brand"> Full-stack Developer </span> </h1>

                        <p>
                            <span style={{textWrap: "wrap"}}> {ELEVATOR} </span>
                        </p>
                        
                        <em className="sr-only">
                            As a {ROLE}, I am an expert in:
                        </em>
                        <ul className="tech-logos d-flex gap-2 mid-align">
                            {
                                Object.keys(featuredSkills).map( (skill, key) => <SkillImg key={key} name={skill} noTxt icon={ featuredSkills[skill] } /> )
                            }
                            <div>
                                <FontAwesomeIcon icon={faEllipsis} />
                                <span className="sr-only">just to mention a few</span>
                            </div>
                        </ul>

                        <div className="d-flex flex-column gap-2 mid-align flex-md-row">
                            <a className="no-link btn-primary sec" href={resumeLink}  target="_blank" rel="noreferrer" >
                                <div className="max mid-align d-flex gap-2">
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                    <span className="sr-only">Link to my </span>
                                    <span> Resume </span>
                                </div>
                            </a>
                            <button className="no-link btn-primary" onClick={() => navigateTo("projects")} >
                                <div className="max mid-align d-flex gap-2">
                                    <FontAwesomeIcon icon={faAngleDoubleDown} />
                                    <span> See my work </span>
                                    <span 
                                        className="badge position-absolute p-1 rounded-pill shadow-sm" 
                                        style={{
                                            zIndex: 1,
                                            bottom: "50%",
                                            right: "-5px",
                                            background: "linear-gradient(45deg, #ff416c, #ff4b2b)",
                                            fontSize: "0.8rem",
                                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                                        }}
                                        >
                                        🌟
                                    </span>
                                </div>
                            </button>
                        </div>

                    </div>

                </div>
                
                
                <div className="abs pad socials-list d-flex gap-3 mid-align">
                        <IconBtn href={GHLink} icon={faGithub}>
                            Link to my Github
                        </IconBtn>
                        <IconBtn href={XLink} icon={faXTwitter}>
                            Link to my twitter
                        </IconBtn>
                        <IconBtn href={MailLink} icon={faEnvelope}>
                            Link to my Mail
                        </IconBtn>
                    </div>
            </div>

        </div>

        // show a shortcut to all the other routes
    )
};

export default Home;

const featuredSkills = {
    reactjs: "ci-react",
    django: "ci-django",
    node: "ci-nodejs",
    next: "ci-next",
    // flask: "ci-flask"
}


const Aesthetics = () => (
    <div className="abs" style={{aspectRatio: "1/1", borderRadius: "50%", backgroundColor: "#9f2ba6", top: "5%", right: "10%", filter: "blur(75px)", width: "100px"}}>
    </div>
)