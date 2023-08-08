import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

function createConfig(token){
    return {headers: { Authorization: `Bearer ${token}` }};
}

function login(body){
    const promise = axios.post(`${URL}/`, body);
    return promise;
}

function singUp(body){
    const promise = axios.post(`${URL}/cadastro`, body);
    return promise;
}

const api = {
    login,
    singUp
};

export default api;