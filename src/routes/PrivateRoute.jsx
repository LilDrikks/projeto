import React, { useContext } from 'react'
import Tarefas from '../components/User-Tarefas/Tarefas'
import { ContextStorage } from '../contexts/ContextGlobal'
import Home from '../components/Home/Home'
function PrivateRoute() {
    const dados = useContext(ContextStorage)

    return dados.token ? <Tarefas /> : <Home />
}
export default PrivateRoute