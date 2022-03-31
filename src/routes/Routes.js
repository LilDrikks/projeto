import React from 'react'
import { Routes, useLocation, Route } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"

import TarefaOpen from '../components/TarefaOpen/TarefaOpen';
import Home from '../components/Home/Home';
import Tarefas from '../components/User-Tarefas/Tarefas';
import './Routes.scss'
import PrivateRoute from './PrivateRoute';

function Routess() {
    const location = useLocation()
    return (
        <TransitionGroup>
            <CSSTransition key={location.key} classNames="transition" timeout={300}>
                <Routes location={location}>
                    <Route path='/' element={<Home />} />
                    <Route path='/user-tasks' element={<PrivateRoute />} />
                    <Route path='/task' element={<TarefaOpen />} />
                </Routes>
                
            </CSSTransition>
        </TransitionGroup>
    )
}

export default Routess
