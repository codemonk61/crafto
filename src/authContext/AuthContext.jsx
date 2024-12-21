 import React from "react"
 
 export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {

  const [user, setUser] = React.useState({username: "", otp: "1234", isLoggedIn: false});
   
  return (
    <AuthContext.Provider value={{ user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider