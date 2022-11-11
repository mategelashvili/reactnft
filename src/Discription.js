import React from 'react'
import './Discription.css'
export default function Text() {
  let name="Equilibrium #3429"
  let disc="Our Equilibrium collection promotes  balance and calm."
  return (
    <div>
         <h4 className='h4'>{name}</h4>
                <p className='p'>{disc}</p>
    </div>
  )
}
