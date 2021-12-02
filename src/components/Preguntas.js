import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import { arrayPreguntas, arrayRespuestas, respuestas_correctas } from './datos.js';

var resCorrectas = 0;
var maximoPreguntas = 29;
var i = 0;
function Preguntas(){
    var history = useHistory();

// // // Funciones para el SweetAlert // // //
    const correcto = () => {
        Swal.fire({
            title : "Correcto!!!" ,
            buttons: "siguiente",
            icon : "success"
        }) 
    }
    const respuesta_mal = (respuestas_correctas) => {
        Swal.fire({
            title : "Ops.. La respuesta correcta es: " ,
            text : respuestas_correctas,
            buttons: "Siguiente",
            icon : "error"
        }) 
    }    
    const felicitaciones = () => {
        Swal.fire({
            icon: "success",            
            title: `!!Felicitaciones!!
                    Aprovaste el simulacro`,
            text: '¡¡ Estoy ready 😁 !!',
            button: "success",
            padding: '3em',
        }).then((result)=>{
            history.replace('/');
        })
    }
    const perdio = () =>{
        Swal.fire({
            icon: "error",
            title: "Ops...",
            text: 'no llegaste al minimo necesario para salvar el simulacro',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: `volver a intentar`,
            cancelButtonText: `Cancelar`,
        }).then((result)=>{
            if(result.isConfirmed){
                window.location = '/examen';
            }
            else if (result.isDismissed){
                history.replace('/');
            }
        })
    }
// // // // // // // // // //
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

    const [pregunta, setPregunta] = useState(arrayPreguntas[i]);
    const [respuestas, setRespuestas] = useState(arrayRespuestas[i]);

    const reordenarRespuestas = (array) => {
        let numero = Math.floor(Math.random()*array.length);
        let aux = array[numero]; //Guardo el valor que voy a reemplazar
        array[numero] = array[0]; // Modifico el valor y guardo la respuesta correcta
        array[0] = aux; // Agrego el valor que habia reemplazado y lo guardo en el primer lugar
        return array;
    }

    const verificar = (resp) => {
        if(maximoPreguntas > 0){
            if(resp === respuestas_correctas[i]){
                resCorrectas++;
                correcto();
            }
            else{
                respuesta_mal(respuestas_correctas[i]);
            }
            i = i+1;
            let auxRespuestas = reordenarRespuestas(arrayRespuestas[i]);
            setPregunta(arrayPreguntas[i]);
            setRespuestas(auxRespuestas);

            maximoPreguntas--;
        }
        else{
            if(resCorrectas >= 25){
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
                    <span className="pregunta text-center" style={styleTittle}>{pregunta}</span>
                </div>
                <div className="row p-0 m-0">
                    <div style={{margin: "auto", width: "100%"}} className="d-flex justify-content-center col-12">
                        <div className="d-flex flex-column align-items-start ">
                            {respuestas.map((elem, iterador)=>{ return( 
                                <button key={iterador} onClick={()=>verificar(elem)} style={{width: "100%"}} className="btn btn-primary m-1 border shadow-sm">{elem}</button>
                            )})}
                        </div>
                    </div>
                </div>
                <span style={styleTittle}>{i+1}/30</span>
            </div>
        </div>
    )
}
export default Preguntas;