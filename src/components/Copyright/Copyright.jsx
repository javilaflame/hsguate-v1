import React from 'react'
import "./copyright.css"

export default function Copyright() {
    return (
        <div className='copyright'>
            <div className="line"></div>
            <div className="content">
                <div className="left">
                    © 2024 HSGUATE.COM - Todos Los Derechos Reservados
                </div>
                <ul className='right'>
                    <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                </ul>
            </div>
        </div>
    )
}
