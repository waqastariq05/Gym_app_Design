import React from 'react'
import '../TrainerSection/TrainerSection.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import t1 from '../../assets/trainer/1.png'
import t2 from '../../assets/trainer/2.png'
import t3 from '../../assets/trainer/3.png'
import t4 from '../../assets/trainer/4.png'

const TrainerSection = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 768, min: 575 },
            items: 2
        },
        smallMobile: {
            breakpoint: { max: 575, min: 0 },
            items: 1
        }
    };

    return (
        <div className='trainerSection pad-50' id='team'>
            <div className="top">
                <div className="bars">
                    <i className="left-bar"></i>
                    OUR Trainer
                    <i className="right-bar"></i>
                </div>
                <h2>FITNESS <span>TRAINERS</span></h2>
            </div>
            <div className="trainer">
                <Carousel
                    swipeable={true}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    transitionDuration={500}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    <div className="box">
                        <img src={t1} alt="t1" className='img-fluid' />
                        <div className="text">
                            <h2>Aron<br />Mighty</h2>
                        </div>
                    </div>
                    <div className="box">
                        <img src={t2} alt="t2" className='img-fluid' />
                        <div className="text">
                            <h2>Alica<br />Brown</h2>
                        </div>
                    </div>
                    <div className="box">
                        <img src={t3} alt="t3" className='img-fluid' />
                        <div className="text">
                            <h2>Anni<br />Hender</h2>
                        </div>
                    </div>
                    <div className="box">
                        <img src={t4} alt="t4" className='img-fluid' />
                        <div className="text">
                            <h2>Bruce<br />Grapler</h2>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default TrainerSection
