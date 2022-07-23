import React from 'react'
import '../Styles/HomePage.css'

export default function ServiceBox({item}) {
  return (
    <div className='single-service'>
        <img src={item.image}>
        </img>
        <h1>{item.maintitle}</h1>

    </div>
  )
}
