//IMPROTS//
import React, { useEffect } from 'react';
import axios from 'axios';

//Components//
import Nav from "../Nav";

//API setup
const api = axios.create({
  baseURL: 'http://localhost:5000/user/register'
})

function UserRegister() {

  return (
    <div >

    </div>
  );
}

export default UserRegister;
