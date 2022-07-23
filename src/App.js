import LoginPage from "./Components/customer/LoginPage";
import Signup from "./Components/customer/Signup";
import HomePage from "./Components/customer/HomePage";
import SubmitPage from "./Components/customer/SubmitPage";
import ServiceLogin from "./Components/serviceprovider/ServiceLogin";
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {

  
  return (
    <div>
      <Routes>
        <Route path ="/login" element={<LoginPage/>}/>
        <Route path ="/signup" element={<Signup/>}/>
        <Route path ="/home" element={<HomePage/>}/>
        <Route path ="/sumbit/:id" element={<SubmitPage/>}/>
        <Route path ="/service" >
        <Route path ="login" element={<ServiceLogin/>}/>

        </Route>

      </Routes>
      
    </div>
  );
}

export default App;
