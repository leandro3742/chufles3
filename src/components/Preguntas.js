import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { myArray, preguntas, respuestas, respuestas_correctas } from './datos.js';
import gif from '../img/bob-12.gif';

function correcto(){
    Swal.fire({
        title : "Correcto!!!" ,
        buttons: "siguiente",
        icon : "success"
    }) 
}

function felicitaciones(){
    Swal.fire({
        title: `!!Felicitaciones!!
                Aprovaste el simulacro`,
        padding: '3em',
        background: `
            url(${gif})  
        `
    })
}

function perdio(){
    Swal.fire({
        title: "Ops...",
        text: "no llegaste al minimo necesario para salvar el simulacro",
        padding: '3em',
    })
}
function respuesta_mal(respuestas_correctas){
    Swal.fire({
        title : "Ops.. La respuesta correcta es: " ,
        text : respuestas_correctas,
        buttons: "Siguiente",
        icon : "error"
    }) 
}

var resCorrectas = 0;
var maximoPreguntas = 29;

function Preguntas(){
    // // //
    const [tamanoTitulo, setTamanoTitulo] = useState('');
    
    useEffect(() => {
      if(window.screen.width < 780){
        setTamanoTitulo("24px");  
      }
      else{
        setTamanoTitulo("32px");
      }
    }, []);
  
    const styleTittle = {
      fontSize: tamanoTitulo,
      fontFamily: 'Acme, sans-serif'
    };
    // // //

    const indice = myArray;
    const [i, setI] = useState(0);
    const [mostrarRespuestas, setMostrarRespuestas] = useState(respuestas[indice[0]]);
    
    const verificar = (resp) => {
        if(maximoPreguntas > 0){
            if(resp === respuestas_correctas[i]){
                resCorrectas++;
                correcto();
            }
            else{
                respuesta_mal(respuestas_correctas[i]);
            }
            let aux = i+1;
            setMostrarRespuestas(respuestas[indice[aux]]);
            setI(aux);
            maximoPreguntas--;
        }
        else{
            if(resCorrectas >= 27){
                felicitaciones();                
            }
            else{
                perdio();
            }
        }
    };

    return(
        <div>
            <div className="d-flex flex-column align-items-center">
                <div style={{margin: "auto" }} className="d-flex justify-content-center">
                    <span className="pregunta text-center" style={styleTittle}>{preguntas[myArray[i]]}</span>
                </div>
                <div className="row p-0 m-0">
                    <div style={{margin: "auto", width: "100%"}} className="d-flex justify-content-center col-12">
                        <div className="d-flex flex-column align-items-center">
                            {mostrarRespuestas.map((elem, iterador)=>{ return( 
                                <button key={iterador} onClick={()=>verificar(elem)} className="col-12 btn btn-primary m-1 border shadow-sm">{elem}</button>
                            )})}
                        </div>
                    </div>
                </div>
                <span style={styleTittle}>{i+1}/30</span>
            </div>
            <button onClick={()=>perdio()}>Probar</button>
        </div>
    )
}
export default Preguntas;