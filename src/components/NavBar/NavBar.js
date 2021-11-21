import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css"

class NavBar extends Component {
   
    render() {
        return (
            <nav className="navbar">
                <div className="container-fluid">
                    <Link className="navbar-brand fc(000) fs(36) tdec" to="/">Navbar</Link>                  
                    <div className="navbar-items" >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">All</Link>
                                
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Shortlisted</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Rejected</Link>
                            </li>
                          
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;