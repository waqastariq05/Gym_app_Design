import React from 'react'
import '../PricingSection/PricingSection.css'

const PricingSection = () => {
    return (
        <div className='pricingSection pad-50' id='memberShip'>
            <div className="container">
                <div className="top">
                    <div className="bars">
                        <i className="left-bar"></i>
                        OUR Pricing
                        <i className="right-bar"></i>
                    </div>
                    <h2>MEMBERSHIP <span>PLANS</span></h2>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="box shadow">
                            <h6>ONE DAY TRAINING</h6>
                            <div className="header">
                                <span>$</span>
                                <h2>6</h2>
                            </div>
                            <div className="box-body">
                                <ul>
                                    <li><i className="fa-solid fa-arrow-right"></i> Personal Trainer</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> Convienient Time</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> Special Class</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> Group Traning</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> Free Fitness Traning</li>
                                </ul>
                                <a href="" className="btn">get started</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box shadow">
                            <h6>PAY EVERY MONTH</h6>
                            <div className="header">
                                <span>$</span>
                                <h2>46</h2>
                            </div>
                            <div className="box-body">
                                <ul>
                                    <li><i className="fa-solid fa-arrow-right"></i> Personal Trainer</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> Convienient Time</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> Special Class</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> Group Traning</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> Free Fitness Traning</li>
                                </ul>
                                <a href="" className="btn">get started</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box shadow">
                            <h6>1 YEAR MEMBERSHIP</h6>
                            <div className="header">
                                <span>$</span>
                                <h2>110</h2>
                            </div>
                            <div className="box-body">
                                <ul>
                                    <li><i className="fa-solid fa-arrow-right"></i> Personal Trainer</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> Convienient Time</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> Special Class</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> Group Traning</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> Free Fitness Traning</li>
                                </ul>
                                <a href="" className="btn">get started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default PricingSection
