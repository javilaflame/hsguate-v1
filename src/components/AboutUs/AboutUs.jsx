import React from 'react'
import './aboutUs.css'

import about_us from '../../assets/about-us.png'

export default function AboutUs() {
    return (
        <div className="about-us" id='nosotros'>
            <h2>Nosotros</h2>
            <div className="about-container">
                <div className="about-left">
                    H@RD&SOFT, fundada en 2002 en La Antigua Guatemala, Sacatepéquez, ofrece soluciones de capacitación en hardware informático, comenzando con un curso intensivo de un año en Reparación de Computadoras y servicios de mantenimiento tanto en el taller como a domicilio. La empresa luego expandió su oferta con cursos de Redes y Programación, obteniendo el aval del Ministerio de Educación de Guatemala en 2003. Además, se introdujo en la venta de equipos informáticos personalizados y recientemente ha añadido el desarrollo de páginas web, sitios y aplicaciones a su catálogo de servicios. Con más de dos décadas de experiencia, H@RD&SOFT se posiciona como un aliado confiable en capacitación y servicios técnicos. Su eslogan es "Su aliado en la Capacitación y Servicios Técnicos".
                </div>
                <div className="about-right">
                    <img src={about_us} alt="" />
                </div>
            </div>
        </div>
    )
}
