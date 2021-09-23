import React from 'react'
import { useEffect, useState } from 'react';

import Spinner from '../components/spinner';
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

export default function AgregarUsuario(){
    const [usuarios, setUsuarios] = useState([]);
    const [formulario, setFormulario] = useState("d-none");
    const [validated, setValidated] = useState(false);

    const [spinner, setSpinner] = useState("");
    const [opacidadListaUsuarios, setOpacidadListaUsuarios] = useState("100%");

    const traerUsuarios = async() => {
        setSpinner(<Spinner />);
        setOpacidadListaUsuarios("75%");
        try {
            const res = await fetch(process.env.REACT_APP_URL + "/user");
            const data = await res.json();
            console.log("data:",data);
            setUsuarios(data);
            setSpinner("");
            setOpacidadListaUsuarios("100%");
        } catch (error) {
            console.log(error);
            return "error";
        }
    };

    const eliminarUsuario = async(id) => {
        var requestOptions = {
            method: "DELETE",
        };
        try {
            const res = await fetch(process.env.REACT_APP_URL + "/"+id, requestOptions);
            const data = await res.json();
            console.log("data:",data);
            traerUsuarios();
        } catch (error) {
            console.log(error);
            return "error";
        }
    };

    const mostrarFormulario = () => {
        if(formulario === ""){
            setFormulario("d-none");
        }
        else{
            setFormulario("");
        }
    }

// FECHA //
    const fecha = new Date().toDateString();
    console.log("fecha",fecha);
// FIN FECHA //

    const agregarUsuario = async(nombre, apellido, cedula, sexo, rol) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            first_name: nombre,
            last_name: apellido,
            cedula: cedula,
            sexo: sexo,
            fechaIngreso: fecha,
            rol: rol 
        });

        console.log(raw);

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
        };

        const fetchUsuario = async () => {
            try {
                // setStore({ loading: true });
                const res = await fetch(process.env.REACT_APP_URL + "/user", requestOptions);
                const data = await res.json();
                console.log(data);
                traerUsuarios();
            } catch (error) {
                console.log(error);
                // setStore({ loading: false });
                return "error";
            }
        };
        let resultado = fetchUsuario();
        return resultado;
    };


    useEffect(() => {
        traerUsuarios();
    }, []);


    const handleSubmit = event => {
		const form = event.currentTarget;
        console.log(form.rol.value)
        console.log(form.sexo.value)                
        if(form.sexo.value === 'Sexo'){
            form.sexo.value = '';
        }
        if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}
        else{
            event.preventDefault(); // hace que no se recargue la pagina
            agregarUsuario(form.nombre.value, form.apellido.value, form.cedula.value, form.sexo.value, form.rol.value);
            setFormulario("d-none");
            form.nombre.placeholder = "Nombre";
            form.apellido.placeholder = "Apellido";
            form.cedula.placeholder = "Cedula";
            form.sexo.placeholder = "Sexo";
            form.rol.placeholder = "Rol";
        }
		setValidated(true);
	};

    return (
        <div>
            <h2 className="text-center">Usuarios registrados:</h2>
            {/* <h4 className="text-center text-secondary mt-2" >No hay usuarios registrados</h4> */}
            <div style={{ height: "150px", overflowY: "scroll", backgroundColor: "#FCAAAA", opacity: opacidadListaUsuarios }} className="shadow-lg rounded">
                <div id="spinner" style={{ position: "relative", top: "45%", left:"45%", zIndex: "1"}}>
                    {spinner}
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" className="m-0">Nombre</th>
                            <th scope="col" className="m-0">Apellido</th>
                            <th scope="col" className="m-0">Cedula</th>
                            <th scope="col" className="m-0">Fecha</th>
                            <th scope="col" className="m-0">Eliminar</th>
                        </tr>
                        {usuarios.map((elem, iterator)=>{ 
                            let fecha = "";
                            for (let i = 5; i < 10; i++) {
                                fecha += elem.fechaIngreso.charAt(i);
                            }
                            if(elem.rol === "Alumno"){  
                                return(
                                    <tr key={iterator}>
                                        <td>{elem.first_name}</td>
                                        <td>{elem.last_name}</td>
                                        <td>{elem.cedula}</td>
                                        <td>{fecha}</td>
                                        <td><button onClick={()=>eliminarUsuario(elem.id)} className="btn btn-danger">X</button></td>
                                    </tr>
                                )
                            };
                        })}
                    </thead>
                </table>
            </div>
            <div className="d-flex justify-content-center mt-2">
                <button onClick={()=> mostrarFormulario()} className="btn btn-primary">Agregar usuario</button>
            </div>
            <div id="formulario" style={{ display: "flex", justifyContent: "center"}} className={formulario}>
            <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ backgroundColor: "#FCAAAA"}} className="mt-5 col-11 d-flex flex-column align-items-center rounded">
                <div className="row d-flex justify-content-center">
                    <h5 className="col-12 my-2 text-center">Completa con los datos del alumno</h5>
                    <Form.Group className="mb-3 col-12 col-lg-11 " controlId="nombre">
                        <Form.Control type="text" name="nombre" placeholder="Nombre" required />
                    </Form.Group>
                    <Form.Group className="mb-3 col-12 col-lg-11 " controlId="apellido">
                        <Form.Control type="text" name="apellido" placeholder="Apellido" required />
                    </Form.Group>
                    <Form.Group className="col-12 col-lg-11  mb-3" controlId="cedula">
                        <Form.Control type="cedula" name="cedula" placeholder="Cedula" required />
                    </Form.Group>
                    <Form.Group className="col-12 col-lg-11  mb-3" controlId="rol">
                        <Form.Control as="select" size="md" placeholder="Rol" required>
                            <option>Alumno</option>
                            <option>Administrador</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="col-12 col-lg-11  mb-3" controlId="sexo">
                        <Form.Control as="select" size="md" placeholder="Rol" required>
                            <option>Sexo</option>
                            <option>Femenino</option>
                            <option>Masculino</option>
                        </Form.Control>
                    </Form.Group>

                    <div className=" col-12 d-flex justify-content-center align-items-center mt-4">
                        <Button className="botonRegistrarme pl-4 pr-4 p-2" type="submit">
                            Registrar
                        </Button>
                    </div>
                </div>
          </Form>
            </div>
        </div>
    )
}
