import React from 'react'
import Navbar from './Navbar'
import '../Styles/SubmitPage.css'
import { useParams } from "react-router-dom";
import serviceData from '../data/homepage.json'



export default function SubmitPage() {
    const { id } = useParams();
  return (
    <div>
        <Navbar/>
        <div className="contents">
            <div className="title">
                <h1>{serviceData[id-1].maintitle}</h1>{""}
            </div>
            <div className="inputs">
                <label htmlFr="date">Date:</label>
                <div className="date">
                    <input type="date" name="date" id="date"/>
                </div>
                <div className="location">
                    <input type="text" name="location" id="location" placeholder="Location:"/>
                </div>
                <div className="description">
                    <textarea id="description" name="description" rows="4" cols="50"
                        placeholder="Description:"></textarea>
                </div>
                <div className="check">
                    <label htmlFr="emergency">Emergency</label> <input type="checkbox" name="emergency" id="emergency"/>
                </div>
                <div className="sub">

                    <button type="submit">Submit</button>
                </div>
            </div>

        </div>

    </div>
  )
}
