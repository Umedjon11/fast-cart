import axios from "axios"


export const SetToken = (token: string) => {
    localStorage.setItem("fast_cart_access_token", token)
}

export const GetToken = () => {
    const token = localStorage.getItem("fast_cart_access_token")
    return token
}

export const Axios = axios.create({
    baseURL: "https://store-api.softclub.tj"
})

Axios.interceptors.request.use(
    (config) => {
        const token = GetToken()

        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`
        }

        return config
    },
    (error) => Promise.reject(error)
)