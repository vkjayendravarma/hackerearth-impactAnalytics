import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css"

function NavBar() {
    return ( <nav className="navbar">
    <div className="container-fluid">
        <Link className="navbar-brand fc(000) fs(36) tdec" to="/">Navbar</Link>                  
        <div className="navbar-items" >
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/dashboard/all">All</Link>
                    
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/dashboard/pool">Pool</Link>
                    
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/dashboard/shortlisted">Shortlisted</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/dashboard/rejected">Rejected</Link>
                </li>
              
            </ul>
        </div>
    </div>
</nav> );
}


export default NavBar;