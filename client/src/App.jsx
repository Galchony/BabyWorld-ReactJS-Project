import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import * as authService from "./services/authService";
import * as postService from "./services/postService";

import { AuthContext } from "./contexts/AuthContext";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Catalog from "./components/PostCatalog/Catalog";
import Profile from "./components/Profile/Profile";
import Create from "./components/PostCreate/Create";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from "./Components/Logout/Logout";

export default function App() {
  const navigate = useNavigate();

  const [auth, setAuth] = useState({});

  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);
      setAuth(result);
      navigate("/catalog");
    } catch (error) {
      console.log(error);
    }
  };
  const onRegisterSubmit = async (data) => {
    try {
      const { repeatPassword, ...registerData } = data;
      const result = await authService.register(registerData);
      setAuth(result);
      navigate("/catalog");
    } catch (error) {
      console.log(error);
    }
  };

  const onLogout = async () => {
    try {
      await authService.logout();
      setAuth({});
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const onCreateSubmit = async (values) => {
    try {
      await postService.create(values, auth.accessToken);
      navigate("/catalog");
    } catch (error) {
      console.log(error);
    }
  };

  const onDelete = async (postId) => {
    try {
      await postService.remove(postId, auth.accessToken);
      navigate("/catalog");
    } catch (error) {
      console.log(error);
    }
  };


  const context = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    onCreateSubmit,
    onDelete,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <AuthContext.Provider value={context}>
      <div>
        <Header />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<Create />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </main>
      <Footer />
    </AuthContext.Provider>
  );
}
