import { useState } from "react";
import { createContext } from "react";

export const FilterContext = createContext();
function FilterContextProvider({ children }) {
  const [filterQuery, setFilter] = useState("");

  const setFilterFun = (val) => {
    setFilter(val);
  };
  console.log("from context",filterQuery) ;
  return (
    <FilterContext.Provider value={{ filterQuery, setFilterFun }}>
      {children}
    </FilterContext.Provider>
  );
}

export default FilterContextProvider;
