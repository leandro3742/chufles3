import React, { useState, useEffect } from 'react';

import phone from "../img/phone.svg";
import imgEmail from "../img/Icon material-email.svg";

export default function Contactanos() {
  const [tamanoTitulo, setTamanoTitulo] = useState('');
  const [tamanoTexto, setTamanoTexto] = useState('');
  const [tamanoSubTexto, setTamanoSubTexto] = useState('');
  const [tamanioImg, setTamanioImg] = useState("");
  const [margen, setMargen] = useState("");
  const [margenLeft, setMargenLeft] = useState("");

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [fondoNombre, setFondoNombre] = useState("");
  const [fondoTelefono, setFondoTelefono] = useState("");
  const [fondoMensaje, setFondoMensaje] = useState("");

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

  const cambiarNombre = (e) => {
    setNombre(e.target.value);
  }
  const cambiarTelefono = (e) => {
    setTelefono(e.target.value);
  }
  const cambiarEmail = (e) => {
    setEmail(e.target.value);
  }
  const cambiarMensaje = (e) => {
    setMensaje(e.target.value);
  }

  const enviar = () => {
    let todoOk = true;
    if(nombre === ''){
        setFondoNombre("bg-warning");
        todoOk = false;
    }
    if(telefono === ''){
        setFondoTelefono("bg-warning");
        todoOk = false;
    } 
    if(mensaje === ''){
        setFondoMensaje('bg-warning');
        todoOk = false;
    }
    if(todoOk){
        //envio
    }
    else{
        alert("Ups, nos faltan algunos datos para poder enviar su mensaje");
    }

  }

  return (
    <div>
        <div style={{ backgroundColor: "#FCAAAA"}} className="py-3 m-0">
            <span style={styleTittle}>Contacto</span>
        </div>
        <div className="row mt-3 m-0">
            <div style={{ backgroundColor: "#C2C2C2"}} className={"shadow rounded col-12 mb-3 col-lg-5 m-0 d-flex justify-content-center "+ margenLeft}>
                <form id="form" className="col-12 d-flex flex-column align-items-center">
                    <span style={styleText} className="my-2">Completa con tus datos</span>
                    <input className={"form-control-lg form-control text-center " + fondoNombre} type="text" placeholder="Nombre y apellido" value={nombre} onChange={cambiarNombre}/>
                    <input className={"form-control-lg form-control text-center my-2 "+ fondoTelefono} type="text" placeholder="Teléfono" value={telefono} onChange={cambiarTelefono}/>
                    <input className="form-control-lg form-control text-center " type="text" placeholder="Email" value={email} onChange={cambiarEmail}/>
                    <textarea className={"form-control mt-2 " + fondoMensaje} rows="4" placeholder="Ingresa tu pregunta" value={mensaje} onChange={cambiarMensaje} />
                    <button type="button" onClick={enviar} className="mt-3 btn btn-primary mb-2" >Enviar mensaje</button>
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
                        <img src={imgEmail} style={{width: tamanioImg}} className="mr-2 "/>
                        <span style={styleSubText}>leandro.marrero@outlook.com</span>
                    </div>
                    <div style={{margin: margen}}>
                        <a target="_blank"href="https://api.whatsapp.com/send?phone=59898361013"><button className="mt-3 btn btn-lg btn-success mb-2" >Ir directo a WhatsApp</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}