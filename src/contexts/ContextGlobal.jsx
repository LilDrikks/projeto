import { createContext, useState } from "react";
import api from "../services/Api";

export const ContextStorage = createContext()

export const ContextGlobal = ({ children }) => {
    function initialValues() {
        return { email: '', password: '' }
    }

    const [values, setValues] = useState(initialValues)
    const [token, setToken] = useState("")
    console.log(values)
    function onChange(event) {
        const { value, name } = event.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const authUser = async () => {
        await api.post('/auth/user', {
            "email": values.email,
            "password": values.password
        }).then((res) => {
            console.log(res.data)
            window.localStorage.setItem("token", res.data.token)
        }).catch((res) => {
            console.log(res)
        })
    }
    
    
    return (
        <ContextStorage.Provider value={{ values, onChange, authUser, token }}>{children}</ContextStorage.Provider>
    )
}