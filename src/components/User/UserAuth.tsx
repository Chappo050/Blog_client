//IMPROTS//
import { Navigate, Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

//API setup

function Auth({ children }: { children: JSX.Element }) {
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);

  async function checkAuth() {
    await axios
      .get("http://localhost:5000/user/auth/", {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status === 304 || 200) {
          setLogged(true);
          setLoading(false);
        }
        setLoading(false);
      });
    setLoading(false);
  }

  useEffect(() => {
    checkAuth();
    setTimeout(() => {
      setLoading(false);
    }, 2000);

  }, []);

  return (
    <>
      {loading ? <span> Loading... </span> : <></>}

      {logged ? children : <></>}

      {!logged && !loading ? <Navigate to="/user/login" /> : <></>}
    </>
  );
}

export default Auth;
