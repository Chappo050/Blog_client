//IMPROTS//
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//Components//
import Nav from "../Nav";

//API setup
const api = axios.create({
  baseURL: "http://localhost:5000/user/register",
});


function UserRegister() {
  

  useEffect(()=> {
    api.get('/').then(res => {
      console.log(res.data);
    })
  }, [])
  

  let navigate = useNavigate();

  const [formValue, setformValue] = React.useState({
    username: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    let result = await api.post("/", formValue);
    if (result.status === 200) {
      navigate('/');
    }
  };

  const handleChange = (event: any) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }
  return (
    <div>
      <div className="grid grid-cols-3 ">
        <i />
        <form
          onSubmit={handleSubmit}
          className="text-white border border-custom-silver text-center "
      
        >
          <div className="text-lg">Please register your account below.</div>
          <div className="p-2 m-2">
            <label className="pr-2 left-6">Username: </label>
            <input
              type="username"
              name="username"
              placeholder="Enter your username"
              value={formValue.username}
              onChange={handleChange}
              required
              className="text-black p-0.5"
            />
          </div>
          <div className="p-2 m-2">
            <label className="pr-2">Email: </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formValue.email}
              onChange={handleChange}
              required
              className="text-black p-0.5"
            />
          </div>
          <div className="p-2 m-2">
            <label className="pr-2">Password: </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formValue.password}
              onChange={handleChange}
              required
              className="text-black p-0.5"
            />
          </div>
          <div className="">
            <button
              type="submit"
              className="bg-custom-dark-blue p-1 border border-custom-silver"
            >
              Submit
            </button>
          </div>
        </form>
        <i />
      </div>
    </div>
  );
}

export default UserRegister;
