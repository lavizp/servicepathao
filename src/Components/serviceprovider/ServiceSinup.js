import React,{useState} from 'react'
import '../Styles/ServiceSignup.css'
import {useNavigate} from 'react-router-dom'


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
          <div class="container">
        <div class="text">
            <div class="heading">
                <h1>Service Pathao</h1>
            </div>
            <div class="details">
                <h4>Join Service Pathao as Provider Today</h4>
            </div>
        </div>
        <div class="form">
            <div class="formbox">

            
                    <div class="info">

                        <div class="LoginText">
                            Sign up
                        </div>
                        <div class="inputinfo">

                            <div class="input">
                                <input type="text" class="phno" placeholder="First Name:" id="firstName"/>
                            </div>
                            <div class="input">
                                <input type="text" class="pass" placeholder="Last Name:" id="lastName"/>
                            </div>
                            <div class="input">
                                <input type="tel" placeholder="Phone Number:" id="phone" />
                            </div>
                            <div class="input">
                                <input type="text" placeholder="Address:" id="address"/>
                            </div>
                            <label for="dob" class="dobLabel">Date of Birth</label>
                            <div class="input">
                                
                                <input type="date" aria-placeholder="DOB:" id="dob" max="2005-01-01"/>
                            </div>
                            <div class="input">
                                <input type="password" placeholder="Password:" id="password"/>
                            </div>
                        </div>
                    </div>
                    {textUI}
                        <div class="logbtn">
                            <div class="sign">
                               <button class="signbtn" onClick={OnSignUpButton} >Sign Up</button> </div>
                                <p>OR</p>
                                <div class="log">
                                    <a href="D:\Coding\CSS projects\Service Pathao\For Service Provider\1)Login\index.html">

                                        <button class="loginbtn" onClick={OnLoginButton}>Log In</button>
                                    </a>
                                </div>
                            </div>
                    </div>
           
            
            <div class="serviceProv">
                <a href="D:\Coding\CSS projects\Service Pathao\For Customer\1)Login Page\index.html">Continue as User</a>
            </div>
        </div>

    </div>
    </div>

<section class="documents">
    <h1>Documents:</h1>
    <div class="box">


            <div class="box__input">
                <h3>Citizenship</h3>
                <input class="box__file" type="file" name="files[]" id="file" data-multiple-caption="{count} files selected" multiple />
                <label for="file"><strong>Choose a file</strong><span class="box__dragndrop"> or drag it here</span>.</label>
                <button class="box__button" type="submit">Upload</button>
            </div>
            <div class="box__uploading">Uploading…</div>
            <div class="box__success">Done!</div>
            <div class="box__error">Error! <span></span>.</div>
            <div class="box_input">
                <h3>Certification</h3>
                <input class="box__file" type="file" name="files[]" id="file" data-multiple-caption="{count} files selected" multiple />
                <label for="file"><strong>Choose a file</strong><span class="box__dragndrop"> or drag it here</span>.</label>
                <button class="box__button" type="submit">Upload</button>
            </div>
            <div class="box__uploading">Uploading…</div>
            <div class="box__success">Done!</div>
            <div class="box__error">Error! <span></span>.</div>
            <div class="box_input">
                <h3>Bank Details</h3>
                <input class="box__file" type="file" name="files[]" id="file" data-multiple-caption="{count} files selected" multiple />
                <label for="file"><strong>Choose a file</strong><span class="box__dragndrop"> or drag it here</span>.</label>
                <button class="box__button" type="submit">Upload</button>
            </div>
            <div class="box__uploading">Uploading…</div>
            <div class="box__success">Done!</div>
            <div class="box__error">Error! <span></span>.</div>
    </div>
    </section>
    </>

  )
}
