import axios from 'axios';

const ApiCreate = async (method, endpoint, data, token) => {

    return axios({
        "baseURL": 'http://127.0.0.1:3333/',
        "method": method,
        "url": endpoint,
        "data": data,
        "headers": { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept", Authorization: `Bearer ${token}` },        
    })
}
export default ApiCreate;