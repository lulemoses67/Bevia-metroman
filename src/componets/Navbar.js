import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import toggleModal from './Utlilities';

const Navbar = () => {

    // 1. Initialize state based on current window width
    const [isNavOpen, setIsNavOpen] = useState(window.innerWidth > 539);

    // 2. Optimized resize listener
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 539) {
                setIsNavOpen(true);
            } else {
                setIsNavOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        
        // Cleanup listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toogleNav = () => {
        // window.scrollTo(0,0);
        isNavOpen && window.innerWidth < 538 ? setIsNavOpen(false) : setIsNavOpen(true);
    }
    var navs = document.getElementsByTagName('a');

    for (let i = 0; i < navs.length; i++) navs[i].addEventListener('click', () => window.scrollTo(0,0));
    
    const NavItem = (props) => {
        return (
            <NavLink className="nav-item" to={props.link} onClick={toogleNav}> <i className={props.icon}></i> <span className="d-none-md d-none-lg">{props.name}</span> </NavLink>
        );
    }

    

    return (
        <>
            <header className="bg-light row align-center text-dark">
            <div className="container">
                <div className="row align-center">
                    <div className="col-xs-9 col-lg-9 col-md-8 row align-center">
                        <h1 className="logo text-purple">Brevia<span className="small text-dark">Metroman</span></h1> 
                    </div>
                    <div className="col-xs-2 d-none-md d-none-lg">
                        <button className="btn-outline" onClick={toggleModal}><i className="fa-solid fa-shopping-cart" ></i></button>
                    </div>
                    <div className="col-xs-1  d-none-md d-none-lg">
                        <p className="btn-menu text-primary" onClick={toogleNav}>   
                            {!isNavOpen && <span><i className="fa-solid fa-bars" ></i></span>}
                            {isNavOpen && <i className="fa-solid fa-close" ></i>}
                        </p>
                    </div>
                    <div className="col-xs-12 s col-md-4 col-lg-3">
                    {isNavOpen && <nav>
                            <ol className="nav-bars text-purple">
                                <NavItem link="/" icon="fa-solid fa-home" name="Home"/>
                                <NavItem link="/about" icon="fa-solid fa-circle-info" name="About"/>
                                <NavItem link="/contact" icon="fa-solid fa-envelope" name="Contact"/>
                                <li className="nav-item text-success" onClick={toggleModal}> <i className="fa-solid fa-shopping-cart"></i><span className="d-none-md d-none-lg">Your Cart</span></li>
                            </ol>
                        </nav>}
                    </div>
                </div>
            </div>
            </header><br />
        </>
    );
}

export default Navbar;