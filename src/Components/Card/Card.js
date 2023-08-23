import React from 'react'
import '../Card/Card.css'

const Card = (props) => {
    const { img, title, text } = props
    return (
        <>
            <div class="card">
                <div class="icon">
                    <span>
                        <img src={img} alt="serImg" className='img-fluid' />
                    </span>
                </div>
                <div class="card-body">
                    <h2 className='card-title'>{title}</h2>
                    <p className='card-text'>{text}</p>
                </div>
            </div>
        </>
    )
}

export default Card
