import axios from 'axios'

const serverUrl = process.env.VUE_APP_SERVER_URL

export function getUserData() {
    return axios.get(`${serverUrl}/user/getuserdata/`, { withCredentials: true })
}

export function getUserAddresses() {
    return axios.get(`${serverUrl}/address`, { withCredentials: true })
}

export function addUserAddress(addressObject) {
    return axios.post(`${serverUrl}/address`, addressObject, { withCredentials: true })
}

export function updateUserAddress(updatedata, addressId) {
    return axios.put(`${serverUrl}/address/${addressId}`, updatedata, { withCredentials: true })
}

export function removeUserAddress(addressId) {
    return axios.delete(`${serverUrl}/address/${addressId}`, { withCredentials: true })
}