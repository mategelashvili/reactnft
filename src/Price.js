import React from 'react'
import eth from './Images/eth.svg'
import clock from './Images/clock.svg'
import './Price.css'
export default function Price() {
    let price='0.041 ETH'
    let time='3 days left'
  return (
    <div class="price">
            <div>
                <img src={eth} alt="" />
                <p>{price}</p>
            </div>
            <div>
                <img src={clock} alt="" />
                <p>{time}</p>
            </div> 
        </div>
  )
}
