import React, { useState, useEffect } from 'react';

import foto1 from '../img/grande(nuevo).jpg';
import foto2 from '../img/grande(1).jpg';
import foto3 from '../img/grande(2).jpg';
import foto4 from '../img/grande(mercadopago).jpg';
import foto5 from '../img/grande(4).jpg';

export default function Carrousel() {
    const [tamanioImg, setTamanioImg] = useState("");
    const [margen, setmargen] = useState("");

    useEffect(() => {
        if(window.screen.width < 780){
            setTamanioImg("w-100");
        }
        else{
            setTamanioImg("w-75");
            setmargen("100px");
            
        }
      }, []);
    
      return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img style={{margin: "auto"}} src={foto1} className={"rounded d-block " +tamanioImg} alt="..." />
                </div>
                <div className="carousel-item">
                    <img style={{margin: "auto"}} src={foto2} className={"rounded d-block " + tamanioImg} alt="..." /> 
                </div>
                <div className="carousel-item">
                    <img style={{margin: "auto"}} src={foto3} className={"rounded d-block " + tamanioImg} alt="..." />
                </div>
                <div className="carousel-item">
                    <img style={{margin: "auto"}} src={foto4} className={"rounded d-block " + tamanioImg} alt="..." />
                </div>
                <div className="carousel-item">
                    <img style={{margin: "auto"}} src={foto5} className={"rounded d-block " + tamanioImg} alt="..." />
                </div>
            </div>
            <a style={{marginLeft: margen }} className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a style={{marginRight: margen}} className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
          </a>
        </div>
    );
}

