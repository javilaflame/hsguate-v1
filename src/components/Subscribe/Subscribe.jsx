import React from 'react'
import "./subscribe.css"

export default function Subscribe() {
    return (
        <div className='subscribe'>
            <div className="left">
                <h2>¿Quieres aprender más?</h2>
                <p>Únete a nuestra comunidad para aprender más, recibir información, ofertas especiales y más.</p>
            </div>
            <div className="right">
                <form action="#">
                    <div className="form-box">
                        <input type="text" name='EmailAddress' placeholder='Ingresa tu correo' />
                        <button type='submit'>Suscribirme</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
