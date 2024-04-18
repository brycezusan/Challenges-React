import { useId, useMemo, useState } from "react";
import { obtenerDataMovie } from "../api";

function useMovie(prevQuery, sort) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const idMovie = useId();

  const obtenerMovie = async ({ query }) => {
    if (query === prevQuery.current) return;
    try {
      setLoading(true);
      setMovies([]);
      prevQuery.current = query;
      const movies = await obtenerDataMovie({ query });
      if (movies) {
        setMovies(movies);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const isEmpty = useMemo(() => movies.length === 0, [movies]);

  const movieSorted = useMemo(
    () =>
      sort
        ? [...movies].sort((a, b) => a.Title.localeCompare(b.Title))
        : movies,
    [movies, sort]
  );

  return {
    movies: movieSorted,
    loading,
    idMovie,
    isEmpty,
    obtenerMovie,
  };
}

export default useMovie;
