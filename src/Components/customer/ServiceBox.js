import React from 'react'
import '../Styles/HomePage.css'
import { useNavigate } from "react-router-dom";
export default function ServiceBox({item}) {
  const navigate = useNavigate();
  return (
    <div className='single-service'>
        <img src={item.image} onClick={() => {
                navigate(`/sumbit/${item.id}`);
              }}>
        </img>
        <h1>{item.maintitle}</h1>

    </div>
  )
}
