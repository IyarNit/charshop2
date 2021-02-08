import React from 'react';
import { Link } from "react-router-dom"
const Navbar = (props) => {
    ////////Hooks////////////


    ////////Functions////////////


    /////////Jsx///////////
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <h5 className="navbar-brand">FUTURE LOGO?</h5>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Main</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" to="/About">About Us</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" to="/Privacy">Privacy Policy</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <Link className="nav-link" to={{ pathname: '/LogReg', state: { val: true } }}><button className="btn btn-outline-success" type="button">Login</button></Link>

                        <Link className="nav-link" to={{ pathname: '/LogReg', state: { val: false } }}><button className="btn btn-outline-success" type="button">Register</button></Link>
                    </form>
                </div>
            </div>
        </nav >
    )
}
export default Navbar 