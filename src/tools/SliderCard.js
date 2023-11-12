import React from 'react'

function SliderCard({ img, discount, text, title }) {
    return (
        <div className='sliderCard'>
            <img src={img} alt="image" />
            <div className="sliderCardBox">
                <h2>{discount}</h2>
                <h2>{text}</h2>
                <h2>{title}</h2>
            </div>
            <button>shop now</button>
        </div>
    )
}

export default SliderCard