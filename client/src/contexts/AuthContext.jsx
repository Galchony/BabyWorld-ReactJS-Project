import { createContext,useState } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from '../services/authService';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [auth, setAuth] = useState(() => {
    localStorage.removeItem("token");
    return {};
  });

  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);
      setAuth(result);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const onRegisterSubmit = async (data) => {
    try {
      const { repeatPassword, ...registerData } = data;
      const result = await authService.register(registerData);
      setAuth(result);
      navigate("/");
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

  const values = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    username: auth.username,
    isAuthenticated: !!auth.accessToken,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthContext.displayName = "AuthContext";
