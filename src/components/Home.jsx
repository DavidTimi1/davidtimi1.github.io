import myPic from "../assets/ref1.png";
import"./Home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, IconBtn } from "./Button";
import { faArrowUpRightFromSquare, faEllipsis, faEnvelope, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { GHLink, LnLink, MailLink, XLink } from "../App";
import { SkillImg } from "./Skills";


const ELEVATOR = ""

const Home = () => {


    return (
        <div className="home fw">
            <div className="box max">
                <div className="abs-mid fw pad">

                    <div className="intro-txt d-flex flex-column mid-align gap-3 center-text">
                        <h3> Heyy 👋 I'm 
                            <span className="brand"> David</span>, 
                        </h3>
                        <h5> a <span className="brand"> Fullstack Web Developer </span> </h5>

                        <p>
                            <span style={{textWrap: "wrap"}}> {ELEVATOR} </span>
                        </p>
                        
                        <div className="tech-logos d-flex gap-2 mid-align even-space">
                            {
                                Object.keys(featuredSkills).map( (skill, key) => <SkillImg key={key} name={skill} noTxt icon={ featuredSkills[skill] } /> )
                            }

                            <FontAwesomeIcon icon={faEllipsis} />
                        </div>

                        <div>
                            <a className="no-link btn-primary" href=""  target="_blank" rel="noreferrer" >
                                <div className="max mid-align flex gap-2">
                                    <span> Resume </span>
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                </div>
                            </a>
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
    flask: "ci-flask"
}