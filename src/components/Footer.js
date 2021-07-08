import React, { useEffect, useState } from 'react';
// import phone from '../img/phone_grande.svg';
import phone from '../img/phone.svg';
import maps from '../img/maps.svg';

const Footer = () => {
    const [tamanioLetra, setTamanioLetra] = useState("");
    const [tamanoIcon, setTamanioIcon] = useState("");
    const [ancho, setAncho] = useState("");
    const [alto, setAlto] = useState("");
    const [margenTop, setMargenTop] = useState("");
    const [margenLeft, setMargenLeft] = useState("");

    useEffect(() => {
        if(window.screen.width < 780){
            setTamanioIcon('75px');
            setTamanioLetra("18px");
            setAlto("1px");
            setAncho("75%");
            setMargenTop("10px");
            setMargenLeft("15%");
        }
        else{
            setTamanioIcon('150px');
            setTamanioLetra("25px");
            setAlto("75%");
            setAncho("1px");
            setMargenTop("15%");
        };
    }, []);

    const styleText = {
        fontSize: tamanioLetra,
        fontFamily: 'Changa, sans-serif',
        color: "black"
    }
    return(
        <div>
            <div className="row m-0 p-0 shadow mt-5 pt-5 pb-1 bg-dark rounded" >
                <div className="col-12 col-lg-5">
                    <div className="d-flex align-items-center">
                        <img src={phone} style={{height: tamanoIcon}} />
                        <div className="d-flex flex-column ml-3">
                            <span style={styleText}>Telefono: 4332 0505</span>
                            <span style={styleText}>Cel: 099402315</span>
                        </div>
                    </div>

                </div>
                <div className="col-11 col-lg-1 m-3">
                    <div style={{width: ancho, height: alto, marginTop: margenTop, marginLeft: margenLeft ,backgroundColor: 'white'}}></div>
                </div>
                <div className="col-12 col-lg-5">
                    <div className="d-flex justify-content-center ml-3 align-items-center">
                        <img src={maps} style={{height: tamanoIcon}} />
                        <div className="d-flex flex-column ml-3 text-center">
                            <span style={styleText} >José Batlle y Ordóñez, Canelones,</span>
                            <span style={styleText} >Departamento de Canelones</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Footer;