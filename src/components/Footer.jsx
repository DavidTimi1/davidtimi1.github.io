import { faFacebook, faGithub, faLinkedin, faTelegram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { IconBtn } from "./Button";
import { faEnvelope, faStar } from "@fortawesome/free-solid-svg-icons";
import { FBLink, GHLink, LnLink, MailLink, TGLink, XLink } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
	return (
		<section className="fw">
			
			<footer className="footer fw d-flex flex-column mid-align box gap-2">
				<Socials />
				<Star />
				<CPYRight />
			</footer>

		</section>
	);
};

export default Footer;



const CPYRight = () => (
	<div className="">
		&copy; { new Date().getFullYear() } All rights reserved
	</div>
)

const Star = () => (
	<a href="https://github.com/DavidTimi1/davidtimi1.github.io" target="_blank" rel="noreferrer">
		<FontAwesomeIcon icon={faStar} />
		<span> Star on Github </span>
	</a>
)

const Socials = () => (
	<div className="d-flex flex-wrap mid-align gap-3" style={{justifyContent: "space-around"}}>
		<IconBtn href={XLink} icon={faXTwitter}>
			Link to twitter
		</IconBtn>
		<IconBtn href={FBLink} icon={faFacebook}>
			Link to facebook
		</IconBtn>
		<IconBtn href={TGLink} icon={faTelegram}>
			Link to telegram
		</IconBtn>
		<IconBtn href={MailLink} icon={faEnvelope}>
			Link to Mail
		</IconBtn>
		<IconBtn href={LnLink} icon={faLinkedin}>
			Link to LinkedIn
		</IconBtn>
		<IconBtn href={GHLink} icon={faGithub}>
			Link to Github
		</IconBtn>
	</div>
)