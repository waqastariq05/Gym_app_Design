import React, { useEffect, useState } from 'react'
import '../Navbar/Navbar.css'
import logo from '../../assets/logo.jpg'

const Navbar = () => {
    const [navbarFixed, setNavbarFixed] = useState("")
    const [navActive, setNavActive] = useState("")

    const handleNavbarFixed = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 150 ? setNavbarFixed("active shadow-lg") : setNavbarFixed("");
        }
        setNavActive(window.location.href.split("/")[3])
    }

    useEffect(() => {
        window.addEventListener("scroll", handleNavbarFixed)
    }, [])

    return (
        <header>
            <div className="container">
                <div className="mini-header">
                    <div className="phone">
                        <span>Fee Call </span>
                        <span>+92 220 1890671</span>
                    </div>
                    <div className="social">
                        <ul>
                            <li><a href=""><i className="fa-brands fa-twitter"></i></a></li>
                            <li><a href=""><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href=""><i className="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>

                <nav className={`navbar navbar-expand-lg ${navbarFixed}`}>
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="logo" className='img-fluid' />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className={`nav-link ${navActive === "#top" || navActive === "" || navActive === "#" ? "active" : ""} `} href="#top">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${navActive === "#about" ? "active" : ""} `} href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${navActive === "#classes" ? "active" : ""} `} href="#classes">Classes</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${navActive === "#memberShip" ? "active" : ""} `} href="#memberShip">pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${navActive === "#schedule" ? "active" : ""} `} href="#schedule">Schedule</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${navActive === "#team" ? "active" : ""} `} href="#team">Our Team</a>
                            </li>
                        </ul>
                        <div className="nav-btn">
                            <a href="#" className="btn">Become a Member</a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
