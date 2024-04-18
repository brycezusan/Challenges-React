import { useEffect, useRef, useState } from "react";

function useSearch(){
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [sort, setSorted] = useState(false)
  const isFirstRender = useRef(true);
  const prevQuery = useRef(query);


  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = query === "";
      return;
    }
    if (query === "") {
      setError("Campo requerido");
      return;
    }
    if (query.match(/^[(1-9)0-9]/)) {
      setError("No puede empezar con numeros");
      return;
    }

    if (query.length < 4) {
      setError("Minimo de 4 caracteres");
      return;
    }

    setError("");
  }, [query]);

  return{
    error,
    setError,
    query,
    setQuery,
    sort,
    setSorted,
    isFirstRender,
    prevQuery,
  }
}

export default useSearch