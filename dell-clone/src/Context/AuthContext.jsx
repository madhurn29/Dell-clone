import { useState, createContext } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [userName, setUserName] = useState("");
  const [totalPrice, setTotalPrice] = useState();

  const TotalPriceFun = (val) => {
    setTotalPrice(val);
  };

  const setLogin = () => {
    
    setIsAuth(true);
  };

  const setLogout = () => {
    localStorage.setItem("isLogged", false);
    setIsAuth(false);
  };

  const setName = (string) => {
    setUserName(string);
  };
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setLogin,
        setLogout,
        setName,
        userName,
        TotalPriceFun,
        totalPrice,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
