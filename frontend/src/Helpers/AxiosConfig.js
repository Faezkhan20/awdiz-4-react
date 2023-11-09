import axios from "axios"
var Backendurl="http://localhost:8000/api/v1"
if(process.env.MODE== "PRODUCTION"){
Backendurl="https://awdiz-4.com/api/v1"
}
const api =axios.create({baseURL:  'http://localhost:8000/api/v1'})

export default api;
