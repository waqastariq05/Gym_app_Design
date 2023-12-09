import React from 'react'
import '../ClassesSection/ClassesSection.css'

const ClassesSection = () => {
    return (
        <div className='classesSection pad-50' id='classes'>
            <div className="container-fluid">
                <div className="top">
                    <div className="bars">
                        <i className="left-bar"></i>
                        OUR CLASSES
                        <i className="right-bar"></i>
                    </div>
                    <h2>WHAT YOU GET FROM <span>FITZONE</span> MEMBERSHIP</h2>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="box img1">
                            <div className="box-body">
                                <p>$100</p>
                                <h2>
                                    <a href="">Cardio</a>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box img2">
                            <div className="box-body">
                                <p>$150</p>
                                <h2>
                                    <a href="">Body Building</a>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box img3">
                            <div className="box-body">
                                <p>$50</p>
                                <h2>
                                    <a href="">Yoga</a>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <a href="">View all classess <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div >
    )
}

export default ClassesSection
