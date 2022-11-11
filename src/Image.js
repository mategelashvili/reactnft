import React from 'react'
import './Image.css'
import ecv from './Images/ecv.jpg'
import viwe from './Images/viwe.svg'
import clock from './Images/clock.svg'
import eth from './Images/eth.svg'
import avat from './Images/avat.png'

export default function Image() {
  return (
    <div class="card">
    <div class="main">
        <div class="img-div">
            <img src={ecv} alt=""/>
            <div class="hide">
                <img src={viwe} alt=""/>
            </div>
        </div>
        
        {/* <div class="price">
            <div>
                <img src={eth} alt="" />
                <p>0.041 ETH</p>
            </div>
            <div>
                <img src={clock} alt="" />
                <p>3 days left</p>
            </div> 
        </div>
        <div class="line"></div>
        <div class="creator">
            <div class="photo">
                <img src={avat} alt=""/>
            </div>
            <h6>Creation of <span>Jules Wyvern</span> </h6>
        </div> */}
    </div>
    

</div>
  )
}
