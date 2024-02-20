import { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const initialEmail = localStorage.getItem("email");


  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState(initialEmail);

  const userIsLoggedIn = !!token;

  const loginHandler = (token,email) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
  };
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  const EmailHandler = (email) => {
    setEmail(email);
  };

  const authContextValue = {
    token: token,
    email: email,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    emailHandler: EmailHandler,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
