import LoginPage from "./Components/LoginPage";
import Signup from "./Components/Signup";
import HomePage from "./Components/HomePage";
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


      </Routes>
      
    </div>
  );
}

export default App;
