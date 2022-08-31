import React, { useEffect } from 'react';
import axios from 'axios';
import Nav from "./Nav";

const api = axios.create({
  baseURL: 'http://localhost:5000/blog'
})

function Blog() {

  useEffect(()=> {
    api.get('/').then(res => {
      console.log(res.data);
    })
  }, [])


  return (
    <div >
        <Nav />
About
    </div>
  );
}

export default Blog;
