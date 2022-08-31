import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import User from "./components/User";
import Blog from "./components/Blog";
import About from "./components/About";

const RouteSwitch = () => {
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/user"  element={<User />} />
          <Route path="/blog"  element={<Blog />} />
          <Route path="/about"  element={<About />} />
        </Routes>
      </BrowserRouter>
  );
};

export default RouteSwitch;
