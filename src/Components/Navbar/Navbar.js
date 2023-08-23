import React from 'react'
import '../Navbar/Navbar.css'
import logo from '../../assets/logo.jpg'

const Navbar = () => {
    return (
        <div>
            <header class="container">
                <div class="mini-header">
                    <div class="phone">
                        <span>Fee Call </span>
                        <span>+92 220 1890671</span>
                    </div>
                    <div class="social">
                        <ul>
                            <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                            <li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <nav class="navbar navbar-expand-lg">
                    <a class="navbar-brand" href="/">
                        <img src={logo} alt="logo" className='img-fluid' />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item">
                                <a class="nav-link" activeClass='active'>Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" activeClass='active'>About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" activeClass='active'>Classes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Our Team</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                        <div class="nav-btn">
                            <a href="" class="btn">Become a Member</a>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
