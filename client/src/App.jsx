import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";

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
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}
