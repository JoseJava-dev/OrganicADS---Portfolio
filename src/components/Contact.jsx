import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import "../components/styles/contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Consultas</h2>
      <a
        href="https://wa.me/56912345678"
        target="_blank"
        rel="noopener noreferrer"
        className="contact__whatsapp"
      >
        <FaWhatsapp className="contact__icon" />
        <span className="contact__text">+56 9 1234 5678</span>
      </a>
    </div>
  )
}

export default Contact