import axios from "axios"
import { setHeaderToken, removeHeaderToken } from "../utils/auth";
axios.defaults.baseURL = 'http://localhost:8000/api/'


export function login(email, password) {
    return new Promise((resolve, rejected) => {
        axios.post('/login', {email, password})
            .then((res) => {
                let token = res.data.token;
                localStorage.setItem('token', token);
                setHeaderToken(token);
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

export function getUser(){
    return new Promise((resolve, rejected) => {
        axios.get('user')
            .then((res) => resolve(res.data))
            .catch((err) => rejected(err))
    })
}

// async function get_user(response){
//     if(!localStorage.getItem('token')){
//         return
//       }
//     try{ 
//     let response = await axios.get('user')
//         commit('set_user', response.data.data)
//     } catch (error){
//         commit('reset_user') 
//         removeHeaderToken()
//         localStorage.removeItem('token')
//         return error
//     } 
// }