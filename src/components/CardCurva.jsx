import React, { useState, useEffect } from "react";
import "../components/styles/cardCurva.css";
import Benefit1 from "./Benefit1";
import Contact from "./Contact";
import Process from "./Process";
import Service1 from "./Service1";
import Title from "./Title";
import esfera_blanca from '/src/assets/esfera-blanca.svg';
import tarjeta_naranja from '/src/assets/tarjeta_naranja.svg';
import tarjeta_azul from '/src/assets/tarjeta_azul.svg';
import imgPortada from '/src/assets/imagen_portada.png';

export default function CardCurva() {

  const [isVisible, setIsVisible] = useState(false)
  const handleWindow = (() => setIsVisible(!isVisible))


  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 1300
  );

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 1300);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Versión mobile para pantallas ≤ 1300px
  if (isMobile) {
    return (
      <div className="content">
        <div className="cardContent">
          <div className="cardUp" style={{
          backgroundImage: `url(${imgPortada})`,
          backgroundSize: 'cover',         
          backgroundPosition: 'center',    
          backgroundRepeat: 'no-repeat',   
         }}
        ><Title/></div>
          <div className="cardCircle">
            <img
              src={esfera_blanca}
              alt="Logo"
              className="centerLogo"
            />
          </div>
          <div className="contentDown">
            <div className="cardDown_left" style={{
              backgroundImage: `url(${tarjeta_naranja})`,
              backgroundSize: 'cover',
              backgroundPosition: '20% center',
              backgroundRepeat: 'no-repeat'   
            }}
            ><h2>Mira lo que he hecho</h2>
              <p>Clic aqui</p>
            </div>

            <div className="cardDown"
              onClick={handleWindow}
              style={{
              backgroundImage: `url(${tarjeta_azul})`,
              backgroundSize: 'cover',
              backgroundPosition: '92%',
              backgroundRepeat: 'no-repeat'   
            }}>
              <h2>Como puedo ayudarte</h2>
              {isVisible && ( <> <Process handleWindow={handleWindow}/>  </> ) }   
              <p>Clic aqui</p>
            </div>
          </div>
        </div>
        <div className="content-two">
         
          <div className="lateralContent">            
            <div className="lateralCard_right">
              <Benefit1 />
            </div>
          </div>
           <div className="lateralContent">
            <div className="lateralCard_1">
              <Service1 />
            </div>
            <div className="lateralCard">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Versión desktop para pantallas > 1300px
  return (
    <div className="content">
      <div className="lateralContent">
        <div className="lateralCard_1"><Service1 />{isVisible && ( <> <Process handleWindow={handleWindow}/>  </> ) }</div>        
        <div className="lateralCard"><Contact /></div>
      </div>
      <div className="cardContent">
        <div className="cardUp" style={{
          backgroundImage: `url(${imgPortada})`,
        backgroundSize: 'cover',         
        backgroundPosition: 'center',    
        backgroundRepeat: 'no-repeat',   
         }}
        ><Title/></div>
        <div className="cardCircle"><img src={esfera_blanca} alt="Logo" className="centerLogo"/></div>
        <div className="contentDown">
         <div className="cardDown_left" style={{
          backgroundImage: `url(${tarjeta_naranja})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'   
         }}>
            <h2>Mira lo que he hecho</h2>
              <p>Clic aqui</p>
        </div>
          <div className="cardDown"
            onClick={handleWindow} 
            style={{
            backgroundImage: `url(${tarjeta_azul})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'   
            }}>
              <h2>Como puedo ayudarte</h2>
              <p>Clic aqui</p>
                          
          </div>
        </div>
      </div>
      <div className="lateralContent">
        <div className="lateralCard_right">
          <Benefit1/>
        </div>        
      </div>
    </div>
  );
}