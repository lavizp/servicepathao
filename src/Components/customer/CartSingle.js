import React from 'react'

export default function CartSingle({name, image, stars, price, onIsAccepted}) {
  
  return (
    <>
    <div className="col-7 col-md-3 col-lg-2 m-3 p-1 bg-secondary">


<p className="h5 text-center text-white m-0 p-2">{name}</p>


<div className="ratio ratio-1x1"><img src={image} alt="" className="m-0 pb-3"/></div>


<div className="row">


    <div className="col-13 col-lg-6 align-self-end justify-content-around d-flex my-2" id="ratings">
      <small><i className="bi bi-star-fill text-warning"></i></small>
      <h5 className='text-white'>-{stars}</h5>
    </div>

    <div className="col justify-content-center p-(-2)">
        <p className="h6 text-white text-center p-0 m-0" id="price">{price}</p>
        <a className="btn btn-success m-auto w-100 h-auto" href="">Accept</a>
    </div>
</div>
</div>
    </>
  )
}
