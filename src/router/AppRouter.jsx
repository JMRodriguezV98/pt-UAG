import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from '../containers/Login'
import { Registro } from '../containers/Registro'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="registro" element={ <Registro /> } />
        </Routes>
    </>
  )
}
