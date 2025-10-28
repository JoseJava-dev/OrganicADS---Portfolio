import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import "../components/styles/contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Consultas</h2>
      <a
        href="https://bit.ly/ASESORIA_ORGANICADS"
        target="_blank"
        rel="noopener noreferrer"
        className="contact__whatsapp"
      >
        <FaWhatsapp className="contact__icon" />
        <span className="contact__text">Whatsapp</span>
      </a>
    </div>
  )
}

export default Contact