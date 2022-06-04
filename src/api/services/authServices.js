import React from 'react'
import axios from '../axios.js'
import jwtDecode from 'jwt-decode'



const login = async (username, password) => {
    
    const data = {
        email: username,
        password: password
    }
    return await axios
        .post("login2/", data)
        .then((response) => {
            console.log(response.status)
            if (response.data.accesToken) {
                localStorage.setItem("user", JSON.stringify(response.data.accesToken));
            }

            return response.data;
        });
       
}

const logout = () => {
    localStorage.removeItem("user");
    location.reload();

}

const isLogin = () => {
    if(JSON.parse( localStorage.getItem("user"))){
        const token = localStorage.getItem("user")
        const decode = jwtDecode(token)
        
        return decode
    }else{
        return 0
    }
}



export default { login, logout, isLogin }