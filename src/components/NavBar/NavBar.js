import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./NavBar.css"

function NavBar() {
    return ( <nav className="navbar">
    <div className="container-fluid">
        <NavLink className="navbar-brand fc(000) fs(36) tdec" to="/">Navbar</NavLink>                  
        <div className="navbar-items" >
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/dashboard/all">All</NavLink>
                    
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/dashboard/pool">Pool</NavLink>
                    
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/dashboard/shortlisted">Shortlisted</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/dashboard/rejected">Rejected</NavLink>
                </li>
              
            </ul>
        </div>
    </div>
</nav> );
}


export default NavBar;