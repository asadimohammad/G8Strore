import axios from "axios";

export let httpRequest = axios.create({
    baseURL : 'https://wins-api-v2.liara.run/api' , 
})

httpRequest.interceptors.request.use((req)=> {
    try{
        req.headers  = {
            'access-control-allow-origin' : '*'
        }
        return req
    }catch(err) {
        return err
    }
})
