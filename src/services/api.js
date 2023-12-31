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
    const body = {id};
    const promise = axios.post(`${URL}/favorites/add/${id}`, body, config);
    return promise;
}

function removeFavorites(id, token){
    const config = createConfig(token);
    const body = {id};
    const promise = axios.post(`${URL}/favorites/remove/${id}`,body, config);
    return promise;
}

function processSale(id, token, action){
    const config = createConfig(token);
    const body = {sell: action};
    const promise = axios.post(`${URL}/cars-user/${id}`, body, config);
    return promise;
}

function deleteSale(id, token){
    const config = createConfig(token);
    const promise = axios.delete(`${URL}/cars/${id}`, config);
    return promise;
}

function updateCar(body, token, id){
    const config = createConfig(token);
    const promise = axios.post(`${URL}/cars/${id}`, body, config);
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
function getCarsSearch(item){
    const promise = axios.get(`${URL}/search?term=${item}`);
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
    isFavorite,
    getCarsSearch,
    processSale,
    deleteSale,
    updateCar
};

export default api;