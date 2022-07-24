import React,{useState} from 'react'
import CartList from './CartList';
import CartData from '../data/availableproviders.json'

export default function CartPage() {
    const[isAccepted, onIsAccepted] = useState(false);
    const isAcceptedButton = () =>{
        onIsAccepted(!isAccepted);
    }
    const abc = CartData.map((item)=><CartList title={item.maintitle} data ={item.carts}/>)
  return (
    <>
    <div className="row border-bottom p-2" id="boxtitle">
        <h1>Available Providers </h1>
    </div>
   
        {abc}

    </>
  )
}
