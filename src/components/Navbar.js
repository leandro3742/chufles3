import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
// import logo from '../img/logo_chufles3.svg';
// import logo from '../img/logoChufles.svg';
import logo from '../img/logoGrande.png';

import './styles/Navbar.css';

function Navbar() {
    const [padding, setPadding] = useState("");
    const [alinear, setAlinear] = useState("");

    useEffect(() => {
        if(window.screen.width < 780){
            setPadding("p-1");
            setAlinear("justify-content-center");
        }
        else{
            setPadding("p-3");
            setAlinear("justify-content-start");
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
    };

    return (
        <nav style={styleNavbar} className={"bg-dark shadow-lg mb-5 navbar navbar-expand-lg navbar-light fixed-top" + padding}>
            <Link className={"col-lg-8 col-12 my-3 d-flex "+ alinear} to="/"><img className="my-2" style={{width: '250px'}} src={logo} /></Link>
            <button style={{margin: "auto"}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div style={style} className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/">Inicio</NavLink>
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