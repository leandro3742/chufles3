import React, { useState, useEffect } from 'react';

import ventanilla from '../img/ventana.jpg';
import barbijo from '../img/barbijo.jpg';
import desinfeccion from '../img/desinfeccion.jpg';

import camion from '../img/camion.jpg';

function Inicio() {

  const [tamanoTitulo, setTamanoTitulo] = useState('');
  const [tamanoVehiculos, setTamanoVehiculo] = useState("300px");
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
      //Vehiculo
      setTamanoVehiculo("200px");
    }
    else{
      setTamanoTitulo("52px");
      setTamanoTexto("29px");
      setTamanoSubTexto("18px");
      setContainerResponsive("175px");
      setTamanoImg("150px");
      setMarginBottom("mb-5");
      //Vehiculo
      setTamanoVehiculo("450px")
    }
  }, []);
  function fillSummaries(stringArray){
    let arr = [] 
    for(let i in stringArray){
      let result;
      if(stringArray[i].message.length <= 60){
        result = {message: stringArray[i].message, id: stringArray[i].id, trimmed: stringArray[i].message}
      }
      else{
        result = {message: stringArray[i].message, id: stringArray[i].id, trimmed: stringArray[i].message.substring(0, 60)}
      }
      arr.push(result);
    }
    console.log(arr)
    return(arr)
  }

  useEffect(() => {
    fillSummaries([{message: 'Short and brief message', id:1}, {message: 'A very very long message that is way above 80 characters and should be leftout.', id:2},])  }, [])
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
      <div className="d-flex justify-content-center mt-5">
        <div className="col-12 col-lg-10">
          <div style={covid} className={"d-flex justify-content-center shadow p-3 rounded text-center "+ marginBottom}>
            <span style={styleTittle}>Nuestras medidas de seguridad de covid-19</span>          
          </div>
          
          <div style={{backgroundColor: '#C2C2C2'}} className="shadow p-3 rounded">
            <div className="row">
              <div className="col-lg-4 col-12 d-flex justify-content-center align-items-center">
              <img src={ventanilla} style={{height: tamanoImg}} className="rounded shadow-lg" alt=""/>
              </div>
              <div className="col-lg-5 col-12 text-center">
                <span style={styleText}>Las ventanillas deber??n estar siempre abiertas, para un mejor circulaci??n de aire</span>          
              </div>
            </div>
          </div>
          
          <div style={{backgroundColor: '#FCAAAA'}} className="shadow p-3 rounded my-2">
            <div className="row">
              <div className="col-lg-8 col-12 d-flex justify-content-center align-items-center">
                <span style={styleText}>Desinfecci??n del veh??culo antes y despu??s de cada clase</span>          
              </div>
              <div className="col-lg-4 col-12 d-flex justify-content-center align-items-center">
                <img src={desinfeccion} style={{height: tamanoImg}} className="rounded shadow-lg" alt=""/>
              </div>
            </div>
          </div>

          <div style={{backgroundColor: '#C2C2C2'}} className="shadow p-3 rounded">
            <div className="row">
              <div className="col-lg-4 col-12 d-flex justify-content-center align-items-center">
                <img src={barbijo} style={{height: tamanoImg}} className="rounded shadow-lg" alt=""/>
              </div>
              <div className="col-lg-5 col-12 text-center">
                <span style={styleText}>Uso obligatorio del tapabocas para los alumnos e instructores</span>          
              </div>
            </div>
          </div>

        </div>

      </div>

      <div style={porQueElegirnos} className="shadow-lg col-12 text-center py-4">
        <div className="d-flex justify-content-center">
          <span style={styleTittle}>??Por qu?? elegirnos?</span>
        </div>
        <div className="row">
          <div className="col-12 col-lg-4 d-flex flex-column justify-content-center">
            <span style={styleText} className="text-white mt-2" >Doble Comando</span>
            <span style={styleSubText}>Toda nuestra flota cuenta con doble comando</span>
          </div>
          <div className="col-12 col-lg-4 d-flex flex-column justify-content-center">
            <span style={styleText} className="text-white mt-2" >Te??rico</span>
            <span style={styleSubText}>contamos con clases en nuestro local y clases en l??nea, adem??s de un completo simulacro para llegar al ex??men te??rico bien preparado</span>
          </div>
          <div className="col-12 col-lg-4 d-flex flex-column justify-content-center">
            <span style={styleText} className="text-white mt-2">Instructores capacitados</span>
            <span style={styleSubText}>Expertos en manejo, que podr??n resolver tus dudas al instante</span>
          </div>
        </div>
      </div>

      {/* <div style={{ backgroundColor: '#C2C2C2', marginTop: "50px"}} className="shadow-lg col-12 text-center py-4">
        <div className="d-flex justify-content-center">
          <span style={styleTittle}>Nuestra flota</span>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center">
            <img src={camion} style={{width: tamanoVehiculos}} className="rounded shadow-lg mt-2" alt=""/>
          </div>
          <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center">
            <img src={camion} style={{width: tamanoVehiculos}} className="rounded shadow-lg mt-2" alt=""/>
          </div>
        </div>
      </div> */}

    </div>
  );
}

export default Inicio;