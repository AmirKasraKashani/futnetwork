import axios from "axios"

const instance = axios.create({
    baseURL: 'https://api.futn.ir/api'
})

export default instance