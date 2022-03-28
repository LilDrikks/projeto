import { createContext, useState } from "react";
import api from "../services/Api";

export const ContextStorage = createContext()

export const ContextGlobal = ({ children }) => {
    function initialValues() {
        return { email: '', password: '', tarefa: '', tasks: {}}
    }

    const [values, setValues] = useState(initialValues)
    const [token, setToken] = useState("")

    function onChange(event) {
        const { value, name } = event.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleLogin = () => {
        console.log(values)
        api.post('/auth/user', {"email":values.email,"password":values.password})
            .then( async (res) => {
                const token = await res.data.token
                setToken(token)
                if(token){
                    setTimeout(() => {
                        localStorage.setItem("token", token)
                    }, 1000);
                }
            })
            .catch((res) => {
                console.log(res)
            })
            
    };
    const handledDadosUser = () => {
        api.post('/auth/user/add-tarefa/6234343bc41b8689873114c4', {...values.tasks,"title":values.tarefa, "content":"add description"}, {
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
    const handledTarefasUser = () => {
        console.log(values)
        api.get('/auth/user/tarefas/6234343bc41b8689873114c4', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then( async (res) => {
                console.log(res)
                const tasks = await res.data.user.tasks
                const tks = "tasks"
                setValues({...values, [tks]: tasks})
            })
            .catch((res) => {
                console.log(res)
            })
            
    };

    return (
        <ContextStorage.Provider value={{ values, onChange, handleLogin, token, handledDadosUser, handledTarefasUser}}>{children}</ContextStorage.Provider>
    )
}