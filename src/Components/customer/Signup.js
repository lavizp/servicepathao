import React,{useState} from 'react'
import '../Styles/SignupPage.css'
import {useNavigate,Link} from 'react-router-dom'


export default function Signup() {
    const [textUI, setTextUI] = useState('Please Sign Up');
    
    let navigate = useNavigate();

    const OnLoginButton = () =>{
        navigate('/login');
    }
    const OnSignUpButton = () =>{
        setTextUI('Signed In, Please Login');

    }


  return (
    <div className="container">
        <div className="text">
            <div className="heading">
                <h1>Service Pathao</h1>
            </div>
            <div className="details">
                <h4>Join Service Pathao</h4>
                {textUI}
            </div>
        </div>
        <div className="form">
            <div className="formbox">

            
                    <div className="info">

                        <div className="LoginText">
                            Sign up
                        </div>
                        <div className="inputinfo">

                            <div className="input">
                                <input type="text" className="phno" placeholder="First Name:" id="firstName" />
                            </div>
                            <div className="input">
                                <input type="text" className="pass" placeholder="Last Name:" id="lastName" />
                            </div>
                            <div className="input">
                                <input type="tel" placeholder="Phone Number:" id="phone" />
                            </div>
                            <div className="input">
                                <input type="text" placeholder="Address:" id="address" />
                            </div>
                            <label htmlFor="dob" className="dobLabel">Date of Birth</label>
                            <div className="input">
                                
                                <input type="date" aria-placeholder="DOB:" id="dob" max="2005-01-01" />
                            </div>
                            <div className="input">
                                <input type="password" placeholder="Password:" id="password" />
                            </div>
                        </div>
                    </div>
                        <div className="logbtn">
                            <div className="sign">
                               <button className="signbtn" onClick={OnSignUpButton}>Sign Up</button> </div>
                                <p>OR</p>
                                <div className="log">
                                        <button className="loginbtn" onClick={OnLoginButton}>Log In</button>
                                </div>
                            </div>
                    </div>
           
            
            <div className="serviceProv">
                <Link to='./service/login'>Join as service Providers</Link>
            </div>
        </div>

    </div>
  )
}
