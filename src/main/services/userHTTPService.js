import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAllUser = () => {
    return http.get(`${BASE_URL}/api/user`)
}
const createUser = data => {
    return http.post(`${BASE_URL}/api/user`, data);
};

const editUser = (id, data) => {
    return http.put(`${BASE_URL}/api/user/${id}`, data);
};

const removeUser = id => {
    return http.delete(`${BASE_URL}/api/user/${id}`);
};
const getUser = async(id) => {
    return await http.get(`${BASE_URL}/api/user/${id}`)
}
const getCount = () => {
    return http.get(`${BASE_URL}/api/count/user/all`)
}
const login = data => {
    return http.post(`${BASE_URL}/api/user/login`, data);
};


const removeAllUser = (data) => {
    console.log(data , "123");
    alert('Removingitem');
    return http.delete(`${BASE_URL}/api/user` , data);
};
const removeSelectUser = (data) => {
    console.log(data , "bhakk");
    alert('Removingitem');
    return http.delete(`${BASE_URL}/api/deleteselectedusers` ,{ data: data } );
};


export default {
    removeAllUser,
    removeSelectUser,
    getAllUser,
    createUser,
    editUser,
    removeUser,
    getCount,
    getUser,
    login
};