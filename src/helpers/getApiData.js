import { api } from "./axios"

    
    export const getApiData = async (endPoint)=>{
        const {data} = await api.get(endPoint)
        
        return data

    }