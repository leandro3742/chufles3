import React, { useEffect, useState } from 'react';
import phone from '../img/phone_grande.svg';

const Footer = () => {
    const [tamanoIcon, setTamanioIcon] = useState("");
    useEffect(() => {
        if(window.screen.width < 780){
            setTamanioIcon('75px');
        }
        else{
            setTamanioIcon('150px');
        };
    }, []);
    const styleText = {
        fontSize: '25px',
        fontFamily: 'Changa, sans-serif'
    }
    return(
        <div className="row" style={{ backgroundColor: "rgb(130, 130, 255"}}>
            <div className="col-6">
                <div className="d-flex justify-content-center align-items-center">
                    <img src={phone} style={{width: tamanoIcon}} />
                    <div className="d-flex flex-column ml-5">
                        <span style={styleText}>Telefono: 098361013</span>
                        <span style={styleText}>cel: 098361013</span>
                    </div>
                </div>

            </div>
            <div className="col-1">
                <div style={{width: '1px', height: '75%', marginTop: '15%', backgroundColor: 'white'}}></div>
            </div>
            {/* <div className="d-flex justify-content-center align-items-center">
                <img src={phone} style={{ width: '150px'}} />
                <div className="d-flex flex-column ml-5">
                    <span style={styleText}>Telefono: 098361013</span>
                    <span style={styleText}>cel: 098361013</span>
                </div>
            </div> */}
        </div>
    )
}
export default Footer;