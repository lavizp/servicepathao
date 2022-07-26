import LoginPage from "./Components/customer/LoginPage";
import Signup from "./Components/customer/Signup";
import HomePage from "./Components/customer/HomePage";
import SubmitPage from "./Components/customer/SubmitPage";
import ServiceLogin from "./Components/serviceprovider/ServiceLogin";
import ServiceSinup from "./Components/serviceprovider/ServiceSinup";
import CartPage from "./Components/customer/CartPage";
import ProfilePage from "./Components/customer/ProfilePage";
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {

  
  return (
    <div>
      <Routes>
        <Route path ="/" element={<LoginPage/>}/>
        <Route path ="/signup" element={<Signup/>}/>
        <Route path ="/home" element={<HomePage/>}/>
        <Route path ="/sumbit/:id" element={<SubmitPage/>}/>
        <Route path ="/service" >
        <Route path ="login" element={<ServiceLogin/>}/>
        <Route path ="signup" element={<ServiceSinup/>}/>
        </Route>
        <Route path ="/cart" element={<CartPage/>}/>
        <Route path ="/cart" element={<CartPage/>}/>
        <Route path ="/profile/:name" element={<ProfilePage/>}/>




      </Routes>
      
    </div>
  );
}

export default App;
