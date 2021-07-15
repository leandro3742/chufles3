import React, { useState } from 'react';
import Preguntas from '../components/Preguntas';
import AgregarUsuario from '../components/agregarUsuario';

import Swal from 'sweetalert2';
import { useEffect } from 'react';

class USUARIO{
    constructor(CI, sexo, nombre, rol){
        this.CI = CI;
        this.sexo = sexo;
        this.nombre = nombre;
        this.rol = rol;
    }
}
/********CONSTANTES Y ARREGLOS **********/

const Maira = new USUARIO(26372734, 'f', 'Maira', 'admin');
const Leandro = new USUARIO(49189815, 'm', 'Leandro', 'admin');
const Arihana = new USUARIO(50379752, 'f', 'Arihana', 'admin');

const Maximiliano = new USUARIO(55748978, 'm', 'Maximiliano', 'alumno'); // Maximiliano Lucas ingresado: 2/7/21
const Agustin = new USUARIO(53856070, 'm', 'Agustin', 'alumno'); // Agustin Zucoti ingresado: 7/7/21
const LeandroToledo = new USUARIO(64230077, 'm', 'Leandro', 'alumno'); //Leandro Toledo ingresado: 9/7/21

var arreglo = [Maira, Leandro, Arihana, Maximiliano, Agustin, LeandroToledo];
// var admin = [Maira, Leandro, Arihana];
/*******************************************/

const Examen = () => {

    const fetchTraerUsuarios = async () => {
        console.log("URL",process.env.REACT_APP_URL)
        try {
            // console.log("URL",process.env.URL)
            const res = await fetch(process.env.REACT_APP_URL + "/user");
            const data = await res.json();
            console.log("data",data)
            // arreglo = data;
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        fetchTraerUsuarios();
    }, []);

// Javascript //   
    const [mostrarLogin, setMostrarLogin] = useState("d-block");
    const [mostrarPreguntas, setMostrarPreguntas] = useState("d-none");
    const [mostrar, setMostrar] = useState("");

    let existe = false; //Sirve para la funcion comprobar
    let welcome = '';
    const comprobar = user =>{
        let i = 0;
        console.log(user)
        for( i in arreglo){
            if(arreglo[i].CI == user){
                if(arreglo[i].rol === "admin"){ 
                    setMostrar(<AgregarUsuario />);
                    setMostrarLogin("d-none");
                    setMostrarPreguntas("d-block");
                    existe = true;
                    break;
                }
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
                    setMostrarLogin("d-none");
                    setMostrarPreguntas("d-block");
                    setMostrar(<Preguntas />);
                    setMostrarLogin("d-none");
                    setMostrarPreguntas("d-block");
                    existe = true;
                    break;
                }
            }
        }
        if(!existe){
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
                {mostrar}
            </div>
        </div>
    )
}

export default Examen
