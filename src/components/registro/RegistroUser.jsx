import React from 'react'
import './registro.css'
import logo from '../../img/logoUAG.png'
import { Link } from 'react-router-dom'

export const RegistroUser = () => {
  return (
    <div className='containRegister'>
      <div className='containInfo'>
        <div className='containerBack'>
          <Link to='/'>
            <button>Regresar</button>
            </Link>
        </div>
        <img className='logo' src={ logo } alt="logo" />
        <h2>Universidad AG - Portal Mentorias</h2>
      </div>
      <div className='containForm'>
        <form className='formsr' action="">
          <label htmlFor="">Nombre</label>
          <input type="text" required/>
          <label htmlFor="">Apellido</label>
          <input type="text" required/>
          <label htmlFor="">Correo</label>
          <input type="email" required/>
          <label htmlFor="">Contraseña</label>
          <input type="password" required/>
          <label htmlFor="">Telefono</label>
          <input type="number" required/>
          <button>Registrarse</button>
        </form>
      </div>
    </div>
  )
}
