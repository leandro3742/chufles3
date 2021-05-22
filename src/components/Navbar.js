import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../img/logo_chufles3.svg';
import './styles/Navbar.css';

function Navbar() {
    const [margenIzq, setMargenIzq] = useState("");
    useEffect(() => {
        if(window.screen.width < 780){
            setMargenIzq('0px');
        }
        else{
            setMargenIzq('650px');
        }
    }, []);

    const styleNavbar = {
        margin: "0",
        // background: "linear-gradient(to bottom, #2471A3,#69B8EB)",
        minHeight: '100px',
        fontSize: "21px",
        borderRadius: '0 0 5px 5px'
    };
    const style = {
        marginTop: '15px',
        paddingBottom: "15px",
        marginLeft: margenIzq,
    };
    
    return (
        <nav style={styleNavbar} className="bg-dark shadow-lg p-3 mb-5 navbar navbar-expand-lg navbar-light fixed-top">
            <div className="row">
                <Link className="col-9 py-3" to="/"><img style={{ width:'200px'}} src={logo} /></Link>
                <div className="d-flex align-items-center">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
            <div style={style} className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link text-light" to="/">Inicio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-light" to="/Quienes_somos">¿Quienes somos?</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-light" to="/Contacto">Contacto</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-light" to="/Examen">Examen</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;