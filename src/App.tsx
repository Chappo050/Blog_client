import React, { useEffect } from 'react';
import Link from "react-router-dom";
import axios from 'axios';
import Nav from "./components/Nav";


const api = axios.create({
  baseURL: 'http://localhost:5000'
})

function App() {
  
 

useEffect(()=> {
  api.get('/').then(res => {
    console.log(res.data);
  })
}, [])

  return (
    <div>
    <Nav />
    <div className="text-whitefont-bold text-center m-10 text-2xl">
      <div>
        WELCOME TO MY PROFILE
      </div>
      <br />
      <br />
      <div>Please take a look at what I have been up too.</div>
      <br />
     
      <br />
      To learn more about me check out our ABOUT tab! :D
    </div>
  </div>
  );
}

export default App;
