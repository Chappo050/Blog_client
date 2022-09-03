//IMPROTS//
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//Components//
import Nav from "../Nav";

//API setup
const api = axios.create({
  baseURL: "http://localhost:5000/",
});

interface ErrorMessage {
  name: String;
  message: String;
}

const defaultErrorMessage: ErrorMessage[] = [];

function UserLogin() {

  let navigate = useNavigate();


  useEffect(() => {
    setTimeout(function() {
      navigate('/')
    }, 2000);
  }, []);



  return (
    <div>
      <div className="text-whitefont-bold text-center m-10 text-2xl">
        Logout Successful. Redirecting.
      </div>
    </div>
  );
}

export default UserLogin;
