import React, { useState, useEffect } from 'react';
import pdf from '../img/pdf.svg';

export default function MaterialTeorico() {
    const [tamanoTitulo, setTamanoTitulo] = useState('');
    const [tamanoTexto, setTamanoTexto] = useState('');
    const [tamanoSubTexto, setTamanoSubTexto] = useState('');
    const [espacioEnBlanco, setEspacioEnBlanco] = useState("");

    useEffect(() => {
        if(window.screen.width < 780){
            setTamanoTitulo("42px");
            setTamanoTexto("24px");
            setTamanoSubTexto("18px");
        }
        else{
            setTamanoTitulo("75px");
            setTamanoTexto("29px");
            setTamanoSubTexto("21px");
            setEspacioEnBlanco("75px"); //Crea un espacio en blanco para alinear los divs padres
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
    };
    
    const styleSubText = {
        fontFamily: 'Changa, sans-serif',
        fontSize: tamanoSubTexto,
        color: "#6E6E6E"
    }
    return(
        <div className="row p-0 m-0">
            <div style={{ backgroundColor: "#FCAAAA"}} className="col-12 py-3 px-0 m-0">
                <span style={styleTittle}>Material teórico</span>
            </div>
            <div id="pimeraParte" className="col-12 col-lg-6 d-flex flex-column align-items-center">
                <div style={{height: espacioEnBlanco}}/> {/* Sirve como espacio vacio */}
                <span style={styleText} className="mt-3 titulo">Guia nacional de conduccion</span>
                <div className="mt-4 row">
                    <div className="col-6 pdf d-flex flex-column align-items-center">
                        <img style={{ filter: 'drop-shadow(0 1px 1px rgba(0, 0, 0, 0.7))' }} alt="" src={pdf} />
                        <a href="https://76cbc9e5-db41-4cdd-97e0-0b11e50391a3.filesusr.com/ugd/6c62a1_84c6b7015508415092af8098c5b4cc12.pdf" className="text-center" style={styleSubText}>Teorico autos y motos</a>
                    </div>
                    <div className="col-6 pdf d-flex flex-column align-items-center">
                        <img style={{ filter: 'drop-shadow(0 1px 1px rgba(0, 0, 0, 0.7))' }} alt="" src={pdf} />
                        <a href="http://www.imcanelones.gub.uy/sites/all/themes/imc/archivos/ManualProfesional.pdf" className="text-center" style={styleSubText}>Teorico de licencia profesional</a>
                    </div>
                </div>
            </div>
            <div id="segundaParte" className="col-12 col-lg-6 d-flex flex-column align-items-center">
                <span style={styleText} className="mt-3 titulo text-center">Requisitos para sacar tu licencia profesional</span>
                <div className="mt-4 row">
                    <div className="col-6 pdf d-flex flex-column align-items-center">
                        <img style={{ filter: 'drop-shadow(0 1px 1px rgba(0, 0, 0, 0.7))' }} alt="" src={pdf} />
                        <a href="https://76cbc9e5-db41-4cdd-97e0-0b11e50391a3.filesusr.com/ugd/6c62a1_f41003ded5a94d569d19740b6498e1b2.pdf" className="text-center m-0"  style={styleSubText}>Ley N° 18.191</a>
                    </div>
                    <div className="col-6 pdf d-flex flex-column align-items-center">
                        <img style={{ filter: 'drop-shadow(0 1px 1px rgba(0, 0, 0, 0.7))' }} alt="" src={pdf} />
                        <a href="https://76cbc9e5-db41-4cdd-97e0-0b11e50391a3.filesusr.com/ugd/6c62a1_f67420cb588b44819fcb8095c85bb680.pdf" className="text-center" style={styleSubText}>Ley N° 19.172</a>
                    </div>
                    <div className="col-6 mt-4 pdf d-flex flex-column align-items-center">
                        <img style={{ filter: 'drop-shadow(0 1px 1px rgba(0, 0, 0, 0.7))' }} alt="" src={pdf} />
                        <a href="https://76cbc9e5-db41-4cdd-97e0-0b11e50391a3.filesusr.com/ugd/6c62a1_3a734de49fc5483c9e35a0a2a73593ff.pdf" className="text-center" style={styleSubText}>Ley N° 190.061</a>
                    </div>
                    <div className="col-6 mt-4 pdf d-flex flex-column align-items-center">
                        <img style={{ filter: 'drop-shadow(0 1px 1px rgba(0, 0, 0, 0.7))' }} alt="" src={pdf} />
                        <a href="https://76cbc9e5-db41-4cdd-97e0-0b11e50391a3.filesusr.com/ugd/6c62a1_c2ad50db107749f9b2f4eea4dcc25249.pdf" className="text-center" style={styleSubText}>Señales de tránsito</a>
                    </div>
                    <div className="col-6 mt-4 pdf d-flex flex-column align-items-center">
                        <img style={{ filter: 'drop-shadow(0 1px 1px rgba(0, 0, 0, 0.7))' }} alt="" src={pdf} />
                        <a href="http://76cbc9e5-db41-4cdd-97e0-0b11e50391a3.filesusr.com/ugd/6c62a1_b82bc87ea0884b12894255d390c056b5.pdf" className="text-center" style={styleSubText}>Regulación de circulación vial</a>
                    </div>
                    <div className="col-6 mt-4 pdf d-flex flex-column align-items-center">
                        <img style={{ filter: 'drop-shadow(0 1px 1px rgba(0, 0, 0, 0.7))' }} alt="" src={pdf} />
                        <a href="https://76cbc9e5-db41-4cdd-97e0-0b11e50391a3.filesusr.com/ugd/6c62a1_649ad3be92d848c2aa478a6046897ca2.pdf" className="text-center" style={styleSubText}>Ley de faltas</a>
                    </div>
                </div>
            </div>
        </div>
        );
    }