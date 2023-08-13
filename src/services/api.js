import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

function createConfig(token){
    return {headers: { Authorization: `Bearer ${token}` }};
}

//Posts
function signIn(body){
    const promise = axios.post(`${URL}/signin`, body);
    return promise;
}

function signUp(body){
    const promise = axios.post(`${URL}/signup`, body);
    return promise;
}

function createCar(body, token){
    const config = createConfig(token);
    const promise = axios.post(`${URL}/cars`, body, config);
    return promise;
}

function addFavorites(id, token){
    const config = createConfig(token);
    const promise = axios.post(`${URL}/favorites/add/${id}`, config);
    return promise;
}

function removeFavorites(id, token){
    const config = createConfig(token);
    const promise = axios.post(`${URL}/favorites/remove/${id}`, config);
    return promise;
}

//Gets
function getCarsList(){
    const promise = axios.get(`${URL}/cars`);
    return promise;
}
function getUserById(token){
    const config = createConfig(token)
    const promise = axios.get(`${URL}/user`, config);
    return promise;
}
function getCarsById(id){
    const promise = axios.get(`${URL}/cars/${id}`);
    return promise;
}
function getCarsRanking(){
    const promise = axios.get(`${URL}/ranking`);
    return promise;
}
function isFavorite(id, token){
    const config = createConfig(token);
    const promise = axios.get(`${URL}/favorite/${id}`, config);
    return promise;
}



const api = {
    signIn,
    signUp,
    getUserById,
    createCar,
    getCarsList,
    getCarsById,
    getCarsRanking,
    addFavorites,
    removeFavorites,
    isFavorite
};

export default api;