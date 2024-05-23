import axios from 'axios';

var urlBase = "http://localhost:11416/api"
    const Api = axios.create({
        baseURL: urlBase        
    })

    export default Api;