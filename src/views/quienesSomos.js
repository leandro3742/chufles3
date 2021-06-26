import React, { useState, useEffect } from 'react';

export default function QuienesSomos() {
  const [tamanoTitulo, setTamanoTitulo] = useState('');
  const [tamanoTexto, setTamanoTexto] = useState('');
  
  useEffect(() => {
    if(window.screen.width < 780){
      setTamanoTitulo("32px");
      setTamanoTexto("24px");

    }
    else{
      setTamanoTitulo("52px");
      setTamanoTexto("29px");
    }
  }, []);

  const styleTittle = {
    fontSize: tamanoTitulo,
    fontFamily: 'Acme, sans-serif'
  };

  const styleText = {
    fontSize: tamanoTexto,
    textAlign:'center',
    fontFamily: 'Changa, sans-serif',
    color: "#6E6E6E"
  };

  
  return (
    <div>
      {/* <div className="mb-2 mt-1">
        <Carrousel />
      </div> */}
      
      <div style={{backgroundColor: "#FCAAAA"}} className="mx-2 mt-5 shadow py-3 rounded d-flex flex-column align-items-center">
        <span style={styleTittle}>¿Quiénes somos?</span>
        <span style={styleText} >Chufle's es una escuela de choferes con 27 años de enseñanza.
        Contamos con vehículos con toda la garantí y de ultima generación.
        Nos encontramos en la ciudad de Canelones, y llegamos hasta
        Santa Rosa, Cerrillos, Progreso, San Antonio
        </span>
      </div>

      <div style={{backgroundColor: "#C2C2C2"}} className="m-2 shadow py-3 rounded d-flex flex-column align-items-center">
        <span style={styleTittle} className="text-white">Nuestra meta</span>
        <span style={styleText}>La meta es formar un conductor seguro y responsable de las 
        decisiones que  tendrá que tomar, con un buen conocimiento del vehículo y lo mismo en cuanto a 
        reglamentación (claridad ante sus derechos y deberes), siempre desde el marco de prevención de accidentes.
        </span>
      </div>

      <div style={{backgroundColor: "#FCAAAA"}} className="mx-2 shadow py-3 rounded d-flex flex-column align-items-center">
        <span style={styleTittle}>Contamos con:</span>
        <ul>
          <li style={styleText}>Prácticas (Auto - Moto)</li>
          <li style={styleText}>Aumento de categoría</li>
          <li style={styleText}>Clases teóricas (Auto - Moto)</li>
        </ul>

        <span style={styleText} >Brindamos a nuestros clientes y alumnos las herramientas, información
        y práctica para que lleguen a ser conductores seguros, responsables en la sociedad, a conducir 
        con madurez, criterio y que sean cuidadosos con la vida suya y de los demás.</span>
        <span style={{fontSize: tamanoTexto, textAlign:'center', fontFamily: 'Changa, sans-serif'}}>
        ANTE TODO RESPETO POR LA VIDA.
        </span>
      </div>

    </div>
  );
}