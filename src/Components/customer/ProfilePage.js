import React from 'react'
import { useParams } from "react-router-dom";
import userdata from '../data/users.json'

import '../Styles/Profile.css'
import Navbar from './Navbar'

export default function ProfilePage() {
    const {name} = useParams();
    const id = (userdata).findIndex(object => {
        return object.name == (name);
      });
  return (
    <>
    <Navbar/>
     <div className="containers">
            <div className="texta">
                Profile
            </div>

            <div className="prof">

                <div className="info">
                    <div className="infos"><h3 className="name">Name:</h3> <h4 className="attributes">{userdata[id].name}</h4></div>
                    <div className="infos"><h3 className="name">Contact: </h3><h4 className="attributes">{userdata[id].contact}</h4></div>
                    <div className="infos"><h3 className="name">Email: </h3><h4 className="attributes">{userdata[id].email}</h4></div>
                    <div className="infos"><h3 className="name">Location: </h3><h4 className="attributes">{userdata[id].location}</h4></div>
                    <div className="infos"> <h3 className="name">Date of birth:</h3><h4 className="attributes">{userdata[id].dob}</h4></div>
            </div>
            <div className="buttons">
                <div className="edit">
                    <button>Edit profile</button>
                </div>
                <div className="changepw"><button>Change Password</button></div>
            </div>
        </div>
        </div>
    </>
  )
}
