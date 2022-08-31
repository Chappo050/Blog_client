import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="w-screen bg-custom-black text-white">
      <div className=" grid grid-flow-col-dense space-x-32 text-2xl text-custom-blue  font-semibold  ">
        <i />
        <Link to={`/`}>
          <h1 className="py-4 px-10 text-center hover:bg-custom-dark-blue transition duration-300  cursor-pointer">
            Home
          </h1>
        </Link>
        <Link to={`/user`}>
          <h1 className="py-4 px-10  text-center hover:bg-custom-dark-blue transition duration-300 cursor-pointer">
            User
          </h1>
        </Link>
        <Link to={`/blog`}>
          <h1 className="py-4 px-10  text-center hover:bg-custom-dark-blue transition duration-300  cursor-pointer">
            Blog
          </h1>
        </Link>
        <Link to={`/about`}>
          <h1 className="py-4 px-10  text-center hover:bg-custom-dark-blue transition duration-300 cursor-pointer">
           About
          </h1>
        </Link>
        <i />
      </div>
    </nav>
  );
};

export default Nav;
