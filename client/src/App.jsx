import { Routes, Route, useNavigate } from "react-router-dom";

import * as userService from "./services/userService";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Catalog from "./components/PostCatalog/Catalog";
import Profile from "./components/Profile/Profile";
import Create from "./components/PostCreate/Create";
import Details from "./components/PostDetails/Details";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from "./components/Logout";

export default function App() {
  const navigate = useNavigate();

  const onLoginClickHandler = (userData) => {
    userService.login(userData).catch((err) => console.log(err));
    navigate("/");
  };

  const onLogoutClickHandler = () => {
    userService.logout().catch((err) => console.log(err));
    navigate("/");
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<Create />} />
          <Route path="/postDetails/:postId" element={<Details />} />
          <Route
            path="/login"
            element={<Login onLogin={onLoginClickHandler} />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/logout"
            element={
              <Logout onClick={onLogoutClickHandler} navigate={navigate} />
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
