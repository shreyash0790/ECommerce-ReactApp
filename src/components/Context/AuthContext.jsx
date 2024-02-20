import React from "react";

const AuthContext = React.createContext({
  token:'',
  email:'',
  isLoggedIn:false,
  login:()=>{},
  logout:()=>{},
  emailHandler:()=>{}
});

export default AuthContext;
