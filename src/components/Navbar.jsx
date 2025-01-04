import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.jpg";

import "./navbar.css";
import { IconBtn } from "./Button";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Links = [
    {title: "About Me", href: "#about",},
    {title: "Skills", href: "#skills"},
    {title: "Projects", href: "#projects"},
    {title: "Services", href: "#services"},
    {title: "Contact Me", href: "#contact"},
]


const Navbar = () => {
    const [showMenu, setMenu] = useState(false);

    return (
        <section className="my-navbar fw" >
            <div className="nav-content mx-auto">
                <div className="fw d-flex flex-column">
                    <nav className="fw pad d-flex mid-align gap-5" style={{justifyContent: "space-between"}}>
                        <div className="flex-shrink-0" style={{width: "40px"}}>
                            <img src={logo} className="fw" style={{objectFit: "cover", borderRadius: "50%"}} />
                        </div>

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


const NavLink = ({children, to, goTo, delay}) => (
    <a className="no-link no-trans d-flex fw nav-link" href={to} onClick={goTo}>
        {children}
    </a>
)

export default Navbar;
