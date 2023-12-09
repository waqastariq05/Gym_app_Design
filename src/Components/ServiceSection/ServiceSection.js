import React from 'react'
import Card from '../Card/Card'
import s1 from '../../assets/icons/1.png'
import s2 from '../../assets/icons/2.png'
import s3 from '../../assets/icons/3.png'

const ServiceSection = () => {
    return (
        <div className='serviceSection pad-50'>
            <div className="container">
                <div className="top">
                    <small className="bars">
                        <i className="left-bar"></i>
                        Services
                        <i className="right-bar"></i>
                    </small>
                    <h2>KICK YOUR <span>FEET</span> UP</h2>
                </div>
                <div className="body">
                    <div className="row">
                        <div className="col-md-4">
                            <Card img={s2} title="TONS OF CARDIO & STRENGTH" text="A small river named Duden flows by their place and supplies it with the necessary regelialia.It is a paradisematic country" />
                        </div>
                        <div className="col-md-4">
                            <Card img={s1} title="FREE FITNESS TRAINING" text="A small river named Duden flows by their place and supplies it with the necessary regelialia.It is a paradisematic country" />
                        </div>
                        <div className="col-md-4">
                            <Card img={s3} title="ACHIEVE YOUR PERFECT BODY" text="A small river named Duden flows by their place and supplies it with the necessary regelialia.It is a paradisematic country" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection