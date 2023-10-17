import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAllClient = () => {
    return http.get(`${BASE_URL}/api/client`)
}
const createClient = data => {
    return http.post(`${BASE_URL}/api/client`, data);
};

const editClient = (id, data) => {
    return http.put(`${BASE_URL}/api/client/${id}`, data);
};

const removeClient = id => {
    console.log(id , "removing client");
    return http.delete(`${BASE_URL}/api/client/${id}`);
};
const getCount = () => {
    return http.get(`${BASE_URL}/api/count/client/all`)
}

const removeAllClient = (data) => {
    console.log(data , "123");
    alert('Removingitem');
    return http.delete(`${BASE_URL}/api/client` , data);
};
const removeSelectClient = (data) => {
    console.log(data , "AB AYGA MJA");
    alert('Removingitem');
    return http.delete(`${BASE_URL}/api/deleteselectedclients` ,{ data: data } );
};



export default {
    removeAllClient,
    removeSelectClient,
    getAllClient,
    createClient,
    editClient,
    removeClient,
    getCount
};