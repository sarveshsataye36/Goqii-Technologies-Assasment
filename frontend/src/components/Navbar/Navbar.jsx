import React from 'react'
import reactLogo from '../../assets/react.svg'
import { NavLink,Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={reactLogo} className="logo curd" alt="curd logo" />  CURD APP</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Add</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/list">List</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar