import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAllContract = () => {
    return http.get(`${BASE_URL}/api/contract`)
}
const createContract = data => {
    return http.post(`${BASE_URL}/api/contract`, data);
};

const editContract = (id, data) => {
    return http.put(`${BASE_URL}/api/contract/${id}`, data);
};

const removeContract = id => {
    return http.delete(`${BASE_URL}/api/contract/${id}`);
};

const removeAllContract = (data) => {
    console.log(data , "123");
    alert('Removingitem');
    return http.delete(`${BASE_URL}/api/contract` , data);
};
const removeSelectContract = (data) => {
    console.log(data , "AB AYGA MJA");
    alert('Removingitem');
    return http.delete(`${BASE_URL}/api/deleteselectedcontracts` ,{ data: data } );
};



export default {
    removeAllContract,
    removeSelectContract,

    getAllContract,
    createContract,
    editContract,
    removeContract
};