import { Navigate, Outlet, useLocation } from 'react-router-dom';

const AuthWrapper = () => {
  const location = useLocation(); // current location

  let signedIn = localStorage.getItem("user")
  signedIn ? signedIn = JSON.parse(signedIn) : signedIn = null;

  return signedIn
    ? <Outlet />
    : (
      <Navigate
        to="/"
        replace
        state={{ from: location }} // <-- pass location in route state
      />
    );
};

export default AuthWrapper;
