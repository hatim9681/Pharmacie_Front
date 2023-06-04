import React from "react";
import { NavLink } from "react-router-dom";
import Pharmacie from "./Pharmacie";
import City from "./City";
import Zone from "./Zone"
import User from "./User"
import { Link } from 'react-router-dom' 

function App() {
    return (
        <>
            <header className="navbar-expand">
                <nav className="navbar-light" style={{ backgroundColor: "#A3BD9C" }}>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item fw-bold">
                            <Link to="/pharmacie" className="nav-link">Pharmacie
                                    </Link> 
                            </li>
                            <li className="nav-item  fw-bold">
                            <Link to="/city" className="nav-link">City
                                    </Link> 
                            </li>
                            <li className="nav-item fw-bold">
                            <Link to="/zone" className="nav-link">Zone
                                    </Link> 
                            </li>
                            <li className="nav-item fw-bold">
                            <Link to="/user" className="nav-link">User
                                    </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
           
        </>

    );
}



export default App;