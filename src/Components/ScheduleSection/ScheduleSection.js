import React from 'react'
import '../ScheduleSection/ScheduleSection.css'

const ScheduleSection = () => {
    return (
        <div className='scheduleSection pad-50'>
            <div class="container">
                <div class="top">
                    <div class="bars">
                        <i class="left-bar"></i>
                        OUR Schedules
                        <i class="right-bar"></i>
                    </div>
                    <h2>FITNESS <span>SCHEDULES</span></h2>
                </div>
                <div class="body">
                    <ul class="nav justify-content-center">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Sunday</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Monday</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Tuesday</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Wednesday</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Thursday</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Friday</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Saturday</a></li>
                    </ul>
                    <div class="schedule">
                        <div class="box active">
                            <div class="time">
                                6am - 8am
                            </div>
                            <div class="text">
                                <h2>Stretching</h2>
                                <p>by Jhos Kusam</p>
                            </div>
                        </div>
                        <div class="box">
                            <div class="time">
                                6am - 8am
                            </div>
                            <div class="text">
                                <h2>Body Building</h2>
                                <p>by Jhos Kusam</p>
                            </div>
                        </div>
                        <div class="box">
                            <div class="time">
                                6am - 8am
                            </div>
                            <div class="text">
                                <h2>Yoga</h2>
                                <p>by Jhos Kusam</p>
                            </div>
                        </div>
                        <div class="box">
                            <div class="time">
                                6am - 8am
                            </div>
                            <div class="text">
                                <h2>Weight Lifting</h2>
                                <p>by Jhos Kusam</p>
                            </div>
                        </div>
                        <div class="box">
                            <div class="time">
                                6am - 8am
                            </div>
                            <div class="text">
                                <h2>boxio</h2>
                                <p>by Jhos Kusam</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScheduleSection
