import React from 'react'
import { useState } from 'react'
import './navbar.css'

import white_logo from '../../assets/white-logo.png'

import { navLinks } from '../../constants'

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className='navbar'>
                <img src={white_logo} className='navbar-logo' />
                <ul className='navbar-links'>
                    {navLinks.map((x) => (
                        <li>
                            <a href={`${x.id}`}>
                                {x.title}
                            </a>
                        </li>
                    ))}
                </ul>
                <button className='contact-btn'><a href="/contacto">Contáctanos</a></button>
                <div className="toggle-btn" onClick={() => setOpen((x) => !x)}>
                    <i className='fa fa-bars'></i>
                </div>
            </div>
            <div className={`${open ? 'nav-dropdown open' : 'nav-dropdown'}`}>
                {navLinks.map((x) => (
                    <li>
                        <a href={`${x.id}`} onClick={() => setOpen((x) => !x)}>
                            {x.title}
                        </a>
                    </li>
                ))}
                <button className='contact-btn'><a href="/contacto">Contáctanos</a></button>
            </div>
        </div>
    )
}
