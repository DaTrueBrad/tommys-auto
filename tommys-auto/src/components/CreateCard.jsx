import React from 'react'
import data from './db'

function CreateCard() {
  const cards = data.map((car, index) => {
    return (
      <div class='car-card'>
        <img src={car.image} alt="" />
        <h1>{car.year} {car.make} {car.model}</h1>
        <div className="details">
          <h2>Miles: {car.miles}</h2>
          <h2>Price: ${car.price}</h2>
        </div>
        
        <button>Contact us</button>
        <h2></h2>
      </div>
    )
    
  })
  return cards
}
    

export default CreateCard
