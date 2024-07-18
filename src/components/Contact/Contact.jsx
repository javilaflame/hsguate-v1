import React from 'react'
import './contact.css'
import contact from '../../assets/contact2.png'

export default function Contact() {
    return (
        <div className='contact' id='contacto'>
            <div className="contact-form">
                <h2>Contacto</h2>
                <div className="contact-container">
                    <div className="main">
                        <div className="contact-content">
                            <h3>Déjanos tu consulta</h3>

                            <form action="#" method="post">
                                <input type="text" name="name" placeholder="Enter Your Name" required />

                                <input type="email" name="name" placeholder="Enter Your Email" required />
                                <input type="tel" name="name" placeholder="Enter Your Phone" required />
                                <textarea name="message" placeholder="Your Message" className='message-area' required></textarea>
                                <button type="submit" className="btn">Send <i className="fas fa-paper-plane"></i></button>
                            </form>

                        </div>
                        <div className="form-img">
                            <img src={contact} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <p className='contact-info-text'>Nuestro horario de atención es de Domingo a Viernes de 6:00 a 17:00 horas.

                Llena los campos que acontinuación se presentan en el formulario y te responderemos a la brevedad posible. ¡Gracias!

                Todos los campos son necesarios</p>
        </div>
    )
}
