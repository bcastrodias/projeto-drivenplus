import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const persistedAuth = JSON.parse(localStorage.getItem("auth"));
  const [auth, setAuth] = useState(persistedAuth);
  const persistedMembership = JSON.parse(localStorage.getItem("membership"));
  const [membership, setMembership] = useState(persistedMembership);
  const persistedUserData = JSON.parse(localStorage.getItem("userData"));
  const [userData, setUserData] = useState(persistedUserData);

  const doLogin = (authData) => {
    setAuth(authData.token);
    setMembership(authData.membership);
    setUserData(authData);
    localStorage.setItem("auth", JSON.stringify(authData.token));
    localStorage.setItem("membership", JSON.stringify(authData.membership));
    localStorage.setItem("userData", JSON.stringify(authData));
  };

  return (
    <AuthContext.Provider value={{ auth, doLogin, membership, userData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
