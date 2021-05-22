import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../img/logo_chufles3.svg';
import './styles/Navbar.css';

function Navbar() {
    const styleNavbar = {
        margin: "0",
        backgroundColor: "rgba(130, 130, 255, 1)",
        minHeight: '100px',
        fontSize: "21px"
    };
    const style = {
        marginTop: '15px',
        paddingBottom: "15px"
    };
    return (
        <nav style={styleNavbar} className="shadow p-3 mb-5 rounded navbar navbar-expand-lg navbar-light fixed-top">
            <Link className="col-8" to="/"><img style={{ width:'150px', height:'100px'}} src={logo} /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div style={style} className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Inicio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Quienes_somos">¿Quienes somos?</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Contacto">Contacto</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Examen">Examen</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;