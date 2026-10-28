import React from 'react'
import './oneCard.css'

const OneCard = () => {
    let cardData = {
        title : "Lion",
        desc : "The lion (Panthera leo) is a large, muscular apex predator of the cat family (Felidae) currently found in Sub-Saharan Africa and a small, isolated population in India's Gir National Park",
        image : "https://a-z-animals.com/media/2026/08/shutterstock-1014638701-huge-licensed-scaled-1024x694.jpg"
    }

    let {title , desc , image} = cardData

  return (
    <div>
      <article className="one-card">
        <img src={image} alt="No Image" />
        <div className="title">{title}</div>
        <p>{desc}</p>
      </article>
    </div>
  )
}

export default OneCard
