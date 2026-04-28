import { useState, useEffect } from "react";

const Navbar = (props) => {

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
            <a className="nav-item" href={props.link} onClick={toogleNav}> <i className={props.icon}></i> <span className="d-none-md d-none-lg">{props.name}</span> </a>
        );
    }
    return (
        <>
            <header className="bg-light row align-center text-dark">
            <div className="container">
                <div className="row align-center">
                    <div className="col-xs-11 col-lg-10 col-md-8 row align-center">
                        <h1 className="logo text-purple">Brevia<span className="small text-dark">Metroman</span></h1> 
                    </div>
                    <div className="col-xs-1  d-none-md d-none-lg">
                        <div className="btn-menu" onClick={toogleNav}>   
                            {!isNavOpen && <i className="fa fa-bars" ></i>}
                            {isNavOpen && <i className="fa fa-close" ></i>}
                        </div>
                    </div>
                    <div className="col-xs-12 s col-md-4 col-lg-2">
                    {isNavOpen && <nav>
                            <ol className="nav-bars text-purple">
                                <NavItem link="/" icon="fa-solid fa-home" name="Home"/>
                                <NavItem link="/about" icon="fa-solid fa-circle-info" name="About"/>
                                <NavItem link="/products" icon="fa-solid fa-cart-arrow-down" name="Products"/>
                                <NavItem link="/contact" icon="fa-solid fa-envelope" name="Contact"/>
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