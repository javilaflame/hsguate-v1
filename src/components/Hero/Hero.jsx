import React from 'react'
import computer from '../../assets/computer.png'
import './hero.css'
import { servicesHero } from '../../constants'

export default function Hero() {
    return (
        <div className='hero'>
            <div className="hero-top">
                <div className="hero-left">
                    <div className='hero-tag'>
                        <i className="fa-solid fa-code"></i>
                        <div>
                            <p className='gray-text'>Desarrollamos</p>
                            <p>aplicaciones</p>
                            <p className='gray-text'>web</p>
                        </div>
                    </div>
                    <div className="title">
                        <div className='title-1'>Active su</div>
                        <div className='title-2'>presencia</div>
                        <div className='title-1'>en Internet.</div>
                    </div>
                    <div className="subtitle">
                        <p>Bienvenido a tu Centro de Soluciones Informáticas: Desarrollo web, Soporte Técnico, Cursos, Campañas Publicitarias.</p>
                    </div>
                </div>
                
                <div className="hero-right">
                    <img src={computer} alt="" />
                </div>
            </div>
            <div className="responsive-img">
            </div>
        </div>
    )
}
