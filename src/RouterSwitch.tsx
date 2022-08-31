import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import User from "./components/User";
import Blog from "./components/Blog";
import About from "./components/About";
import UserLogin from "./components/UserLogin";
import UserRegister from "./components/UserRegister";
import BlogPost from "./components/BlogPost";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="user" element={<User />}>
          <Route path="register" element={<UserRegister />} />
          <Route path="login" element={<UserLogin />} />
        </Route>
        <Route path="blog" element={<Blog />}>
          <Route path="post" element={<BlogPost />} />
        </Route>
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
