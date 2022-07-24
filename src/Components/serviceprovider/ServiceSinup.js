import React,{useState} from 'react'
import '../Styles/ServiceSignup.css'
import {useNavigate, Link} from 'react-router-dom'


export default function ServiceSinup() {
    const [textUI, setTextUI] = useState('Please Sign Up');

    let navigate = useNavigate();

    const OnLoginButton = () =>{
        navigate('/service/login');
    }
    const OnSignUpButton = () =>{
        setTextUI('Signed In, Please Login');

    }
  return (
    <>
    <div>
          <div className="container">
        <div className="text">
            <div className="heading">
                <h1>Service Pathao</h1>
            </div>
            <div className="details">
                <h4>Join Service Pathao as Provider Today</h4>
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
                                <input type="text" className="phno" placeholder="First Name:" id="firstName"/>
                            </div>
                            <div className="input">
                                <input type="text" className="pass" placeholder="Last Name:" id="lastName"/>
                            </div>
                            <div className="input">
                                <input type="tel" placeholder="Phone Number:" id="phone" />
                            </div>
                            <div className="input">
                                <input type="text" placeholder="Address:" id="address"/>
                            </div>
                            <label for="dob" className="dobLabel">Date of Birth</label>
                            <div className="input">
                                
                                <input type="date" aria-placeholder="DOB:" id="dob" max="2005-01-01"/>
                            </div>
                            <div className="input">
                                <input type="password" placeholder="Password:" id="password"/>
                            </div>
                        </div>
                    </div>
                    {textUI}
                        <div className="logbtn">
                            <div className="sign">
                               <button className="signbtn" onClick={OnSignUpButton} >Sign Up</button> </div>
                                <p>OR</p>
                                <div className="log">
                                    <a href="D:\Coding\CSS projects\Service Pathao\For Service Provider\1)Login\index.html">

                                        <button className="loginbtn" onClick={OnLoginButton}>Log In</button>
                                    </a>
                                </div>
                            </div>
                    </div>
           
            
            <div className="serviceProv">
            <Link to ="/login">For Users</Link>

            </div>
        </div>

    </div>
    </div>

<section className="documents">
    <h1>Documents:</h1>
    <div className="box">


            <div className="box__input">
                <h3>Citizenship</h3>
                <input className="box__file" type="file" name="files[]" id="file" data-multiple-caption="{count} files selected" multiple />
                <label for="file"><strong>Choose a file</strong><span className="box__dragndrop"> or drag it here</span>.</label>
                <button className="box__button" type="submit">Upload</button>
            </div>
            <div className="box__uploading">Uploading…</div>
            <div className="box__success">Done!</div>
            <div className="box__error">Error! <span></span>.</div>
            <div className="box_input">
                <h3>Certification</h3>
                <input className="box__file" type="file" name="files[]" id="file" data-multiple-caption="{count} files selected" multiple />
                <label for="file"><strong>Choose a file</strong><span className="box__dragndrop"> or drag it here</span>.</label>
                <button className="box__button" type="submit">Upload</button>
            </div>
            <div className="box__uploading">Uploading…</div>
            <div className="box__success">Done!</div>
            <div className="box__error">Error! <span></span>.</div>
            <div className="box_input">
                <h3>Bank Details</h3>
                <input className="box__file" type="file" name="files[]" id="file" data-multiple-caption="{count} files selected" multiple />
                <label for="file"><strong>Choose a file</strong><span className="box__dragndrop"> or drag it here</span>.</label>
                <button className="box__button" type="submit">Upload</button>
            </div>
            <div className="box__uploading">Uploading…</div>
            <div className="box__success">Done!</div>
            <div className="box__error">Error! <span></span>.</div>
    </div>
    </section>
    </>

  )
}
