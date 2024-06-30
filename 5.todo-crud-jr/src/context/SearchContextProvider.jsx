import { createContext, useState } from "react";
import { useTaskContext } from "../hooks/useTaskContext";

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const { tasks } = useTaskContext();
  const [query, setQuery] = useState("");

  const handleChangeQuery = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
  };

  const taskFilterForQuery = tasks.filter((tarea) => {
    return tarea.nombre.toLowerCase().includes(query.toLowerCase());
  });


  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        handleChangeQuery,
        taskFilterForQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
