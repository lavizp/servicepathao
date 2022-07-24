import React from 'react'
import '../Styles/Navbar.css'
import {Link} from 'react-router-dom'


export default function Navbar() {

  return (
    <>
        <nav className="navbar navbar-expand-lg bg-orange position-sticky navbarhosolti">
        <div className="container-fluid">
            <a className="navbar-brand text-white" href="#">Service Pathao</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item ">
                        <Link to='/home' className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Profile</a>
                    </li>
                    <li className="nav-item">
                    <Link to='/cart' className="nav-link">Cart</Link>

                    </li>
                </ul>

                <form className="d-flex align-middle" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>

            </div>
        </div>
    </nav>
    </>
  )
}
