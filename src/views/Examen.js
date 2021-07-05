import React, { useState } from 'react';
import Preguntas from '../components/Preguntas';
import Swal from 'sweetalert2';
import { useEffect } from 'react';

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

const Maximiliano = new USUARIO(55748978, 'm', 'Maximiliano'); // Maximiliano Lucas ingresado: 2/7/21
var arreglo = [Maira, Leandro, Arihana, Maximiliano];

/*******************************************/

const Examen = () => {

    const fetchTraerUsuarios = async () => {
        console.log("URL",process.env.URL)
        try {
            var requestOptions = {
                method: "GET",
            };
            console.log("URL",process.env.URL)
            const res = await fetch(process.env.URL + "/user", requestOptions);
            const data = await res.json();
            arreglo = data;
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        fetchTraerUsuarios();
        console.log(arreglo);
    }, []);

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
        <div style={{minHeight: "250px"}} >
            <div className={mostrarLogin}>   
                <div className="container cuerpoInicio d-flex justify-content-center align-items-center mt-n4">
                    <div className="mt-5 container bg-white rounded cardInicio card shadow" style={{ width: "350px" }}>
                        <h3 className="text-center mt-4 mb-3">Iniciar sesión</h3>
                        
                        <form onSubmit={verify}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control mt-4"
                                    id="nombre"
                                    aria-describedby="emailHelp"
                                    placeholder="Ingrese su nombre"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="ci"
                                    placeholder="Ingresa su cedula"
                                />
                            </div>
                            <div className="d-flex justify-content-center py-3">
                                <button type="submit" style={{margin: "auto"}} className="btn btn-primary botonVerdeInicio">
                                    Ingresar
                                </button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
            <div className={mostrarPreguntas}>
                <Preguntas />
            </div>
        </div>
    )
}

export default Examen
