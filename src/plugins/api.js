import axios from "axios"
import { setHeaderToken, removeHeaderToken } from "../utils/auth";
axios.defaults.baseURL = 'http://localhost:8000/api/'


export function login(email, password) {
    return new Promise((resolve, rejected) => {
        axios.post('/login', {email, password})
            .then((res) => {
                let token = res.data.token;
                localStorage.setItem('token', token);
                setHeaderToken(token)
                resolve(res.data)
            })
            .catch((err) => rejected(err))
    })
}

export function logout() {
    return new Promise(() => {
        removeHeaderToken();
    })
}