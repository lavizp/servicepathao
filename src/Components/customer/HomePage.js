//Home Page Component

import React from 'react'
import '../Styles/HomePage.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import ServiceList from './ServicesList'
import serviceData from '../data/homepage.json'



export default function HomePage() {

  const catogeries = [
    {
      maintitle:"abc"
    },
    {
      maintitle:"def"
    }
  ]
  return (
    <>
    <Navbar/>
    <div className='flex'>

          <Sidebar/>
          <ServiceList title="Recently Viewed:" homepagedata={serviceData}/>
          <ServiceList title="Popular:" homepagedata={serviceData}/>

          

      </div>
    
    </>
  )
}


