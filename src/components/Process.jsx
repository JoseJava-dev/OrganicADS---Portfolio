import React from "react";
import { createPortal } from "react-dom";
import "../components/styles/proceStyle.css";

const Process = ({ handleWindow }) => {
  return createPortal(
    <div className="modal-overlay" onClick={handleWindow}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="buttonContent">
          <button className="buttonClose" onClick={handleWindow}>x</button>
        </div>
        <div className="proceSpan">
          /* <strong>🔍 Auditoría personalizada</strong>
          <p>Analizo tus redes o campañas para detectar oportunidades y definir tu punto de partida.</p>

          <strong>👤 Optimización de perfiles</strong>
          <p>Mejoro tu biografía, estética y comunicación para atraer a tu cliente ideal.</p>

          <strong>📈 Estrategias de crecimiento</strong>
          <p> Diseño planes de contenido organico o de pago que aumentan tu visibilidad y conexión real.</p>

          <strong>✏️ Copywriting estratégico</strong>
          <p>Creo textos e ideas que transmiten valor y convierten seguidores en clientes.</p>

          <strong>🤝 Acompañamiento</strong>
          <p>Te guío paso a paso para entender tus métricas y mejorar tus resultados.</p> */
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Process;


