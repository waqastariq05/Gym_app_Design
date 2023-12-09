import React, { useState } from 'react'
import '../ScheduleSection/ScheduleSection.css'

const ScheduleSection = () => {
    const [cate, setCate] = useState(1)

    const navtabs = [
        {
            title: "monday",
            id: 1
        },
        {
            title: "tuesday",
            id: 2
        },
        {
            title: "wednesday",
            id: 3
        },
        {
            title: "thursday",
            id: 4
        },
        {
            title: "friday",
            id: 5
        },
    ]

    const scheuleData = [
        {
            time: "6am - 8am",
            title: "stretching",
            trainer: "alica brown",
            cate: 1
        },
        {
            time: "8pm - 10pm",
            title: "body building",
            trainer: "anni hender",
            cate: 3
        },
        {
            time: "5am - 6am",
            title: "yoga",
            trainer: "bruce grapler",
            cate: 4
        },
        {
            time: "5pm - 6pm",
            title: "weight lifting",
            trainer: "anni hender",
            cate: 2
        },
        {
            time: "9pm - 10:30pm",
            title: "boxio",
            trainer: "aron mighty",
            cate: 5
        },
    ]

    return (
        <div className='scheduleSection pad-50' id='schedule'>
            <div className="container">
                <div className="top">
                    <div className="bars">
                        <i className="left-bar"></i>
                        OUR Schedules
                        <i className="right-bar"></i>
                    </div>
                    <h2>FITNESS <span>SCHEDULES</span></h2>
                </div>
                <div className="body">
                    <ul className="nav nav-tabs justify-content-center">
                        {navtabs.map((nav, i) => {
                            return (
                                <li className="nav-item" role="presentation" key={i}>
                                    {document.body.clientWidth < 490 ? (
                                        <a
                                            className={`nav-link ${cate === nav.id ? "active" : ""}`} href={`#${nav.id}`} onClick={() => setCate(nav.id)}>{nav.title}</a>
                                    ) : (
                                        <button
                                            className={`nav-link ${cate === nav.id ? "active" : ""}`} type='button' onClick={() => setCate(nav.id)}>{nav.title}</button>
                                    )}
                                </li>
                            )
                        })}
                    </ul>

                    <div className="schedule">
                        {scheuleData.map((data, i) => {
                            return (
                                <div className={`box shadow ${cate === data.cate ? "active" : ""}`} key={i} id={data.cate}>
                                    <div className="time">
                                        {data.time}
                                    </div>
                                    <div className="text">
                                        <h2>{data.title}</h2>
                                        <p>by {data.trainer}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScheduleSection
