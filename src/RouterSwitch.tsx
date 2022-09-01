import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import User from "./components/User/User";
import Blog from "./components/Blog/Blog";
import About from "./components/About";
import UserLogin from "./components/User/UserLogin";
import UserRegister from "./components/User/UserRegister";
import BlogPost from "./components/Blog/BlogPost";

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
