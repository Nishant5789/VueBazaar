import axios from 'axios'

const serverUrl = process.env.VUE_APP_SERVER_URL

export function createOrder(orderObject) {
    return axios.post(`${serverUrl}/order`, orderObject, { withCredentials: true })
}

export function getAllOrderByUser() {
    return axios.get(`${serverUrl}/order/user`, { withCredentials: true })
}

export function updateOrder(updateOrderField, orderId) {
    return axios.patch(`${serverUrl}/order/${orderId}`, updateOrderField, { withCredentials: true })
}

export function removeOrder(orderId) {
    return axios.delete(`${serverUrl}/order/${orderId}`, { withCredentials: true })
}