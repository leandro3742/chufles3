import React, { useState } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

import Preguntas from '../components/Preguntas';
import AgregarUsuario from '../components/agregarUsuario';
import Spinner from "../components/spinner";


var usuario = {}; //Guardo la cedula y el nombre que ingresa el usuario

const Examen = () => {
    const [arreglo, setArreglo] = useState([]);
    const [spinner, setSpinner] = useState("");
    const [opacidadLogin, setOpacidadLogin] = useState("100%");
    const [styleSpinner, setStyleSpinner] = useState({});

    const fetchTraerUsuarios = async () => {
        setSpinner(<Spinner />);
        setOpacidadLogin("75%");
        try {
            const res = await fetch(process.env.REACT_APP_URL + "/user");
            const data = await res.json();
            setArreglo(data);
            console.log(arreglo);
            setSpinner("");
            setOpacidadLogin("100%");
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
    const comprobar = () =>{
        let i = 0;
        console.log(usuario);
        for( i in arreglo){
            if(arreglo[i].cedula === usuario.ci){
                if(arreglo[i].rol === "Administrador"){ 
                    if(usuario.nombre.toUpperCase() == arreglo[i].first_name.toUpperCase()){
                        setMostrar(<AgregarUsuario />);
                        setMostrarLogin("d-none");
                        setMostrarPreguntas("d-block");
                    }
                    else{
                        Swal.fire({
                            title : "El nombre no coincide con la cedula", 
                            buttons: "Ok",
                            icon : "error"
                        })
                    }
                    existe = true;
                    break;
                }
                else{
                    if(arreglo[i].sexo === 'femenino')
                        welcome = "Bienvenida";
                    else
                        welcome = "Bienvenido";    
                    Swal.fire({
                        text : welcome+" "+usuario.nombre, 
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
        usuario = {
            nombre: e.target.nombre.value,
            ci: e.target.ci.value
        }
        // setUsuario(usuarioAux);
        comprobar();
    }   
    useEffect(() => {
        if(window.screen.width < 780){
            setStyleSpinner({position: "absolute", top: "55%", left:"45%", zIndex: "1"})
        }
        else{
            setStyleSpinner({position: "absolute", top: "44%", left:"49%", zIndex: "1"})
        }
    }, []) 
    return (
        <div style={{minHeight: "250px"}} >
            <div id="spinner" style={styleSpinner}>
                {spinner}
            </div>
                <div className={mostrarLogin} style={{ opacity: opacidadLogin}}>   
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
