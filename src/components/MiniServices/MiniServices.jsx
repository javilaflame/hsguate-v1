import React from 'react'
import { servicesHero } from '../../constants'

import "./miniServices.css"

export default function MiniServices() {
    return (
        <div className="hero-bottom">
            {servicesHero.map((y) => (
                <div className="hero-services">
                    <div className="hero-services-l">
                        <i className={`fa-solid ${y.icon}`}></i>
                    </div>
                    <div className="hero-services-r">
                        <p className="title">{y.title}</p>
                        <p className="text">{y.text}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
