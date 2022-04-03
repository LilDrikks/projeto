import React, { useContext } from 'react'
import { Routes, useLocation, Route } from "react-router-dom"
import { ContextStorage } from '../contexts/ContextGlobal';
import TarefaOpen from '../components/TarefaOpen/TarefaOpen';
import Home from '../components/Home/Home';
import './Routes.scss'
import PrivateRoute from './PrivateRoute';
import Tarefas from '../components/User-Tarefas/Tarefas';

function Routess() {
    const { token } = useContext(ContextStorage)
    const location = useLocation()
    return (
        <Routes location={location}>
            <Route path='/' element={token ? <Tarefas /> : <Home />} />
            <Route path='/user-tasks' element={<PrivateRoute />} />
            <Route path='/task' element={<TarefaOpen />} />
        </Routes>
    )
}

export default Routess
