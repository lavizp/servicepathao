import React from 'react'
import CartSingle from './CartSingle'

export default function CartList({title,data}) {
    const abc = data.map((item) => <CartSingle name={item.name} price={item.price} stars={item.stars}/>)
  return (
    <div className="p-2">

    <div className="container-fluid bg-light rounded" id="availbleproviders">

    <div className="row border-bottom" id="boxtitle">
        <h1>{title}:</h1>
    </div>
        <div className="row justify-content-left" id="providerslist">

        {abc}

        </div>
    </div>
</div>
  )
}
