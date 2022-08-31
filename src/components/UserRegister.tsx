//IMPROTS//
import React, { useEffect } from 'react';
import axios from 'axios';

//Components//
import Nav from "./Nav";

//API setup
const api = axios.create({
  baseURL: 'http://localhost:5000/user/register'
})

function UserRegister() {

  useEffect(()=> {
    api.get('/').then(res => {
      console.log(res.data);
    })
  }, [])

  return (
    <div >
        
Register
    </div>
  );
}

export default UserRegister;
