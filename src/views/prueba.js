import { getAllByPlaceholderText } from '@testing-library/react';
import React from 'react'
import { useEffect, useState } from 'react';

import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

const Prueba = () => {
    const [usuarios, setUsuarios] = useState([{id: 'lea'}, {id:'a'}]);
    const [formulario, setFormulario] = useState("d-none");
    const [validated, setValidated] = useState(false);

    const traerUsuarios = async() => {
            try {
                const res = await fetch(process.env.REACT_APP_URL + "/user");
                const data = await res.json();
                console.log("data:",data);
                setUsuarios(data);

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
            // setUsuarios(data);

        } catch (error) {
            console.log(error);
            return "error";
        }
    };

    const mostrarFormulario = () => {
        setFormulario("");
    }

// FECHA //
    const fecha = new Date().toDateString();
    console.log("fecha",fecha);
// FIN FECHA //

    const agregarUsuario = async(nombre, apellido, cedula) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            nombre: nombre,
            apellido: apellido,
            fechaNacimiento: fecha,
            cedula: cedula,
        });

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
        };

        // const crearUsuario = async () => {
        try {
            // setStore({ loading: true });
            const res = await fetch(process.env.URL + "/user", requestOptions);
            const data = await res.json();
            console.log(data);

        } catch (error) {
            console.log(error);
            // setStore({ loading: false });
            return "error";
        }
        // }
        // crearUsuario();
    };
    useEffect(() => {
        traerUsuarios();
    }, []);


    const handleSubmit = event => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}
        else{
            event.preventDefault(); // hace que no se recargue la pagina
            agregarUsuario(form.nombre.value, form.apellido.value, form.cedula.value);
            setFormulario("d-none");
        }
		setValidated(true);
	};

    return (
        <div>
            {usuarios.map((elem, iterator)=>{ 
                return(
                    <div> 
                        <h1 key={iterator}>{elem.first_name}</h1>
                        <button onClick={()=>eliminarUsuario(elem.id)}>Eliminar</button>
                    </div>

            )})}
            <button onClick={()=> mostrarFormulario()}>Agregar usuario</button>
            <div id="formulario" className={formulario}>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="col-12 d-flex flex-column align-items-center">
                <div className="row d-flex justify-content-center">
                    <span className="col-12 my-2">Completa con tus datos</span>
                    <Form.Group className="mb-3 col-12 col-lg-11 " controlId="nombre">
                        <Form.Control type="text" name="nombre" placeholder="Nombre y apellido" required />
                    </Form.Group>
                    <Form.Group className="mb-3 col-12 col-lg-11 " controlId="apellido">
                        <Form.Control type="text" name="apellido" placeholder="Apellido" required />
                    </Form.Group>
                    <Form.Group className="col-12 col-lg-11  mb-3" controlId="cedula">
                        <Form.Control type="cedula" name="cedula" placeholder="Cedula" required />
                        <Form.Control.Feedback type="invalid">Ingrese un correo válido</Form.Control.Feedback>
                    </Form.Group>

                    <div className="d-flex justify-content-center align-items-center mt-4">
                        <Button className="botonRegistrarme pl-4 pr-4 p-2" type="submit">
                            Registrar
                        </Button>
                    </div>
                </div>
          </Form>
            </div>
        </div>
    )
};

export default Prueba
