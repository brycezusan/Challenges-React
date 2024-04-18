import { useCallback } from "react";
import "./App.css";
import ListMovies from "./components/ListMovies";
import Search from "./components/Search";
import useMovie from "./hooks/useMovie";
import useSearch from "./hooks/useSearch";
import debounce from "just-debounce-it";

function App() {
  const {
    query,
    setQuery,
    isFirstRender,
    error,
    setError,
    prevQuery,
    sort,
    setSorted,
  } = useSearch();
  const { movies, idMovie, isEmpty, loading, obtenerMovie } = useMovie(
    prevQuery,
    sort
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedGetMovies = useCallback(
    debounce(query => {
      // console.log('search', query)
      obtenerMovie({ query })
    }, 1000)
    , []
  )

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query === "") {
      setError("Campo requerido");
    } else {
      obtenerMovie({ query });
      setQuery("");
      setError("");
      isFirstRender.current = true;
    }
  };

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    debouncedGetMovies(newQuery);
  };
  return (
    <>
      <header>
        <h1 className="center">
          Buscador de <span className="bold">Peliculas</span>
        </h1>
        <Search
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          idMovie={idMovie}
          query={query}
          setQuery={setQuery}
          error={error}
          sort={sort}
          setSorted={setSorted}
        />
      </header>

      <main className="container">
        {isEmpty ? (
          <h2 style={{ color: "red" }}>No tenemos Resultados</h2>
        ) : (
          <>
            <h2 className="center title">Lista de Peliculas</h2>
            <ListMovies movies={movies} />
          </>
        )}
        {loading && <p className="center">Cargando...</p>}
      </main>
    </>
  );
}

export default App;
