import axios from 'axios'

const serverUrl = process.env.VUE_APP_SERVER_URL

export function createUser(userData) {
    console.log('Creating user:', userData)
    return axios.post(`${serverUrl}/auth/signup`, userData, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
    })
}

export function checkUser(loginInfo) {
    return axios.post(`${serverUrl}/auth/check`, loginInfo, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
    })
}

export function loginUser(loginInfo) {
    console.log('Login attempt:', loginInfo)
    return axios.post(`${serverUrl}/auth/login`, loginInfo, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
    })
}

export function signOut() {
    return axios.post(`${serverUrl}/auth/logout`, {}, {
        withCredentials: true
    })
}