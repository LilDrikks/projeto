import api from "../services/Api";

const [dados, setDados] = useState({})
    const createUser = (name, email, password, confirmpassword) => {
        api.post('/auth/register', {
            name,
            email,
            password,
            confirmpassword
        }).then((res) => {
            console.log(res)
        }).catch((res) => {
            console.log(res)
        })
    }
    const authUser = (email, password) => {
        api.post('/auth/user', {
            email,
            password
        }).then((res) => {
            console.log(res)
        }).catch((res) => {
            console.log(res)
        })
    }
    useEffect(() => {
        setDados({ createUser: createUser, authUser: authUser })
    }, [])