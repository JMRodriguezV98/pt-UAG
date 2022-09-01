import React from 'react'
import './login.css'
import logo from '../../img/logoUAG.png'
import google from '../../img/google.png'
import facebook from '../../img/facebook.png'
import bannerLogin from '../../img/banner.jpg'
import { Link } from 'react-router-dom'

export const LoginForm = () => {
  return (
    <div className='containerPrincipal'>
      <img className='bannerLogin' src={ bannerLogin } alt="imagen presentacion" />
      <div className='container' >
        <div>
          <img className='logoImage' src={ logo } alt="Logo Universidad Academia Geek" />  
        </div>
        <form className='formLogin' action="">
          <label htmlFor="">E-mail</label>
          <input type="email" />
          <label htmlFor="">Password</label>
          <input type="password" />
        </form>
        <button className='bntLogin'>Entrar</button>
        <div className='divText'>
          <p>¿Aun no tienes una cuenta?</p>
          <Link className='link' to="/registro">
            <p className='register'>Registrate ahora</p>
          </Link>
        </div>
        <small className='small'>Registrate con:</small>
        <div className='divIcons'>
          <img className='iconSesion' src={ google } alt="Icono de google" />
          <hr />
          <img className='iconSesion' src={ facebook } alt="Icono de Facebook" />
        </div>
      </div>
    </div>
  )
}
