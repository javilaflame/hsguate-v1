import React from 'react'
import "./footer.css";

import white_logo from '../../assets/white-logo.png'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="sec section-about">
                    <div className="logo">
                        <img src={white_logo} alt="" />
                    </div>
                    <p><strong>HSGuate</strong> es una empresa especializada en el Servicio
                    de Capacitación en Informática, Soporte Ténico, Desarrollo de
                    Páginas y Aplicaciones Web.</p>
                </div>
                <div className="sec section-quicklinks">
                    <h2>Menú</h2>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Proyectos</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Nosotros</a></li>
                    </ul>
                </div>
                <div className="sec section-contact">
                    <h2>Contáctanos</h2>
                    <ul className="info">
                        <li>
                            <span><i className="fa-solid fa-phone"></i></span>
                            <p><a href="tel:+50235367172">{"+(502) 3536-7172"}</a></p>
                        </li>
                        <li>
                            <span><i className="fa-solid fa-envelope"></i></span>
                            <p><a href="mailto:hsguate@gmail.com">hsguate@gmail.com</a></p>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

{/* <p className="footer-links">
                        <a href="/">Home</a> | <a href="http://hsguate.com/blog/">Blog</a> | <a href="/nosotros">Nosotros</a> | <a href="/contacto" className="contacto-link">
                            Contacto
                        </a>
                    </p> */}

                    {/* <p className="hsguate-copyright">
                        © Copyright 2023 <strong>HSGuate.com</strong>
                    </p> */}