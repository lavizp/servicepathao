import React,{useState} from 'react'
import '../Styles/LoginPage.css'
import {useNavigate, Link} from 'react-router-dom'

export default function LoginPage() {
  let usernameFromAPI = '9840030487';
    let passwordFromAPI = 'Service';
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setLogin] = useState(false);
    const [textUI, setTextUI] = useState('Please Enter Your Credentials');

    

    const UsernameChangeHandler = (eventObject) =>{
        setUsername(eventObject.target.value)
    }

    const PasswordChangeHandler = (eventObject) =>{
        setPassword(eventObject.target.value)
    }
    let navigate = useNavigate();
    const OnSubmit = () =>{
        if(username == usernameFromAPI && password == passwordFromAPI)
        {
            setLogin(true)
            setTextUI('LoggedIn')
            navigate('/home');
            return
        }

        setLogin(false)

        setTextUI('Wrong Credentials,Please Try Again')
        
    }

    const OnSignUpPage = () =>{
        navigate('/signup');

    }

  return (
    <div className="container">
        <div className="text">
            <div className="heading">
                <h1>Service Pathao</h1>
            </div>
            <div className="details">
                <h4>Your service provider</h4>
            </div>
        </div>
        <div className="form">
            <div className="formbox">

                <div className="formbox">
                    <div className="info">

                        <div className="LoginText">
                            Login
                        </div>
                        <div className="inputinfo">

                            <div className="input">
                                <input type="tel" className="phno" placeholder="Phone Number:" onChange={(e)=> UsernameChangeHandler(e)}/>
                            </div>
                            <div className="input">
                                <input type="password" className="pass" placeholder="Password:"onChange={(e)=> PasswordChangeHandler(e)}/>
                            </div>
                            {textUI}
                        </div>
                    </div>
                        <div className="logbtn">
                            <div className="log">
                                <button className="loginbtn" onClick={OnSubmit}>Log In</button>
                            </div>
                                <p>OR</p>
                            <div className="sign">
                            <button className="signbtn" onClick={OnSignUpPage}>Sign Up</button>  
                            </div>
                        </div>
                    </div>
            </div>
            
            <div className="serviceProv">
            <Link to ="/service/login">Join As Service Providers</Link>

            </div>
        </div>

    </div>

  )
}
    {/* <div>
<input type= 'text' onChange={(e)=> UsernameChangeHandler(e)}/>
<input type= 'text' onChange={(e)=> PasswordChangeHandler(e)}/>
<button onClick={OnSubmit}>Submit</button>
{isLoggedIn? <p>LoggedIn</p> : <p>{textUI}</p>}

</div> */}


