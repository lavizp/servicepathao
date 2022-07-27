import React from 'react'
import ServiceBox from './ServiceBox'
import '../Styles/HomePage.css'


export default function ServicesList({title,homepagedata}) {
  const abc = homepagedata.map((item, index) => <ServiceBox key = {index} item = {item}/>)

  return (
    <div className='servicelist-container'>
        <h1>{title}</h1>
      <div className='service-list'>
        {homepagedata.map((item, index) => <ServiceBox key = {index} item = {item}/>)}
    </div>
    </div>
    
  )
}
