import React from 'react'
import '../TrainerSection/TrainerSection.css'
import t1 from '../../assets/trainer/1.png'
import t2 from '../../assets/trainer/2.png'
import t3 from '../../assets/trainer/3.png'
import t4 from '../../assets/trainer/4.png'

const TrainerSection = () => {
    return (
        <div className='trainerSection pad-50'>
            <div class="top">
                <div class="bars">
                    <i class="left-bar"></i>
                    OUR Trainer
                    <i class="right-bar"></i>
                </div>
                <h2>FITNESS <span>TRAINERS</span></h2>
            </div>
            <div class="trainer">
                <div class="box">
                    <img src={t1} alt="t1" className='img-fluid' />
                    <div class="text">
                        <h2>Aron<br />Mighty</h2>
                    </div>
                </div>
                <div class="box">
                    <img src={t2} alt="t2" className='img-fluid' />
                    <div class="text">
                        <h2>Alica<br />Brown</h2>
                    </div>
                </div>
                <div class="box">
                    <img src={t3} alt="t3" className='img-fluid' />
                    <div class="text">
                        <h2>Anni<br />Hender</h2>
                    </div>
                </div>
                <div class="box">
                    <img src={t4} alt="t4" className='img-fluid' />
                    <div class="text">
                        <h2>Bruce<br />Grapler</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrainerSection
