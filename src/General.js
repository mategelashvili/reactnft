import React from 'react'
import './General.css'
import Image from './Image'
import Discription from './Discription'
import Price from './Price'
import Line from './Line'
import Profile from './Profile'
export default function Gerneral() {
  return (
    <div className='general'>
        <Image />
        <Discription />
        <Price />
        <Line />
        <Profile />
    </div>
  )
}

