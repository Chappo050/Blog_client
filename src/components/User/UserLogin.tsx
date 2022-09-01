//IMPROTS//
import React, { useEffect, useState } from "react";
import axios from "axios";

//Components//
import Nav from "../Nav";

//API setup
const api = axios.create({
  baseURL: "http://localhost:5000/user/login",
});

interface ErrorMessage {
  name: String;
  message: String;
}

const defaultErrorMessage: ErrorMessage[] = [];

function UserLogin() {
  const [errorMessages, setErrorMessages]: [
    ErrorMessage[],
    (errorMessages: ErrorMessage[]) => void
  ] = useState(defaultErrorMessage);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    api.get("/").then((res) => {
      console.log(res.data);
    });
  }, []);

  const handleSubmit = (event:any) => {
    // Prevent page reload
    event.preventDefault();
    const payload = { event };
    const response =  axios.post('/', payload);
  };


  return (
    <div>
      <div className="grid grid-cols-3 text-black">
        <i/>
        <form onSubmit={handleSubmit}>
          <div className="">
            <label>Username </label>
            <input type="text" name="username" required />
          </div>
          <div className="">
            <label>Password </label>
            <input type="password" name="password" required />
          </div>
          <div className="bg-white-500">
            <button type="submit">Submit</button>
          </div>
        </form>
           <i/>
      </div>
    </div>
  );
}

export default UserLogin;
