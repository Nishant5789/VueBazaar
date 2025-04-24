import axios from 'axios'

const serverUrl = process.env.VUE_APP_SERVER_URL

export function getCartItems() {
    return axios.get(`${serverUrl}/cart/`, { withCredentials: true })
}

export function addItem(cartItem) {
    return axios.post(`${serverUrl}/cart/`, cartItem, { withCredentials: true })
}

export function updateItem(updatecartItem, cartItemId) {
    return axios.patch(`${serverUrl}/cart/${cartItemId}`, updatecartItem, { withCredentials: true })
}

export function removeItem(cartItemId) {
    return axios.delete(`${serverUrl}/cart/${cartItemId}`, { withCredentials: true })
}

export function removeAllItems() {
    return axios.post(`${serverUrl}/cart/removeAllItems`, {}, { withCredentials: true })
}