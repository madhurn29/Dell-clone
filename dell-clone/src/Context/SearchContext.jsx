import { useState } from "react";
import { createContext } from "react";

export const SearchContext = createContext();
function SearchContextProvider({ children }) {
  const [search, setSearch] = useState("");

  const setSearchFun = (val) => {
    setSearch(val);
  };
  console.log("from context",search) ;
  return (
    <SearchContext.Provider value={{ search, setSearchFun }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContextProvider;
