import React from 'react'
import '../../styles/card.css'

const Card = ({props}) => {
  return (
    <div>{props.name}</div>
  )
}

export default Card