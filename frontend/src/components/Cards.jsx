import React from 'react'
import Card_ from "./Card_";

function Cards({cards}) {
  return (
    <>
    {cards.map((card)=> (
        <Card_ key={card.id} card={card}/>
    ))}
    </>
  )
}

export default Cards