import React, { useContext } from 'react'
import { Routes, useLocation, Route } from "react-router-dom"
import { ContextStorage } from '../contexts/ContextGlobal';
import TarefaOpen from '../components/TarefaOpen/TarefaOpen';
import Home from '../components/Home/Home';
import './Routes.scss'
import PrivateRoute from './PrivateRoute';

function Routess() {
    const { token } = useContext(ContextStorage)
    const location = useLocation()
    return (
        <Routes location={location}>
            <Route path='/' element={<PrivateRoute />} />
            <Route path='/user-tasks' element={<PrivateRoute />} />
            <Route path='/task/:id' element={token ? <TarefaOpen /> : <Home />} />
        </Routes>
    )
}

export default Routess
