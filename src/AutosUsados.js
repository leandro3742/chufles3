import React, { useState } from 'react';
import './Styles/Autos.css';

import { Link } from 'react-router-dom';

import Autos_solos from '../Componentes/Autos';
import Auto_elegido from '../Componentes/Auto_elegido';

import uno1 from '../Imagenes/Autos/usados/uno/uno1.JPG';
import uno2 from '../Imagenes/Autos/usados/uno/uno2.JPG';
import uno3 from '../Imagenes/Autos/usados/uno/uno3.JPG';
import uno4 from '../Imagenes/Autos/usados/uno/uno4.JPG';

import palio1 from '../Imagenes/Autos/usados/palio/palio1.JPG';
import palio2 from '../Imagenes/Autos/usados/palio/palio2.JPG';
import palio3 from '../Imagenes/Autos/usados/palio/palio3.JPG';
import palio4 from '../Imagenes/Autos/usados/palio/palio4.JPG';

class AUTO{
    constructor(modelo, ano, estado, precio, fotos, puertas, combustible, transmision, motor, direccion, airbag){
        this.precio = precio;
        this.modelo = modelo;
        this.ano = ano;
        this.estado = estado;
        this.fotos = fotos;
        this.puertas = puertas;
        this.combustible = combustible;
        this.transmision = transmision;
        this.motor = motor;
        this.direccion = direccion;
        this.airbag = airbag;
    }   
}

export const fotos_uno = [uno1, uno2, uno3, uno4];
const UNO = new AUTO('Fiat Uno', '1985', '1500 Km', 'U$S 5.850', fotos_uno, '2', 'Nafta', 'Manual', '1.0', 'Mecanica', 'No');

export const fotos_palio = [palio1, palio2, palio3, palio4];
const PALIO = new AUTO('Fiat Palio', '2010', '305960 Km', 'U$S 6.750', fotos_palio, '5', 'Nafta', 'Manual', '1.6', 'Asistida', 'No');

export const autos = [UNO, PALIO];

/****************** FIN DE LA INFO ****************************/

const AutosUsados = () => {    
    const [mostrar_lista, setMostrar_lista] = useState(true);
    const [auto_elegido, setAuto_elegido] = useState(<div></div>);

    function cambiar_lista(a){
        setMostrar_lista(!mostrar_lista);
        setAuto_elegido(a);
    }
    if (mostrar_lista === true){
        return(
            <div className="Autos0Km">
                <Autos_solos auto={autos[0]} />
                <div className="contenedor-boton" onClick={()=> cambiar_lista(autos[0])}> <button className="boton">Ver más</button> </div>
    
                <Autos_solos auto={autos[1]}/>
                <div className="contenedor-boton" onClick={()=> cambiar_lista(autos[1]) }> <button className="boton">Ver más</button> </div>
            </div>
        )
    }
    else{
        return(
            <div>
                <Link to="Autos_0Km" onClick={()=>setMostrar_lista(true)}><div className="boton-atras">Atras</div></Link>
                <Auto_elegido value={auto_elegido}/>
            </div>
        )
    }
}
export default AutosUsados;
