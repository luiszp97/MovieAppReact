import axios from "axios"

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers : {'Content-Type': 'aplication/json;charset=utf-8'},
    params:{
        'api_key': 'e9f1a36d7b4f761f8a4fbf4fe67eb64f',
    }
})