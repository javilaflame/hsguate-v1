import React from 'react'
import { services } from '../../constants'
import './services.css'

export default function Services() {
    return (
        <div className='container' id='servicios'>
            <div className="service-wrapper">
                <div className="service">
                    <h1>Nuestros servicios<span></span></h1>
                    <div className="cards">
                        {services.map((z) => (
                            <div className="card">
                                <i className={z.icon}></i>
                                <h2>{z.title}</h2>
                                <p>{z.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
