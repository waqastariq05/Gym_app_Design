import React from 'react'
import '../Banner/Banner.css'

const Banner = () => {
    return (
        <>
            <div className="banner" id='top'>
                <div className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="3000">
                            <div className="slider-img img1"></div>
                            <div className="carousel-caption">
                                <h2>shape your perfect body</h2>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                <button className="btn">Take a Tour Now <i className="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <div className="slider-img img2"></div>
                            <div className="carousel-caption">
                                <h2>YOU ONLY FAIL, WHEN YOU STOP TRYING</h2>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                <button className="btn">Take a Tour Now <i className="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <div className="slider-img img3"></div>
                            <div className="carousel-caption">
                                <h2>YOU ONLY FAIL, WHEN YOU STOP TRYING</h2>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                <button className="btn">Take a Tour Now <i className="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
