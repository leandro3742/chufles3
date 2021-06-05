import React, { useState, useEffect } from 'react';

import phone from "../img/phone.svg";
import imgEmail from "../img/Icon material-email.svg";

import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormGroup } from "react-bootstrap";
import { FormLabel } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { FormText } from "react-bootstrap";



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
  const [validated, setValidated] = useState(false);
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
  const handleSubmit = event => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}
    else{
      event.preventDefault(); // hace que no se recargue la pagina
      //Colocar el mail que voy a enviar
    }
		setValidated(true);
	};
  return (
    <div>
        <div style={{ backgroundColor: "#FCAAAA"}} className="py-3 m-0">
            <span style={styleTittle}>Contacto</span>
        </div>
        <div className="row mt-3 m-0">
            <div style={{ backgroundColor: "#C2C2C2"}} className={"shadow rounded col-12 mb-3 col-lg-5 m-0 d-flex justify-content-center "+ margenLeft}>
              <Form noValidate validated={validated} onSubmit={handleSubmit} className="col-12 d-flex flex-column align-items-center">
                <div className="row d-flex justify-content-center">
                  <span style={styleText} className="col-12 my-2">Completa con tus datos</span>
                  <Form.Group className="mb-3 col-12 col-lg-11 " controlId="nombre">
                    <Form.Control type="text" placeholder="Nombre y apellido" required />
                  </Form.Group>
                  <Form.Group className="col-12 col-lg-11  mb-3" controlId="email">
                    <Form.Control type="email" placeholder="Email" required />
                    <Form.Control.Feedback type="invalid">Ingrese un correo válido</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="col-12 col-lg-11  mb-3" controlId="numero">
                    <Form.Control type="number" placeholder="Numero" required />
                  </Form.Group>
                  <Form.Group className="col-12 col-lg-11  mb-3" controlId="mensaje">
                    <Form.Control as="textarea" placeholder=" Escríbanos sus dudas" rows={4} />
                  </Form.Group>
                  <div className="d-flex justify-content-center align-items-center mt-4">
                    <Button className="botonRegistrarme pl-4 pr-4 p-2" type="submit">
                      Registrarme
                    </Button>
                  </div>
                </div>
            </Form>
            </div>
            <div style={{ backgroundColor: "#FCAAAA"}} className={"shadow rounded col-12 col-lg-6 d-flex flex-column align-items-center "+ margenLeft}>
                <span style={styleText} className="my-2">Informacion de contacto</span>
                <div className="d-flex flex-column justify-content-center align-items-start">
                    <div className="d-flex justify-content-center align-items-center">
                        <img src={phone} style={{width: tamanioImg}} />
                        <span style={styleSubText}>099402315</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center my-2">
                        <img src={imgEmail} style={{width: tamanioImg}} className="mr-2 "/>
                        <span style={styleSubText}>chufles212@gmail.com</span>
                    </div>
                    <div style={{margin: margen}}>
                        <a target="_blank" href="https://api.whatsapp.com/send?phone=59899402315"><button className="mt-3 btn btn-lg btn-success mb-2" >Ir directo a WhatsApp</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}