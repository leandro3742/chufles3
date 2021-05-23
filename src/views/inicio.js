import React, { useState, useEffect } from 'react';

import logo from '../img/grande(1).jpg';
import logo2 from '../img/grande(2).jpg';
import logo3 from '../img/grande(4).jpg';
import Carrousel from '../components/Carrousel';

function Inicio() {
  const [tamanoTitulo, setTamanoTitulo] = useState('');
  const [tamanoTexto, setTamanoTexto] = useState('');
  const [tamanoSubTexto, setTamanoSubTexto] = useState('');
  const [containerResponsive, setContainerResponsive] = useState("");
  const [tamanoImg, setTamanoImg] = useState("");
  const [marginBottom, setMarginBottom] = useState("");
  useEffect(() => {
    if(window.screen.width < 780){
      setTamanoTitulo("32px");
      setTamanoTexto("24px");
      setTamanoSubTexto("15px");
      setContainerResponsive("200px");
      setTamanoImg("100px");
      setMarginBottom("mb-2");
    }
    else{
      setTamanoTitulo("52px");
      setTamanoTexto("29px");
      setTamanoSubTexto("18px");
      setContainerResponsive("175px");
      setTamanoImg("150px");
      setMarginBottom("mb-5");
    }
  }, []);

// Styles //
  const covid = {
    backgroundColor: '#FCAAAA',
    padding: '25px',
    fontSize: '25px'
  }

  const styleTittle = {
    fontSize: tamanoTitulo,
    fontFamily: 'Acme, sans-serif'
  };

  const styleText = {
    fontSize: tamanoTexto,
    textAlign:'center',
    fontFamily: 'Changa, sans-serif'
  };

  const porQueElegirnos = {
    backgroundColor: '#FCAAAA',
    marginTop:'50px',
  };

  const styleSubText=
  {
    fontFamily: 'Changa, sans-serif',
    fontSize: tamanoSubTexto
  }
// Fin styles //

  return (
    <div>
      <div className="mb-5">
      <Carrousel />
      </div>
      
      <div className="d-flex justify-content-center">
        <div className="col-12 col-lg-10">

          <div style={covid} className={"d-flex justify-content-center shadow p-3 rounded text-center "+ marginBottom}>
            <span style={styleTittle}>Nuestras medidas de seguridad de covid-19</span>          
          </div>
          
          <div style={{backgroundColor: '#C2C2C2'}} className="shadow p-3 rounded">
            <div className="row">
              <div className="col-lg-4 col-12 d-flex justify-content-center align-items-center">
              <img src={logo} style={{height: tamanoImg}} className="rounded shadow-lg"/>
              </div>
              <div className="col-lg-5 col-12 text-center">
                <span style={styleText}>Las ventanillas deberán estar siempre abiertas, para un mejor circulación de aire</span>          
              </div>
            </div>
          </div>
          
          <div style={{backgroundColor: '#FCAAAA'}} className="shadow p-3 rounded my-2">
            <div className="row">
              <div className="col-lg-8 col-12 d-flex justify-content-center align-items-center">
                <span style={styleText}>Desinfección del vehículo antes y después de cada clase</span>          
              </div>
              <div className="col-lg-4 col-12 d-flex justify-content-center align-items-center">
                <img src={logo2} style={{height: tamanoImg}} className="rounded shadow-lg"/>
              </div>
            </div>
          </div>

          <div style={{backgroundColor: '#C2C2C2'}} className="shadow p-3 rounded">
            <div className="row">
              <div className="col-lg-4 col-12 d-flex justify-content-center align-items-center">
                <img src={logo3} style={{height: tamanoImg}} className="rounded shadow-lg"/>
              </div>
              <div className="col-lg-5 col-12 text-center">
                <span style={styleText}>Uso obligatorio del tapabocas para los alumnos y conductores</span>          
              </div>
            </div>
          </div>

        </div>

      </div>

      <div style={porQueElegirnos} className="shadow-lg col-12 text-center py-4">
        <div className="d-flex justify-content-center">
          <span style={styleTittle}>¿Por qué elegirnos?</span>
        </div>
        <div className="row">
          <div className="col-12 col-lg-4 d-flex flex-column justify-content-center">
            <span style={styleText} className="text-white mt-2" >Doble Comando</span>
            <span style={styleSubText}>Toda nuestra flota cuenta con doble comando</span>
          </div>
          <div className="col-12 col-lg-4 d-flex flex-column justify-content-center">
            <span style={styleText} className="text-white mt-2" >Teórico</span>
            <span style={styleSubText}>contamos con clases en nuestro local y clases en línea, además de un completo simulacro para llegar al exámen teórico bien preparado</span>
          </div>
          <div className="col-12 col-lg-4 d-flex flex-column justify-content-center">
            <span style={styleText} className="text-white mt-2">Instructores capacitados</span>
            <span style={styleSubText}>Expertos en manejo, que podrán resolver tus dudas al instante</span>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default Inicio;