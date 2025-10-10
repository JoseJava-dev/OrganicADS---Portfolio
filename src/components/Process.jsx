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
        <div className="infoContainer">
          <span>Fecha de inicio: 01/01/2025sasasasasasasa</span><br />
          <span>Monto para participar: 100$</span><br />
          <span>Fecha de culminación: 31/01/2025</span><br />
          <span>Usuarios participando</span><br />
          <span>Apostar a otros participantes</span><br />
          <span>Reglamento</span>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Process;


