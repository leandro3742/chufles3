import React, { useState, useEffect } from 'react';

import phone from "../img/phone.svg";
import email from "../img/Icon material-email.svg";

export default function Contactanos() {
  const [tamanoTitulo, setTamanoTitulo] = useState('');
  const [tamanoTexto, setTamanoTexto] = useState('');
  const [tamanoSubTexto, setTamanoSubTexto] = useState('');
  const [tamanioImg, setTamanioImg] = useState("");
  const [margen, setMargen] = useState("");
  const [margenLeft, setMargenLeft] = useState("");

  useEffect(() => {
    if(window.screen.width < 780){
      setTamanoTitulo("42px");
      setTamanoTexto("24px");
      setTamanoSubTexto("18px");
      setTamanioImg("25px");
      setMargen("auto");
      setMargenLeft("");
    }
    else{
      setTamanoTitulo("75px");
      setTamanoTexto("29px");
      setTamanoSubTexto("21px");
      setTamanioImg("50px");
      setMargen("");
      setMargenLeft("ml-4");
    }
  }, []);

  const styleTittle = {
    fontSize: tamanoTitulo,
    fontFamily: 'Acme, sans-serif'
  };

  const styleText = {
    fontSize: tamanoTexto,
    textAlign:'center',
    fontFamily: 'Changa, sans-serif',

  };

  const styleSubText=
  {
    fontFamily: 'Changa, sans-serif',
    fontSize: tamanoSubTexto
  }

  return (
    <div>
        <div style={{ backgroundColor: "#FCAAAA"}} className="py-3 m-0">
            <span style={styleTittle}>Contacto</span>
        </div>
        <div className="row mt-3 m-0">
            <div style={{ backgroundColor: "#C2C2C2"}} className={"shadow rounded col-12 mb-3 col-lg-5 m-0 d-flex justify-content-center "+ margenLeft}>
                <form className="col-12 d-flex flex-column align-items-center">
                    <span style={styleText} className="my-2">Completa con tus datos</span>
                    <input className="form-control-lg form-control text-center" type="text" placeholder="Nombre y apellido" />
                    <input className="form-control-lg form-control text-center my-2" type="text" placeholder="Teléfono" />
                    <input className="form-control-lg form-control text-center" type="text" placeholder="Email" />
                    <textarea className="form-control mt-2" rows="4" placeholder="Ingresa tu pregunta"></textarea>
                    <button type="submit" className="mt-3 btn btn-primary mb-2" >Enviar mensaje</button>
                </form>
            </div>
            <div style={{ backgroundColor: "#FCAAAA"}} className={"shadow rounded col-12 col-lg-6 d-flex flex-column align-items-center "+ margenLeft}>
                <span style={styleText} className="my-2">Informacion de contacto</span>
                <div className="d-flex flex-column justify-content-center align-items-start">
                    <div className="d-flex justify-content-center align-items-center">
                        <img src={phone} style={{width: tamanioImg}} />
                        <span style={styleSubText}>098361013</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center my-2">
                        <img src={email} style={{width: tamanioImg}} className="mr-2 "/>
                        <span style={styleSubText}>leandro.marrero@outlook.com</span>
                    </div>
                    <div style={{margin: margen}}>
                        <a href="#"><button className="mt-3 btn btn-lg btn-success mb-2" >Ir directo a WhatsApp</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}