import React from 'react'
import '../AboutSection/AboutSection.css'
import about from '../../assets/about.png'
import Counter from '../Counter/Counter'

const AboutSection = () => {
    return (
        <div className='aboutSection pad-50'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 about-img">
                        <img src={about} alt="about" className='img-fluid' />
                    </div>
                    <div className="col-md-6 about-text">
                        <h6>INFORMATION ABOUT US</h6>
                        <h2>FITZONE A <span>CROSSFIT</span> WORKOUT TRAINING CENTER</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                            blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                            ocean.</p>
                        <ul>
                            <li><a href=""><i class="fa-solid fa-arrow-right"></i> MEN FITNESS AND WORKOUT</a></li>
                            <li><a href=""><i class="fa-solid fa-arrow-right"></i> WOMEN FITNESS AND WORKOUT</a></li>
                            <li><a href=""><i class="fa-solid fa-arrow-right"></i> PERSONAL TRAININGS</a></li>
                        </ul>
                    </div>
                </div>
                <Counter />
            </div>
        </div>
    )
}

export default AboutSection
