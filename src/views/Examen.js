import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

class USUARIO{
    constructor(CI, sexo, nombre){
        this.CI = CI;
        this.sexo = sexo;
        this.nombre = nombre;
    }
}
/********CONSTANTES Y ARREGLOS **********/

const Maira = new USUARIO(26372734, 'f', 'Maira');
const Leandro = new USUARIO(49189815, 'm', 'Leandro');
const Arihana = new USUARIO(50379752, 'f', 'Arihana');

const Sergio = new USUARIO(42020931, 'm', 'Sergio'); //Ingresado: 27/2/21
const Natalia = new USUARIO(32992275, 'f', 'Natalia'); //Natalia Silva ingresada: 3/3/21
const Yaquelin = new USUARIO(43969063, 'f', 'Yaquelin'); //Yaquelin Lisboa ingresada: 9/3/21
const Juan = new USUARIO(18850079, 'm', 'Juan'); //Juan Marcelo Diaz ingresado: 10/3/21
const Asley = new USUARIO(64540941, 'm', 'Asley'); //Asley Avila ingresado: 11/3/21
const Joelin = new USUARIO(50097873, 'f', 'Joelin'); //Joelin Ghan ingresada: 11/3/21
const Melanie = new USUARIO(53120960, 'f', 'Melanie'); // Melanie Sire ingresada: 16/3/21
const Lucas = new USUARIO(55510199, 'm', 'Lucas'); //Lucas Blanco ingresado: 17/3/21

const arreglo = [Maira, Leandro, Arihana, Sergio, Natalia, Yaquelin, Juan, Asley, Joelin, Melanie, Lucas];

/*******************************************/

const Examen = () => {
// Styles //
    const [tamanoTitulo, setTamanoTitulo] = useState('');
    
    useEffect(() => {
      if(window.screen.width < 780){
        setTamanoTitulo("32px");  
      }
      else{
        setTamanoTitulo("52px");
      }
    }, []);
  
    const styleTittle = {
      fontSize: tamanoTitulo,
      fontFamily: 'Acme, sans-serif'
    };

// Javascript //   
    const [mostrarLogin, setMostrarLogin] = useState("d-block");
    const [mostrarPreguntas, setMostrarPreguntas] = useState("d-none");
    let existe = false; //Sirve para la funcion comprobar
    let welcome = '';
    const comprobar = user =>{
        let i = 0;
        while(i < arreglo.length){
            if(arreglo[i].CI != user)
                i++;
            else{
                if(arreglo[i].sexo === 'f')
                    welcome = "Bienvenida";
                else
                    welcome = "Bienvenido";
    
                Swal.fire({
                    text : welcome+" "+arreglo[i].nombre, 
                    buttons: "Comenzar ahora",
                    icon : "success"
                })
                existe = true;
                setMostrarLogin("d-none");
                setMostrarPreguntas("d-block");
                break;
            }
        }
        if(existe === false){
            Swal.fire({
                title : "Ops... " ,
                text : "Usuario no encontrado" ,
                buttons: "Intentar nuevamente",
                icon : "error"
            });
        }
    }

    const verify = e => {
        e.preventDefault();
        console.log("llega");
        comprobar(e.target.ci.value);
    }    
    return (
        <div className="row d-flex flex-column align-items-center mt-5">
            <h2 style={styleTittle}>Ingrese su usuario</h2>
            <form onSubmit={verify} className="col-12 d-flex flex-column align-items-center" >
                <input type="number" class="form-control col-10 col-lg-3" id="ci" />
                <button className="btn btn-primary mt-3">Ingresar</button>
            </form>
        </div>
    )
}

export default Examen
