import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp'
import { Link } from 'react-router-dom' 
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Pharmacies from './components/Pharmacies';
import Loc from './components/Loc';
import Admin from './components/Admin';
import Pharmacie from './components/Pharmacie';
import City from './components/City';
import Zone from './components/Zone';
import User from './components/User';
function App() {
  return (
    <BrowserRouter>
    <div>
      
      <NavBar/>
      
   
        
            <div>
      

        <Routes>
        <Route exact path="/" element={<Pharmacies/>}/>
        <Route path="/admin" element={<Admin/>} />
        <Route path="/loc" element={<Loc/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/pharmacie" element={<Pharmacie/>} />
        <Route path="/user" element={<User/>} />
        <Route path="/zone" element={<Zone/>} />
        <Route path="/city" element={<City/>} />


        

        </Routes>
      </div>
            
     
    </div>
    </BrowserRouter>  
  );
}

export default App;
