import { useState } from 'react'

function Card(card) {

  return (
    <div className="Card">
      <p><b>{card.title}</b></p>
      <p>{card.text}</p>
    </div>
  )
}

export default Card