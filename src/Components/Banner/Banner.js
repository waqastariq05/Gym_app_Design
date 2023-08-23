import React from 'react'
import '../Banner/Banner.css'
import img from '../../assets/slider/1.jpg'

const Banner = () => {
    return (
        <>
            <div class="banner">
                <div class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="3000">
                            <div className="slider-img img1"></div>
                            <div class="carousel-caption">
                                <h2>shape your perfect body</h2>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                <button class="btn">Take a Tour Now <i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="3000">
                            <div className="slider-img img2"></div>
                            <div class="carousel-caption">
                                <h2>YOU ONLY FAIL, WHEN YOU STOP TRYING</h2>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                <button class="btn">Take a Tour Now <i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="3000">
                            <div className="slider-img img3"></div>
                            <div class="carousel-caption">
                                <h2>YOU ONLY FAIL, WHEN YOU STOP TRYING</h2>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                <button class="btn">Take a Tour Now <i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
