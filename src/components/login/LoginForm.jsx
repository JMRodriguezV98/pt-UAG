import React from 'react'
import './login.css'
import logo from '../../img/logoUAG.png'
import google from '../../img/google.png'
import facebook from '../../img/facebook.png'
import bannerLogin from '../../img/banner.jpg'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch } from 'react-redux'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thuks'

export const LoginForm = () => {

  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: 'mriciosama@gmail.com',
    password: '0898maoxd'
  })

  const onSubmit = ( event ) => {
    event.preventDefault( event );

    console.log( { email, password } );
    dispatch( checkingAuthentication() );
  }

  const onGoogleSignIn = () => {
    console.log( 'onGoogleSignIn' );
    dispatch( startGoogleSignIn() );
  }

  return (
    <div className='containerPrincipal'>
      <img className='bannerLogin' src={ bannerLogin } alt="imagen presentacion" />
      <div className='container' >
        <div>
          <img className='logoImage' src={ logo } alt="Logo Universidad Academia Geek" />  
        </div>
        <form onSubmit={ onSubmit } className='formLogin'>
          <label htmlFor="">E-mail</label>
          <input type="email" required placeholder='correo@google.com' name='email' value={ email } onChange={ onInputChange }/>
          <label htmlFor="">Password</label>
          <input type="password" required placeholder='Contraseña' value={ password } name='password' onChange={ onInputChange }/>
          <button type='submit' className='bntLogin'>Entrar</button>
        </form>
        <div className='divText'>
          <p>¿Aun no tienes una cuenta?</p>
          <Link className='link' to="/registro">
            <p className='register'>Registrate ahora</p>
          </Link>
        </div>
        <small className='small'>Registrate con:</small>
        <div className='divIcons'>
          <img onClick={ onGoogleSignIn } className='iconSesion' src={ google } alt="Icono de google" />
          <hr />
          <img className='iconSesion' src={ facebook } alt="Icono de Facebook" />
        </div>
      </div>
    </div>
  )
}
