import { createContext, useState } from "react";
import api from "../services/Api";

export const ContextStorage = createContext()

export const ContextGlobal = ({ children }) => {
    function initialValues() {
        return { email: '', password: '', tarefa: ''}
    }

    const [values, setValues] = useState(initialValues)
    const [token, setToken] = useState("")
    const [idUser, setIdUser] = useState("")
    const [tarefas, setTarefas] = useState([])

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
        api.post('/auth/user', {"email":values.email,"password":values.password})
            .then( async (res) => {
                const token = await res.data.token
                const id = await res.data.iduser
                setToken(token)
                setIdUser(id)
                if(token){
                    setTimeout(() => {
                        localStorage.setItem("token", token)
                        handledGetTarefasUser()
                    }, 1000);
                }
            })
            .catch((res) => {
                console.log(res)
            })
            
    };
    const handleDadosUser = () => {
        const newTarefas = [...tarefas, {task:{title:values.tarefa, content:'teste6'}}]
        setTarefas(newTarefas)
        console.log(values)
        api.post(`/auth/user/add-tarefa/${idUser}`, {"tasks":newTarefas}, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then( async (res) => {
                console.log(res)
            })
            .catch((res) => {
                console.log(res)
            })
            
    };
    const handledGetTarefasUser = () => {
        api.get(`/auth/user/tarefas/${idUser}`, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then( async (res) => {
                console.log(res)
                const tasks = await res.data.user.tasks
                setTarefas(tasks)
                console.log(tarefas)
            })
            .catch((res) => {
                console.log(res)
            })
            
    };

    return (
        <ContextStorage.Provider value={{ values, onChange, handleLogin, token, handleDadosUser, handledGetTarefasUser}}>{children}</ContextStorage.Provider>
    )
}