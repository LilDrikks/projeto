import { createContext, useState } from "react";
import api from "../services/Api";

export const ContextStorage = createContext()

export const ContextGlobal = ({ children }) => {
    function initialValues() {
        return { name: '', email: '', password: '', confirmPassword: '' ,tarefa: '' }
    }

    const [values, setValues] = useState(initialValues)
    const [token, setToken] = useState("")
    const [idUser, setIdUser] = useState("")
    const [tarefas, setTarefas] = useState([])
    const [create, setCreate] = useState(false)

    function onChange(event) {
        const { value, name } = event.target
        setValues({
            ...values,
            [name]: value
        })
        console.log(values)
    }
    const handleLogin = () => {
        console.log(values)
        api.post('/auth/user', { "email": values.email, "password": values.password })
            .then(async (res) => {
                const token = await res.data.token
                const id = await res.data.iduser
                setToken(token)
                setIdUser(id)
                console.log(token, id)
                if (token) {
                    localStorage.setItem("token", token)
                    handleGetTarefas(id, token)
                }
            })
            .catch((res) => {
                console.log(res)
            })
    };
    const handleInsertTask = () => {
        const newTarefas = [...tarefas, { task: { title: values.tarefa, content: 'teste6' } }]
        setTarefas(newTarefas)
        api.post(`/auth/user/add-tarefa/${idUser}`, { "tasks": newTarefas }, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(async (res) => {
                console.log(res)
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
                console.log(res)
                const tasks = await res.data.user.tasks
                setTarefas(tasks)
                console.log(tarefas)
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
                handleCreateAcount }}>{children}</ContextStorage.Provider>
    )
}