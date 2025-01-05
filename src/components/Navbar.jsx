import { useContext, useEffect, useRef, useState } from "react";
import logo from "../assets/logo.jpg";

import "./navbar.css";
import { IconBtn } from "./Button";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { NavigateContext } from "./contexts.js";

const Links = [
    {title: "About Me", href: "#about"},
    {title: "Skills", href: "#skills"},
    {title: "Projects", href: "#projects"},
    {title: "Services", href: "#services"},
    {title: "Contact Me", href: "#contact-me"},
]


const Navbar = () => {
    const [showMenu, setMenu] = useState(false);
    const navigateTo = useContext(NavigateContext);

    return (
        <section className="my-navbar fw" >
            <div className="nav-content mx-auto">
                <div className="fw d-flex flex-column">
                    <nav className="fw pad d-flex mid-align gap-5" style={{justifyContent: "space-between"}}>
                        <a className="no-link" href="#" onClick={handleLogoClick}>
                            <div className="flex-shrink-0 no-link" style={{width: "40px"}} >
                                <img src={logo} className="fw" style={{objectFit: "cover", borderRadius: "50%"}} />
                            </div>
                        </a>

                        <div className="d-none d-md-flex mid-align gap-2">
                            {
                                Links.map( (link, key) => <NavLink key={key} to={link.href}> {link.title} </NavLink> )
                            }
                        </div>
                        
                        <div className="d-md-none mid-align gap-2">
                            { showMenu ? 
                                <IconBtn icon={faXmark} onClick={()=> toggleMenu(false)} />
                                :
                                <IconBtn icon={faBars} onClick={()=> toggleMenu(true)}/>
                            }
                        </div>
                    </nav>
                    { showMenu && <Menu closeMenu={()=> toggleMenu(false)} /> }
                </div>
            </div>
        </section>
    );

    function toggleMenu(bool){
        setMenu(bool);
    }

    function handleLogoClick(e){
        e.preventDefault();
        navigateTo("home")
    }

}


function Menu({close}){
    const ref = useRef(null);

    useEffect(() => {
        setTimeout(() => ref.current.classList.remove("close") )
    })

    return (
        <div className="menu fw close d-md-none" onClick={close} ref={ref}>
            <div className='fw pad'>
                <div className="content fw d-flex flex-column gap-2">
                        {
                            Links.map( (link, key) => <NavLink key={key} to={link.href} delay={key}> {link.title} </NavLink> )
                        }
                </div>
            </div>
        </div>
    )

    function close(){
        once(transitionEnd, ref.current, closeMenu);
        ref.current.classList.add("close");
    }
}


const NavLink = ({children, to, delay}) => {
    const navigateTo = useContext(NavigateContext);
    
    return (
        <a className="no-link no-trans d-flex fw nav-link" href={to} onClick={handleClick}>
            {children}
        </a>

    )

    function handleClick(e) {
        e.preventDefault();
        navigateTo(to.slice(1));
    }
}

export default Navbar;
