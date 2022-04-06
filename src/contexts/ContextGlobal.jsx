import { createContext, useState } from "react";
import api from "../services/Api";

export const ContextStorage = createContext()

export const ContextGlobal = ({ children }) => {
    function initialValues() {
        return { name: '', email: '', password: '', confirmPassword: '' ,tarefa: '' }
    }

    const [values, setValues] = useState(initialValues)
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [idUser, setIdUser] = useState(localStorage.getItem('id'))
    const [tarefas, setTarefas] = useState(JSON.parse(localStorage.getItem('tasks')))
    const [create, setCreate] = useState(false)

    function onChange(event) {
        const { value, name } = event.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleLogin = () => {
        api.post('/auth/user', { "email": values.email, "password": values.password })
            .then(async (res) => {
                const token = await res.data.token
                const id = await res.data.iduser
                setToken(token)
                setIdUser(id)
                if (token) {
                    localStorage.setItem("token", token)
                    localStorage.setItem("id", id)
                    handleGetTarefas(id, token)
                }
            })
            .catch((res) => {
                console.log(res)
            })
    };
    const handleInsertTask = () => {
        const newTarefas = [{ task: { title: values.tarefa, content: 'teste6', status: true }}, ...tarefas]
        setTarefas(newTarefas)
        api.post(`/auth/user/add-tarefa/${idUser}`, { "tasks": newTarefas }, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(async (res) => {
                if (token) {
                    localStorage.setItem("token", token)
                    handleGetTarefas(idUser, token)
                }
            })
            .catch((res) => {
                console.log(res)
            })
    };
    const handleDeleteTask = (deletaTarefa) => {
        const newTarefas = deletaTarefa
        setTarefas(newTarefas)
        api.post(`/auth/user/add-tarefa/${idUser}`, { "tasks": newTarefas }, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(async (res) => {
                if (token) {
                    localStorage.setItem("token", token)
                    handleGetTarefas(idUser, token)
                }
            })
            .catch((res) => {
                console.log(res)
            })
    };
    const handleGetTarefas = (id, getToken) => {
        api.get(`/auth/user/tarefas/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + getToken
            }
        })
            .then(async (res) => {
                const tasks = await res.data.user.tasks
                localStorage.setItem('tasks', JSON.stringify(tasks))
                setTarefas(tasks)
            })
            .catch((res) => {
                console.log(res)
            })
    };
    const handleCreateAcount = () => {
        api.post('/auth/register', {name: values.name, email: values.email, password: values.password, confirmpassword: values.confirmPassword})
        .then(async (res) => {
            console.log(res)
            setCreate(false)
        })
        .catch((res) => {
            console.log(res)
        })
    }
    return (
        <ContextStorage.Provider 
            value={
                { values, onChange, handleLogin,
                token, handleInsertTask, handleGetTarefas,
                tarefas, create, setCreate,
                handleCreateAcount, handleDeleteTask }}>{children}</ContextStorage.Provider>
    )
}