import React from 'react'

export default function Card({color, title, description, img}) {
  return (
    <div className={`card card--${color}`}>
        <div className='card__text-container'>
          <h3 className='card__title'>{title}</h3>
          <p className='card__description'>{description}</p>
        </div>
        <div className="card__img-container">
            <img className='card__img' src={img} alt="" />
        </div>
    </div>
  )
}
