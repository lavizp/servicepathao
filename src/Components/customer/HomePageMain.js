import React from 'react'
import ServicesList from './ServicesList'


export default function HomePageMain({catogeries}) {
  const abc = catogeries.map((catogery) => <h1>{catogery}</h1> );
  return (
    <div>
        {abc}
        <ServicesList/>

    </div>
  )
}
