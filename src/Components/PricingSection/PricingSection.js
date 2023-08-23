import React from 'react'
import '../PricingSection/PricingSection.css'

const PricingSection = () => {
    return (
        <div className='pricingSection pad-50'>
            <div class="container">
                <div class="top">
                    <div class="bars">
                        <i class="left-bar"></i>
                        OUR Pricing
                        <i class="right-bar"></i>
                    </div>
                    <h2>MEMBERSHIP <span>PLANS</span></h2>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div class="box shadow">
                            <h6>ONE DAY TRAINING</h6>
                            <div class="header">
                                <span>$</span>
                                <h2>6</h2>
                            </div>
                            <div class="box-body">
                                <ul>
                                    <li><i class="fa-solid fa-arrow-right"></i> Personal Trainer</li>
                                    <li><i class="fa-solid fa-arrow-right"></i> Convienient Time</li>
                                    <li><i class="fa-solid fa-arrow-right"></i> Special Class</li>
                                    <li><i class="fa-solid fa-arrow-right"></i> Group Traning</li>
                                    <li><i class="fa-solid fa-arrow-right"></i> Free Fitness Traning</li>
                                </ul>
                                <a href="" class="btn">get started</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="box shadow">
                            <h6>PAY EVERY MONTH</h6>
                            <div class="header">
                                <span>$</span>
                                <h2>46</h2>
                            </div>
                            <div class="box-body">
                                <ul>
                                    <li><i class="fa-solid fa-arrow-right"></i> Personal Trainer</li>
                                    <li><i class="fa-solid fa-arrow-right"></i> Convienient Time</li>
                                    <li><i class="fa-solid fa-arrow-right"></i> Special Class</li>
                                    <li><i class="fa-solid fa-arrow-right"></i> Group Traning</li>
                                    <li><i class="fa-solid fa-arrow-right"></i> Free Fitness Traning</li>
                                </ul>
                                <a href="" class="btn">get started</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="box shadow">
                            <h6>1 YEAR MEMBERSHIP</h6>
                            <div class="header">
                                <span>$</span>
                                <h2>110</h2>
                            </div>
                            <div class="box-body">
                                <ul>
                                    <li><i class="fa-solid fa-arrow-right"></i> Personal Trainer</li>
                                    <li><i class="fa-solid fa-arrow-right"></i> Convienient Time</li>
                                    <li><i class="fa-solid fa-arrow-right"></i> Special Class</li>
                                    <li><i class="fa-solid fa-arrow-right"></i> Group Traning</li>
                                    <li><i class="fa-solid fa-arrow-right"></i> Free Fitness Traning</li>
                                </ul>
                                <a href="" class="btn">get started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default PricingSection
