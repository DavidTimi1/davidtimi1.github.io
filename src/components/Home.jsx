import myPic from "../assets/ref1.png";
import"./Home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, IconBtn } from "./Button";
import { faAngleDoubleDown, faArrowUpRightFromSquare, faEllipsis, faEnvelope, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { GHLink, LnLink, MailLink, XLink } from "../App";
import { SkillImg } from "./Skills";
import { useContext } from "react";
import { NavigateContext } from "./contexts.js";


const ELEVATOR = ""

const Home = () => {
    const navigateTo = useContext(NavigateContext);

    return (
        <div id="home" className="home fw">
            <div className="box max">
                <Aesthetics />

                <div className="abs-mid fw pad">

                    <div className="intro-txt d-flex flex-column mid-align gap-3 center-text">
                        <h3> Heyy 👋 I'm 
                            <span className="brand"> David</span>, 
                        </h3>
                        <h5> a <span className="brand"> Fullstack Web Developer </span> </h5>

                        <p>
                            <span style={{textWrap: "wrap"}}> {ELEVATOR} </span>
                        </p>
                        
                        <div className="tech-logos d-flex gap-2 mid-align">
                            {
                                Object.keys(featuredSkills).map( (skill, key) => <SkillImg key={key} name={skill} noTxt icon={ featuredSkills[skill] } /> )
                            }
                            <div>
                                <FontAwesomeIcon icon={faEllipsis} />
                            </div>
                        </div>

                        <div className="d-flex flex-column gap-2 flex-md-row">
                            <a className="no-link btn-primary sec" href=""  target="_blank" rel="noreferrer" >
                                <div className="max mid-align d-flex gap-2">
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                    <span> Resume </span>
                                </div>
                            </a>
                            <button className="no-link btn-primary" onClick={() => navigateTo("projects")} >
                                <div className="max mid-align d-flex gap-2">
                                    <FontAwesomeIcon icon={faAngleDoubleDown} />
                                    <span> See my work </span>
                                </div>
                            </button>
                        </div>

                    </div>

                </div>
                
                
                <div className="abs pad socials-list d-flex gap-3 mid-align">
                        <IconBtn href={GHLink} icon={faGithub}>
                            Link to Github
                        </IconBtn>
                        <IconBtn href={XLink} icon={faXTwitter}>
                            Link to twitter
                        </IconBtn>
                        <IconBtn href={MailLink} icon={faEnvelope}>
                            Link to Mail
                        </IconBtn>
                        <IconBtn href={LnLink} icon={faLinkedin}>
                            Link to LinkedIn
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