import React from 'react'
import './Profile.css'
import avat from './Images/avat.png'
export default function Profile() {
    let cretorName='Creation of'
    let name ='Jules Wyvern'
  return (
    <div class="creator">
            <div class="photo">
                <img src={avat} alt=""/>
            </div>
            <h6>{cretorName} <span>{name}</span> </h6>
        </div> 
  )
}
