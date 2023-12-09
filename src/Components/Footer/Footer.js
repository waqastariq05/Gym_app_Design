import React from 'react'
import '../Footer/Footer.css'
import logo from '../../assets/logo.jpg'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className='col-md-4 col-sm-6'>
                            <div className="logo">
                                <img src={logo} alt="logo" className='img-fluid' />
                            </div>
                            <p className="text">A small river named Duden flows by their place and supplies it with the necessary
                                regelialia.</p>
                            <div className="socio">
                                <a href=""><i className="fa-brands fa-facebook-f icon"></i></a>
                                <a href=""><i className="fa-brands fa-twitter icon"></i></a>
                                <a href=""><i className="fa-brands fa-instagram icon"></i></a>
                            </div>
                        </div>
                        <div className='col-md-2 col-sm-6'>
                            <h2>Explore</h2>
                            <ul className="list">
                                <li><a href=""><i className="fa-solid fa-arrow-right"></i> About us</a></li>
                                <li><a href=""><i className="fa-solid fa-arrow-right"></i> Trainers Team</a></li>
                                <li><a href=""><i className="fa-solid fa-arrow-right"></i> Awesome Classes</a></li>
                                <li><a href=""><i className="fa-solid fa-arrow-right"></i> Pricing Packages</a></li>
                            </ul>
                        </div>
                        <div className='col-md-3 col-sm-6'>
                            <h2>Open Hour</h2>
                            <ul className="list">
                                <li><a href=""><i className="fa-solid fa-arrow-right"></i> Monday 11am-7pm</a></li>
                                <li><a href=""><i className="fa-solid fa-arrow-right"></i> Tuesday-Friday 11am-8pm</a></li>
                                <li><a href=""><i className="fa-solid fa-arrow-right"></i> Saturday 10am-6pm</a></li>
                                <li><a href=""><i className="fa-solid fa-arrow-right"></i> Sunday 11am-6pm</a></li>
                            </ul>
                        </div>
                        <div className='col-md-3 col-sm-6'>
                            <h2>Our Contacts</h2>
                            <ul className="list">
                                <li><i className="fa-solid fa-location-dot ficon"></i> 203 Fake St. Mountain View, San
                                    Francisco,California, USA</li>
                                <li><i className="fa-solid fa-phone ficon"></i> +2 392 3929 210</li>
                                <li><i className="fa-solid fa-paper-plane ficon"></i> info@yourdomain.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mini-footer">
                        <p>This template is made with <span><i className="fa fa-heart"></i></span> by <span>Waqas Tariq</span></p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
