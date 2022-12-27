import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const persistedAuth = JSON.parse(localStorage.getItem("auth"));
  const [auth, setAuth] = useState(persistedAuth);

  const doLogin = (authData) => {
    setAuth(authData);
    localStorage.setItem("auth", JSON.stringify(authData));
  };

  return (
    <AuthContext.Provider value={{ auth, doLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
