import axios from "axios";
 
const api = axios.create({
    baseURL: 'http://192.168.3.43:9999/api-ecoleta/'
});
 
export default api;