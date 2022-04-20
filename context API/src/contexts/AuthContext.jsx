import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const handleChange = (value) => {
    setIsAuth(!value);
  };
  return (
    <AuthContext.Provider value={{ isAuth, handleChange }}>
      {children}
    </AuthContext.Provider>
  );
};
