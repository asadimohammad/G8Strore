import React, { useState } from "react";
import Input from "../../components/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    let [email , setEmail] = useState()
    let [password , setPassword] = useState()

    let navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    let user = {
        email : email ,
        password : password
    }
    
    let saveData = await axios('/login' , {
        method: 'POST',
        baseURL: 'https://wins-api-v2.liara.run/api',
        data: user
    })
    if(saveData.status === 200 ) {
        localStorage.setItem('access-token' , saveData.data.token)
        navigate('/')
    }
    
  };

  return (
    <form onSubmit={submitHandler}>
      {/* <Input txtLabel="Email" type="email" /> */}
      {/* <Input txtLabel="Password" type="password" /> */}
      <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
      <Input type="submit" />
    </form>
  );
};

export default Login;
