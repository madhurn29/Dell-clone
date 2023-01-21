import { useState, createContext } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [userName, setUserName] = useState("");
  const [totalPrice, setTotalPrice] = useState();

  const TotalPriceFun = (val) => {
    setTotalPrice(val);
  };
  console.log(totalPrice,"from contxt")
  const setLogin = () => {
    setIsAuth(true);
  };
  console.log("isAuth", isAuth);
  console.log("userNAme", userName);
  const setLogout = () => {
    setIsAuth(false);
  };

  const setName = (string) => {
    setUserName(string);
  };
  return (
    <AuthContext.Provider
      value={{ isAuth, setLogin, setLogout, setName, userName, TotalPriceFun ,totalPrice}}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
