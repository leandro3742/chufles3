import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
// import logo from '../img/logo_chufles3.svg';
// import logo from '../img/logoChufles.svg';
import logo from '../img/logoGrande.png';
import './styles/Navbar.css';
// var a = "false";
// var b = "collapsed";
// var c = "";
function Navbar() {
    const [padding, setPadding] = useState("");
    const [alinear, setAlinear] = useState("");
    const [margenBottom, setMargenBottom] = useState("");
    useEffect(() => {
        if(window.screen.width < 780){
            setPadding("p-1");
            setAlinear("justify-content-center");
            setMargenBottom("5px");
        }
        else{
            setPadding("p-3");
            setAlinear("justify-content-start");
            setMargenBottom("15px");
        }
    }, []);

    const styleNavbar = {
        margin: "0",
        marginBottom: "0",
        // marginBottom: margenBottom,
        minHeight: '100px',
        fontSize: "21px",
        // borderRadius: '0 0 5px 5px'
    };
    const style = {
        marginTop: "15px",
        paddingBottom: "15px",
    };
    const [a, setA] = useState("false");
    const [b, setB] = useState("collapsed");
    const [c, setC] = useState("");
    const [d, setD] = useState(false);
    const cambiar = () => {
      console.log("funciona",a);
      if(d){
        setB("");
        setC("show");
        setA("false");

        setB("collapsed");
        setC("");
        setA("true");

      }
      else{
        setB("collapsed");
        setC("");
        setA("true");
        
        setB("");
        setC("show");
        setA("false");
  
      }
      setD(!d);
    }
    return (
        <nav style={styleNavbar} className={"bg-dark shadow-lg navbar navbar-expand-lg navbar-light fixed-top" + padding}>
            <Link className={"col-lg-6 col-12 my-3 d-flex "+ alinear} to="/"><img className="my-2" style={{width: '250px'}} src={logo} alt=""/></Link>
            <button style={{margin: "auto"}} className={"navbar-toggler "+ b} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={a} aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div style={style} className={"collapse navbar-collapse "+c} id="navbarNav">
                <ul className="navbar-nav">
                    <li style={{margin: "auto"}} className="nav-item" onClick={()=>cambiar()}>
                        <NavLink className="nav-link" exact to="/">Inicio</NavLink>
                      </li>
                    <li style={{margin: "auto"}} className="nav-item">
                    </li>
                    <li style={{margin: "auto"}} className="nav-item">
                        <NavLink className="nav-link" to="/Quienes_somos">¿Quiénes somos?</NavLink>
                    </li>
                    <li style={{margin: "auto"}} className="nav-item">
                        <NavLink className="nav-link" to="/Contactanos">Contáctanos</NavLink>
                    </li>
                    <li style={{margin: "auto"}} className="nav-item">
                        <NavLink className="nav-link" to="/Examen">Examen</NavLink>
                    </li>
                    <li style={{margin: "auto"}} className="nav-item">
                        <NavLink className="nav-link" to="/Material_teorico">Material Teórico</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;