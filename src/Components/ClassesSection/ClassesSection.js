import React from 'react'
import '../ClassesSection/ClassesSection.css'

const ClassesSection = () => {
    return (
        <div className='classesSection pad-50'>
            <div className="container-fluid">
                <div class="top">
                    <div class="bars">
                        <i class="left-bar"></i>
                        OUR CLASSES
                        <i class="right-bar"></i>
                    </div>
                    <h2>WHAT YOU GET FROM <span>FITZONE</span> MEMBERSHIP</h2>
                </div>
                <div class="row">
                    <div className="col-md-4">
                        <div class="box img1">
                            <div class="box-body">
                                <p>$100</p>
                                <h2>
                                    <a href="">Cardio</a>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="box img2">
                            <div class="box-body">
                                <p>$150</p>
                                <h2>
                                    <a href="">Body Building</a>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="box img3">
                            <div class="box-body">
                                <p>$50</p>
                                <h2>
                                    <a href="">Yoga</a>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <a href="">View all classess <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div >
    )
}

export default ClassesSection
