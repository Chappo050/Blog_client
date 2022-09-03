import { Navigate, Outlet, useLocation } from 'react-router-dom';

const AuthWrapper = () => {
  const location = useLocation(); // current location

  let signedIn = localStorage.getItem("username")
  signedIn ? signedIn = JSON.parse(signedIn) : null;

  return signedIn
    ? <Outlet />
    : (
      <Navigate
        to="/user/login"
        replace
        state={{ from: location }} // <-- pass location in route state
      />
    );
};

export default AuthWrapper;
