import React from 'react'
import '../../styles/card.css'

const Carousels = ({props}) => {
  return (<div className='card1'>
    <div className="card__image">
      <img src={props.img} alt="" />
    </div>
    <div className='card__title'>
      {props.name}
    </div>
    <div className="card__description">
      {props.description}
    </div>
    </div>
  )
}

export default Carousels